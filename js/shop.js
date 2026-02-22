(function () {
  // ==================== STATE ====================
  let budget = 0;
  let currentFilter = "all";
  let purchases = {}; // { itemId: quantity }

  // ==================== DOM REFERENCES ====================
  const budgetInput = document.getElementById("budgetInput");
  const budgetSetBtn = document.getElementById("budgetSet");
  const budgetDisplay = document.getElementById("budgetDisplay");
  const budgetAmount = document.getElementById("budgetAmount");
  const budgetBar = document.getElementById("budgetBar");
  const budgetSpent = document.getElementById("budgetSpent");
  const budgetRemaining = document.getElementById("budgetRemaining");
  const shopGrid = document.getElementById("shopGrid");
  const filterContainer = document.getElementById("filterContainer");
  const searchBox = document.getElementById("shopSearch");
  const resetBtn = document.getElementById("resetBtn");
  const editBudgetBtn = document.getElementById("editBudgetBtn");
  const budgetSetup = document.getElementById("budgetSetup");

  // ==================== LEGALITY CONFIG ====================
  const legalityColors = {
    Open: { color: "#4ade80", icon: "●" },
    Regulated: { color: "#60a5fa", icon: "◆" },
    Restricted: { color: "#facc15", icon: "▲" },
    Prohibited: { color: "#f97316", icon: "◼" },
    Illegal: { color: "#ef4444", icon: "✖" },
    Condemned: { color: "#dc2626", icon: "☠" },
  };

  // ==================== DYNAMIC FILTERS ====================
  function buildFilters() {
    filterContainer.innerHTML = "";
    Object.keys(shopCategories).forEach((key) => {
      const btn = document.createElement("button");
      btn.className = "shop-filter-btn" + (key === "all" ? " active" : "");
      btn.dataset.filter = key;
      btn.textContent = shopCategories[key];
      btn.addEventListener("click", () => {
        filterContainer
          .querySelectorAll(".shop-filter-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = key;
        renderShop(currentFilter, searchBox.value);
      });
      filterContainer.appendChild(btn);
    });
  }

  // ==================== LOCALSTORAGE ====================
  function savePurchases() {
    localStorage.setItem("shopPurchases", JSON.stringify(purchases));
  }
  function loadPurchases() {
    const saved = localStorage.getItem("shopPurchases");
    if (saved) purchases = JSON.parse(saved);
  }
  function saveBudget() {
    localStorage.setItem("shopBudget", JSON.stringify(budget));
  }
  function loadBudget() {
    const saved = localStorage.getItem("shopBudget");
    if (saved) {
      budget = JSON.parse(saved);
      if (budget > 0) showBudgetDisplay();
    }
  }

  // ==================== BUDGET ====================
  function showBudgetDisplay() {
    budgetSetup.style.display = "none";
    budgetDisplay.style.display = "block";
    updateBudgetUI();
  }

  function updateBudgetUI() {
    const spent = getSpentTotal();
    const remaining = budget - spent;
    const pct = budget > 0 ? (remaining / budget) * 100 : 0;

    budgetAmount.textContent = `Ȼ${budget.toLocaleString()}`;
    budgetSpent.textContent = `Ȼ${spent.toLocaleString()}`;
    budgetRemaining.textContent = `Ȼ${remaining.toLocaleString()}`;

    budgetBar.style.width = `${Math.max(0, pct)}%`;
    if (pct > 50) {
      budgetBar.style.background = "var(--cp-cyan)";
      budgetBar.style.boxShadow = "0 0 10px var(--cp-cyan)";
    } else if (pct > 20) {
      budgetBar.style.background = "var(--cp-yellow)";
      budgetBar.style.boxShadow = "0 0 10px var(--cp-yellow)";
    } else {
      budgetBar.style.background = "var(--cp-red)";
      budgetBar.style.boxShadow = "0 0 10px var(--cp-red)";
    }
  }

  function getSpentTotal() {
    let spent = 0;
    Object.keys(purchases).forEach((itemId) => {
      const item = shopItems.find((i) => i.id === itemId);
      if (item) spent += item.price * purchases[itemId];
    });
    return spent;
  }

  function getRemainingBudget() {
    return budget - getSpentTotal();
  }

  // ==================== RENDERING ====================
  function renderShop(filter = "all", search = "") {
    shopGrid.innerHTML = "";

    const filtered = shopItems.filter((item) => {
      const matchFilter = filter === "all" || item.category === filter;
      const searchLower = search.toLowerCase();
      const matchSearch =
        search === "" ||
        item.name.toLowerCase().includes(searchLower) ||
        (item.description || "").toLowerCase().includes(searchLower) ||
        (item.emulated || "").toLowerCase().includes(searchLower) ||
        (item.bodyPart || "").toLowerCase().includes(searchLower) ||
        item.type.toLowerCase().includes(searchLower) ||
        item.legality.toLowerCase().includes(searchLower);
      return matchFilter && matchSearch;
    });

    filtered.forEach((item) => shopGrid.appendChild(createShopCard(item)));

    if (filtered.length === 0) {
      shopGrid.innerHTML =
        '<p style="grid-column: 1/-1; text-align: center; color: var(--cp-red);">No items found matching criteria.</p>';
    }
  }

  function createShopCard(item) {
    const card = document.createElement("div");
    const qty = purchases[item.id] || 0;
    const isPurchased = !item.consumable && qty > 0;
    const isNegotiable = item.price === 0;
    const canAfford = isNegotiable || getRemainingBudget() >= item.price;
    const budgetIsSet = budget > 0;

    card.className = `shop-card${isPurchased ? " purchased" : ""}${!canAfford && budgetIsSet && !isPurchased ? " unaffordable" : ""}`;
    card.dataset.id = item.id;

    // Badges
    const consumableBadge = item.consumable
      ? '<span class="consumable-badge">↻ CONSUMABLE</span>'
      : '<span class="single-badge">◆ ONE-TIME</span>';

    const leg = legalityColors[item.legality] || { color: "#888", icon: "?" };
    const legalityBadge = `<span class="legality-badge" style="color:${leg.color}; border-color:${leg.color};">${leg.icon} ${item.legality.toUpperCase()}</span>`;

    const priceDisplay = isNegotiable
      ? '<span class="price-negotiate">NEGOTIATE</span>'
      : `Ȼ${item.price.toLocaleString()}`;

    // Optional meta lines
    let metaLines = "";
    if (item.bodyPart)
      metaLines += `<div class="shop-card-detail">⚙ ${item.bodyPart}</div>`;
    if (item.emulated)
      metaLines += `<div class="shop-card-detail">⚔ ${item.emulated}</div>`;
    if (item.vehicleSize)
      metaLines += `<div class="shop-card-detail">◈ ${item.vehicleSize} — Seats ${item.capacity}</div>`;

    // Description
    const descHTML = item.description
      ? `<div class="shop-card-desc">${item.description}</div>`
      : "";

    // Action button
    let actionHTML = "";
    if (isPurchased) {
      actionHTML = `<div class="purchased-label">✓ ACQUIRED</div>`;
    } else if (!budgetIsSet) {
      actionHTML = `<button class="buy-btn disabled" disabled>SET BUDGET FIRST</button>`;
    } else if (isNegotiable) {
      actionHTML = `<button class="buy-btn disabled" disabled>PRICE NOT SET</button>`;
    } else if (!canAfford) {
      actionHTML = `<button class="buy-btn disabled" disabled>INSUFFICIENT FUNDS</button>`;
    } else {
      actionHTML = `<button class="buy-btn" data-item-id="${item.id}">◢ PURCHASE ◣</button>`;
    }

    const qtyHTML =
      item.consumable && qty > 0
        ? `<div class="qty-owned">OWNED: ${qty}</div>`
        : "";

    const categoryLabel = (
      shopCategories[item.category] || item.category
    ).toUpperCase();

    card.innerHTML = `
      <div class="shop-card-header">
        <div class="shop-card-name">${item.name}</div>
        <div class="shop-card-price">${priceDisplay}</div>
      </div>
      <div class="shop-card-meta">
        ${consumableBadge}
        ${legalityBadge}
        <span class="category-tag">${categoryLabel}</span>
      </div>
      ${metaLines}
      ${descHTML}
      <div class="shop-card-type">${item.type}</div>
      <div class="shop-card-footer">
        ${qtyHTML}
        ${actionHTML}
      </div>
    `;

    const buyBtn = card.querySelector(".buy-btn:not(.disabled)");
    if (buyBtn) {
      buyBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        purchaseItem(item.id);
      });
    }

    return card;
  }

  // ==================== PURCHASE LOGIC ====================
  function purchaseItem(itemId) {
    const item = shopItems.find((i) => i.id === itemId);
    if (!item || item.price === 0) return;
    if (getRemainingBudget() < item.price) return;
    if (!item.consumable && purchases[itemId]) return;

    purchases[itemId] = (purchases[itemId] || 0) + 1;
    savePurchases();
    updateBudgetUI();
    renderShop(currentFilter, searchBox.value);
  }

  // ==================== EVENT LISTENERS ====================
  budgetSetBtn.addEventListener("click", () => {
    const val = parseInt(budgetInput.value, 10);
    if (isNaN(val) || val <= 0) {
      budgetInput.style.borderColor = "var(--cp-red)";
      setTimeout(
        () => (budgetInput.style.borderColor = "var(--cp-yellow)"),
        800,
      );
      return;
    }
    budget = val;
    saveBudget();
    showBudgetDisplay();
    renderShop(currentFilter, searchBox.value);
  });

  budgetInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") budgetSetBtn.click();
  });

  editBudgetBtn.addEventListener("click", () => {
    budgetDisplay.style.display = "none";
    budgetSetup.style.display = "block";
    budgetInput.value = budget;
    budgetInput.focus();
  });

  resetBtn.addEventListener("click", () => {
    if (!confirm("Reset all purchases? This cannot be undone.")) return;
    purchases = {};
    savePurchases();
    updateBudgetUI();
    renderShop(currentFilter, searchBox.value);
  });

  searchBox.addEventListener("input", () => {
    renderShop(currentFilter, searchBox.value);
  });

  // ==================== INIT ====================
  buildFilters();
  loadPurchases();
  loadBudget();
  renderShop();
})();
