(function () {

  // ---- Canonical part normalization ----
  // Split "Eyes, arms, or chest" into ["Eyes", "Arms", "Torso"]
  // Aliases collapse synonyms into one canonical name
  const aliases = {
    "arm":    "Arms",
    "arms":   "Arms",
    "hand":   "Hands",
    "hands":  "Hands",
    "leg":    "Legs",
    "legs":   "Legs",
    "feet":   "Feet",
    "foot":   "Feet",
    "eye":    "Eyes",
    "eyes":   "Eyes",
    "brain":  "Brain",
    "neural": "Neural",
    "back":   "Back",
    "spine":  "Back",       // Back, spine → just Back
    "torso":  "Torso",
    "chest":  "Torso",      // Eyes, arms, or chest → Torso
    "skin":   "Skin",
    "immune": "Immune",
    "liver":  "Liver",
    "digestive": "Digestive",
    "womb":   "Womb",
    "balls":  "Womb",       // Womb or balls → same slot as Womb
  };

  function parseBodyParts(bodyPart) {
    if (!bodyPart) return [];
    return bodyPart
      .split(/,\s*|\s+or\s+|\s+and\s+/)
      .map(p => p.trim().toLowerCase())
      .filter(Boolean)
      .map(p => aliases[p] || (p.charAt(0).toUpperCase() + p.slice(1)))
      .filter((v, i, a) => a.indexOf(v) === i); // deduplicate
  }

  // ---- Slot mapping (canonical part → display slot) ----
  const slotMap = [
    { slot: "head",     label: "◉ HEAD / NEURAL / EYES", parts: ["Brain", "Neural", "Eyes"] },
    { slot: "arms",     label: "⚙ ARMS / HANDS",         parts: ["Arms", "Hands"] },
    { slot: "torso",    label: "▓ TORSO / BACK / SKIN",  parts: ["Torso", "Back", "Skin", "Immune"] },
    { slot: "internal", label: "░ INTERNAL ORGANS",       parts: ["Liver", "Digestive", "Womb"] },
    { slot: "legs",     label: "▲ LEGS / FEET",          parts: ["Legs", "Feet"] },
  ];

  function getSlotForPart(canonicalPart) {
    return slotMap.find(s => s.parts.includes(canonicalPart))?.slot || null;
  }

  const legalityColors = {
    Open:       "#4ade80",
    Regulated:  "#60a5fa",
    Restricted: "#facc15",
    Prohibited: "#f97316",
    Illegal:    "#ef4444",
    Condemned:  "#dc2626",
  };

  // ---- Migrate old format { id: true } → wipe (incompatible) ----
  (function migrate() {
    try {
      const raw = JSON.parse(localStorage.getItem("equippedItems") || "{}");
      const isOld = Object.values(raw).some(v => v === true);
      if (isOld) localStorage.removeItem("equippedItems");
    } catch(e) { localStorage.removeItem("equippedItems"); }
  })();

  // ---- Selected slot ----
  let selectedSlot = null;

  // ---- Equipped state ----
  // Format: { itemId: "CanonicalPart" }  (WHERE it's equipped, not just IF)
  function getEquipped() {
    return JSON.parse(localStorage.getItem("equippedItems") || "{}");
  }

  function setEquipped(state) {
    localStorage.setItem("equippedItems", JSON.stringify(state));
  }

  // Returns the canonical part this item is equipped in, or null
  function equippedInPart(itemId) {
    return getEquipped()[itemId] || null;
  }

  // Returns the itemId currently occupying a canonical part, or null
  function getOccupant(canonicalPart) {
    const state = getEquipped();
    return Object.keys(state).find(id => state[id] === canonicalPart) || null;
  }

  function equipItem(itemId, canonicalPart) {
    const state = getEquipped();
    // Remove item from any previous slot
    delete state[itemId];
    // Kick out any existing occupant of this part
    Object.keys(state).forEach(id => {
      if (state[id] === canonicalPart) delete state[id];
    });
    state[itemId] = canonicalPart;
    setEquipped(state);
  }

  function unequipItem(itemId) {
    const state = getEquipped();
    delete state[itemId];
    setEquipped(state);
  }

  // ---- Build item data grouped by slot ----
  // Each item appears once per canonical part it supports,
  // filed under the appropriate display slot
  function getPurchasedBySlot() {
    const purchases = JSON.parse(localStorage.getItem("shopPurchases") || "{}");
    // bySlot[slot][canonicalPart] = [items...]
    const bySlot = {};

    shopItems.forEach((item) => {
      if (!item.bodyPart) return;
      if (!(purchases[item.id] > 0)) return;

      const parts = parseBodyParts(item.bodyPart);
      parts.forEach(part => {
        const slot = getSlotForPart(part);
        if (!slot) return;
        if (!bySlot[slot]) bySlot[slot] = {};
        if (!bySlot[slot][part]) bySlot[slot][part] = [];
        // Avoid duplicate entries for same item in same part
        if (!bySlot[slot][part].find(i => i.id === item.id)) {
          bySlot[slot][part].push(item);
        }
      });
    });

    return bySlot;
  }

  // ---- Build item card ----
  // canonicalPart = the part context this card is shown in
  function buildItemCard(item, canonicalPart) {
    const currentPart = equippedInPart(item.id);
    const isEquippedHere = currentPart === canonicalPart;
    const isEquippedElsewhere = currentPart && currentPart !== canonicalPart;
    const occupant = getOccupant(canonicalPart);
    const partBlocked = occupant && occupant !== item.id; // another item has this part

    const leg = legalityColors[item.legality] || "#888";

    let btnClass, btnText;
    if (isEquippedHere) {
      btnClass = "unequip"; btnText = "▼ UNEQUIP";
    } else if (isEquippedElsewhere) {
      btnClass = "swap"; btnText = `⇄ MOVE HERE`;
    } else if (partBlocked) {
      btnClass = "swap"; btnText = "⇄ SWAP";
    } else {
      btnClass = "equip"; btnText = "▲ EQUIP";
    }

    const div = document.createElement("div");
    div.className = `eq-item ${isEquippedHere ? "is-equipped" : "is-available"}`;
    div.dataset.id = item.id;

    // Show where it's equipped if elsewhere
    const elsewhereNote = isEquippedElsewhere
      ? `<div class="eq-item-elsewhere">// CURRENTLY EQUIPPED: ${currentPart.toUpperCase()} //</div>`
      : "";

    div.innerHTML = `
      <div class="eq-item-header">
        <div class="eq-item-name">${item.name}</div>
        <div class="eq-item-bodypart">${item.bodyPart}</div>
      </div>
      ${item.description ? `<div class="eq-item-desc">${item.description}</div>` : ""}
      ${item.emulated ? `<div class="eq-item-emulated">⚔ Emulates: ${item.emulated}</div>` : ""}
      ${elsewhereNote}
      <div class="eq-item-footer">
        <div class="eq-item-tags">
          <span class="eq-tag" style="color:${leg};border-color:${leg};">${item.legality.toUpperCase()}</span>
          <span class="eq-tag" style="color:rgba(255,255,255,0.3);border:1px solid rgba(255,255,255,0.1);">${item.type.toUpperCase()}</span>
          ${item.price ? `<span class="eq-tag" style="color:rgba(252,238,9,0.5);border:1px solid rgba(252,238,9,0.2);">Ȼ${item.price.toLocaleString()}</span>` : ""}
        </div>
        <button class="equip-btn ${btnClass}" data-id="${item.id}">
          ${btnText}
        </button>
      </div>
    `;

    div.querySelector(".equip-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      if (isEquippedHere) {
        unequipItem(item.id);
      } else {
        equipItem(item.id, canonicalPart);
      }
      render();
    });

    return div;
  }

  // ---- Update body glow ----
  function updateBody(bySlot) {
    const bodyEl = document.getElementById("asciiBody");
    slotMap.forEach(({ slot }) => {
      const partMap = bySlot[slot] || {};
      const anyEquipped = Object.values(partMap).flat().some(
        item => equippedInPart(item.id) !== null &&
                slotMap.find(s => s.slot === slot)?.parts.includes(equippedInPart(item.id))
      );
      bodyEl.classList.toggle("has-" + slot, anyEquipped);
      bodyEl.classList.toggle("selected-" + slot, selectedSlot === slot);
    });
  }

  // ---- Render ----
  function render() {
    const bySlot = getPurchasedBySlot();
    const listEl = document.getElementById("equipmentList");

    updateBody(bySlot);

    const totalPurchased = Object.values(bySlot).reduce(
      (s, partMap) => s + Object.values(partMap).flat().length, 0
    );

    if (totalPurchased === 0) {
      listEl.innerHTML = `
        <div class="eq-empty">
          // NO CYBERWARE OR GEAR PURCHASED //<br><br>
          <span style="font-size:0.85em;opacity:0.5">Buy items with a body part from the shop to populate this loadout.</span>
        </div>`;
      return;
    }

    if (!selectedSlot) {
      listEl.innerHTML = `
        <div class="eq-empty">
          // SELECT A BODY ZONE //<br><br>
          <span style="font-size:0.85em;opacity:0.5">Click a section on the body diagram to manage that slot's equipment.</span>
        </div>`;
      return;
    }

    const partMap = bySlot[selectedSlot];
    const slotDef = slotMap.find(s => s.slot === selectedSlot);
    listEl.innerHTML = "";

    if (!partMap || Object.keys(partMap).length === 0) {
      listEl.innerHTML = `
        <div class="eq-empty">
          // NOTHING PURCHASED FOR THIS SLOT //<br><br>
          <span style="font-size:0.85em;opacity:0.5">Visit the shop to buy ${slotDef.label.replace(/^. /, "").toLowerCase()} items.</span>
        </div>`;
      return;
    }

    // Count: how many canonical parts in this slot have something equipped
    const equippedCount = slotDef.parts.filter(p => getOccupant(p) !== null).length;
    const totalParts = Object.keys(partMap).length;

    // Title bar
    const titleBar = document.createElement("div");
    titleBar.className = `slot-group slot-${selectedSlot}`;
    titleBar.style.cssText = "animation:none;opacity:1;margin-bottom:4px;";
    const titleHeader = document.createElement("div");
    titleHeader.className = "slot-header";
    titleHeader.innerHTML = `${slotDef.label} <span class="slot-count">${equippedCount}/${totalParts} SLOTS FILLED</span>`;
    titleBar.appendChild(titleHeader);
    listEl.appendChild(titleBar);

    // One group per canonical part
    Object.entries(partMap).forEach(([canonicalPart, items], i) => {
      const occupantId = getOccupant(canonicalPart);
      const equippedItem = occupantId ? items.find(it => it.id === occupantId) : null;
      // Also show equipped-elsewhere items as available here
      const availableItems = items.filter(it => it.id !== occupantId);

      const group = document.createElement("div");
      group.className = `slot-group slot-${selectedSlot}`;
      group.style.animationDelay = `${i * 60}ms`;

      const bpHeader = document.createElement("div");
      bpHeader.className = "slot-header bodypart-header";
      bpHeader.innerHTML = `
        <span class="bodypart-title">${canonicalPart.toUpperCase()}</span>
        <span class="slot-count">${occupantId ? "1/1 EQUIPPED" : "0/1 EQUIPPED"}</span>
      `;
      group.appendChild(bpHeader);

      if (equippedItem) {
        const section = document.createElement("div");
        section.className = "slot-section";
        const lbl = document.createElement("div");
        lbl.className = "section-label equipped-label";
        lbl.textContent = "▲ EQUIPPED";
        section.appendChild(lbl);
        section.appendChild(buildItemCard(equippedItem, canonicalPart));
        group.appendChild(section);
      }

      if (availableItems.length > 0) {
        const section = document.createElement("div");
        section.className = "slot-section";
        const lbl = document.createElement("div");
        lbl.className = "section-label available-label";
        lbl.textContent = "○ AVAILABLE";
        section.appendChild(lbl);
        availableItems.forEach(item => section.appendChild(buildItemCard(item, canonicalPart)));
        group.appendChild(section);
      }

      listEl.appendChild(group);
    });
  }

  // ---- Body zone click handlers ----
  function initBodyZones() {
    document.querySelectorAll(".body-zone").forEach((zone) => {
      zone.addEventListener("click", () => {
        const slot = zone.dataset.slot;
        selectedSlot = selectedSlot === slot ? null : slot;
        render();
      });
    });
  }

  initBodyZones();
  render();

})();
