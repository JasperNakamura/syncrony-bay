(function () {
  let balance = 0;
  let currentFilter = "all";
  let purchases = {};

  const balanceInput = document.getElementById("budgetInput");
  const balanceSetBtn = document.getElementById("budgetSet");
  const balanceDisplay = document.getElementById("budgetDisplay");
  const balanceEl = document.getElementById("budgetRemaining");
  const balanceBar = document.getElementById("budgetBar");
  const balanceSetup = document.getElementById("budgetSetup");
  const editBtn = document.getElementById("editBudgetBtn");
  const adjustAddBtn = document.getElementById("adjustAddBtn");
  const adjustSubBtn = document.getElementById("adjustSubBtn");
  const adjustRow = document.getElementById("adjustRow");
  const adjustInput = document.getElementById("adjustInput");
  const adjustConfirm = document.getElementById("adjustConfirm");
  const adjustCancel = document.getElementById("adjustCancel");
  const shopGrid = document.getElementById("shopGrid");
  const filterContainer = document.getElementById("filterContainer");
  const searchBox = document.getElementById("shopSearch");
  const sortSelect = document.getElementById("shopSort");

  const legalityColors = {
    Open: { color: "#4ade80", icon: "●" },
    Regulated: { color: "#60a5fa", icon: "◆" },
    Restricted: { color: "#facc15", icon: "▲" },
    Prohibited: { color: "#f97316", icon: "◼" },
    Illegal: { color: "#ef4444", icon: "✖" },
    Condemned: { color: "#dc2626", icon: "☠" },
  };

  // ---- Filters ----
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

  // ---- Storage ----
  function saveState() {
    localStorage.setItem("shopBalance", JSON.stringify(balance));
    localStorage.setItem("shopPurchases", JSON.stringify(purchases));
  }

  function loadState() {
    const savedBalance = localStorage.getItem("shopBalance");
    if (savedBalance !== null) {
      balance = JSON.parse(savedBalance);
      showBalanceDisplay();
    }
    const savedPurchases = localStorage.getItem("shopPurchases");
    if (savedPurchases) purchases = JSON.parse(savedPurchases);
  }

  // ---- Balance UI ----
  function showBalanceDisplay() {
    balanceSetup.classList.remove("open");
    balanceDisplay.style.display = "block";
    updateBalanceUI();
  }

  function updateBalanceUI() {
    // Always re-read from localStorage so gig rewards from index.html are reflected
    const saved = localStorage.getItem("shopBalance");
    if (saved !== null) balance = JSON.parse(saved);

    balanceEl.textContent = "Ȼ" + balance.toLocaleString();
    balanceEl.classList.remove("balance-flash");
    void balanceEl.offsetWidth; // force reflow so animation restarts
    balanceEl.classList.add("balance-flash");

    const initialStr = localStorage.getItem("shopInitialBalance");
    const initial = initialStr ? JSON.parse(initialStr) : balance;
    const pct = initial > 0 ? Math.max(0, (balance / initial) * 100) : 100;

    balanceBar.style.width = Math.min(100, pct) + "%";
    if (pct > 50) {
      balanceBar.style.background = "var(--cp-cyan)";
      balanceBar.style.boxShadow = "0 0 10px var(--cp-cyan)";
    } else if (pct > 20) {
      balanceBar.style.background = "var(--cp-yellow)";
      balanceBar.style.boxShadow = "0 0 10px var(--cp-yellow)";
    } else {
      balanceBar.style.background = "var(--cp-red)";
      balanceBar.style.boxShadow = "0 0 10px var(--cp-red)";
    }
  }

  // ---- Render ----
  function renderShop(filter, search) {
    filter = filter || "all";
    search = search || "";
    const sort = sortSelect.value;
    shopGrid.innerHTML = "";

    let filtered = shopItems.filter((item) => {
      const matchFilter = filter === "all" || item.category === filter;
      const sl = search.toLowerCase();
      const matchSearch =
        search === "" ||
        item.name.toLowerCase().includes(sl) ||
        (item.description || "").toLowerCase().includes(sl) ||
        item.type.toLowerCase().includes(sl) ||
        item.legality.toLowerCase().includes(sl);
      return matchFilter && matchSearch;
    });

    if (sort === "name-asc")
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "name-desc")
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);

    filtered.forEach((item, index) => {
      const card = createShopCard(item);
      card.style.animationDelay = `${index * 30}ms`;
      shopGrid.appendChild(card);
    });

    if (filtered.length === 0) {
      shopGrid.innerHTML =
        '<p style="grid-column:1/-1;text-align:center;color:var(--cp-red);">No items found.</p>';
    }
  }

  function createShopCard(item) {
    const card = document.createElement("div");
    const qty = purchases[item.id] || 0;
    const isPurchased = !item.consumable && qty > 0;
    const isNegotiable = item.price === 0;
    const balanceIsSet = balance > 0;
    const canAfford = isNegotiable || balance >= item.price;

    card.className =
      "shop-card" +
      (isPurchased ? " purchased" : "") +
      (!canAfford && balanceIsSet && !isPurchased ? " unaffordable" : "");
    card.dataset.id = item.id;

    const consumableBadge = item.consumable
      ? '<span class="consumable-badge">↻ CONSUMABLE</span>'
      : '';

    const leg = legalityColors[item.legality] || { color: "#888", icon: "?" };
    const legalityBadge = `<span class="legality-badge" style="color:${leg.color};border-color:${leg.color};">${leg.icon} ${item.legality.toUpperCase()}</span>`;
    const priceDisplay = isNegotiable
      ? '<span class="price-negotiate">NEGOTIATE</span>'
      : "Ȼ" + item.price.toLocaleString();

    let metaLines = "";
    if (item.bodyPart)
      metaLines += `<div class="shop-card-detail">⚙ ${item.bodyPart}</div>`;
    if (item.emulated)
      metaLines += `<div class="shop-card-detail">⚔ ${item.emulated}</div>`;
    if (item.vehicleSize)
      metaLines += `<div class="shop-card-detail">◈ ${item.vehicleSize} — Seats ${item.capacity}</div>`;

    const descHTML = item.description
      ? `<div class="shop-card-desc">${item.description}</div>`
      : "";

    let actionHTML = "";
    if (isPurchased)
      actionHTML = '<div class="purchased-label">✓ ACQUIRED</div>';
    else if (!balanceIsSet)
      actionHTML =
        '<button class="buy-btn disabled" disabled>SET BALANCE FIRST</button>';
    else if (isNegotiable)
      actionHTML =
        '<button class="buy-btn disabled" disabled>PRICE NOT SET</button>';
    else if (!canAfford)
      actionHTML =
        '<button class="buy-btn disabled" disabled>INSUFFICIENT FUNDS</button>';
    else
      actionHTML = `<button class="buy-btn" data-item-id="${item.id}">◢ PURCHASE ◣</button>`;

    const qtyHTML =
      item.consumable && qty > 0
        ? `<div class="qty-owned"><button class="qty-btn" data-action="remove" data-item-id="${item.id}">−</button> OWNED: ${qty}</div>`
        : "";

    const categoryLabel = (
      shopCategories[item.category] || item.category
    ).toUpperCase();

    card.innerHTML = `
      <div class="shop-card-header">
        <div class="shop-card-name">${item.name}</div>
        <div class="shop-card-price">${priceDisplay}</div>
      </div>
      <div class="shop-card-meta">${consumableBadge}${legalityBadge}<span class="category-tag">${categoryLabel}</span></div>
      ${metaLines}${descHTML}
      <div class="shop-card-type">${item.type}</div>
      <div class="shop-card-footer"><div style="flex:1">${qtyHTML}</div>${actionHTML}</div>
    `;

    const buyBtn = card.querySelector(".buy-btn:not(.disabled)");
    if (buyBtn)
      buyBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        purchaseItem(item.id);
      });

    card.querySelectorAll(".qty-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (btn.dataset.action === "remove") {
          if (purchases[item.id] > 1) purchases[item.id]--;
          else delete purchases[item.id];
        }
        saveState();
        renderShop(currentFilter, searchBox.value);
      });
    });

    return card;
  }

  // ---- Purchase ----
  function purchaseItem(itemId) {
    const item = shopItems.find((i) => i.id === itemId);
    if (!item || item.price === 0) return;
    if (balance < item.price) return;
    if (!item.consumable && purchases[itemId]) return;

    purchases[itemId] = (purchases[itemId] || 0) + 1;
    balance -= item.price;
    saveState();
    updateBalanceUI();
    renderShop(currentFilter, searchBox.value);
  }

  // ---- Events ----
  balanceSetBtn.addEventListener("click", () => {
    const val = parseInt(balanceInput.value, 10);
    if (isNaN(val) || val <= 0) {
      balanceInput.style.borderColor = "var(--cp-red)";
      setTimeout(
        () => (balanceInput.style.borderColor = "var(--cp-yellow)"),
        800,
      );
      return;
    }
    balance = val;
    localStorage.setItem("shopInitialBalance", JSON.stringify(val));
    saveState();
    showBalanceDisplay();
    renderShop(currentFilter, searchBox.value);
  });

  balanceInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") balanceSetBtn.click();
  });

  editBtn.addEventListener("click", () => {
    balanceDisplay.style.display = "none";
    balanceInput.value = balance;
    balanceSetup.classList.add("open");
    setTimeout(() => balanceInput.focus(), 300);
  });

  let adjustMode = 1; // 1 = add, -1 = subtract

  adjustAddBtn.addEventListener("click", () => {
    adjustMode = 1;
    adjustRow.classList.add("open");
    adjustInput.placeholder = "0";
    adjustAddBtn.classList.add("hidden");
    adjustSubBtn.classList.add("hidden");
    adjustInput.focus();
  });

  adjustSubBtn.addEventListener("click", () => {
    adjustMode = -1;
    adjustRow.classList.add("open");
    adjustInput.placeholder = "0";
    adjustAddBtn.classList.add("hidden");
    adjustSubBtn.classList.add("hidden");
    adjustInput.focus();
  });

  adjustCancel.addEventListener("click", () => {
    adjustRow.classList.remove("open");
    adjustAddBtn.classList.remove("hidden");
    adjustSubBtn.classList.remove("hidden");
    adjustInput.value = "";
  });

  adjustConfirm.addEventListener("click", () => {
    const val = parseInt(adjustInput.value, 10);
    if (!isNaN(val) && val > 0) {
      balance += val * adjustMode;
      if (balance < 0) balance = 0;
      saveState();
      updateBalanceUI();
      renderShop(currentFilter, searchBox.value);
    }
    adjustRow.classList.remove("open");
    adjustAddBtn.classList.remove("hidden");
    adjustSubBtn.classList.remove("hidden");
    adjustInput.value = "";
  });

  adjustInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") adjustConfirm.click();
    if (e.key === "Escape") adjustCancel.click();
  });

  searchBox.addEventListener("input", () => {
    renderShop(currentFilter, searchBox.value);
  });

  // ---- Poll for balance changes from index.html ----
  setInterval(() => {
    const saved = localStorage.getItem("shopBalance");
    if (saved !== null) {
      const latest = JSON.parse(saved);
      if (latest !== balance) {
        balance = latest;
        updateBalanceUI();
        renderShop(currentFilter, searchBox.value);
      }
    }
  }, 1000);


  sortSelect.addEventListener("change", () => renderShop(currentFilter, searchBox.value));

  // ---- Init ----
  buildFilters();
  loadState();
  renderShop();
})();
