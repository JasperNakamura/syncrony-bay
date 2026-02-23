// ==================== BALANCE HELPERS ====================
// Both index.html and shop.html share the "shopBalance" localStorage key

function parsePaymentValue(paymentStr) {
  const cleaned = paymentStr.replace(/,/g, "");
  const match = cleaned.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
}

function addToSharedBalance(amount) {
  const saved = localStorage.getItem("shopBalance");
  const current = saved !== null ? JSON.parse(saved) : 0;
  localStorage.setItem("shopBalance", JSON.stringify(current + amount));
}

// ==================== LOCALSTORAGE FUNCTIONS ====================

function saveGigsToLocalStorage() {
  localStorage.setItem("gigsData", JSON.stringify(gigs));
}

function loadGigsFromLocalStorage() {
  const saved = localStorage.getItem("gigsData");
  if (saved) {
    const savedGigs = JSON.parse(saved);
    Object.keys(savedGigs).forEach((charId) => {
      if (gigs[charId]) {
        savedGigs[charId].forEach((savedGig, index) => {
          if (gigs[charId][index]) {
            // Only override if the saved value exists and is true
            // This prevents localStorage from overwriting hardcoded completed/active states
            if (savedGig.active === true) {
              gigs[charId][index].active = true;
            }
            if (savedGig.completed === true) {
              gigs[charId][index].completed = true;
            }
          }
        });
      }
    });
  }
}

// Load saved gigs on page load
if (typeof gigs !== "undefined") {
  loadGigsFromLocalStorage();
}

// ==================== COMPONENT FUNCTIONS ====================

function createCard(char) {
  const card = document.createElement("div");
  card.className = `card ${char.alignment}`;
  card.dataset.id = char.id;

  const alignmentBadge =
    char.alignment === "corpo"
      ? '<span class="alignment-badge badge-corpo">💼 CORPO</span>'
      : '<span class="alignment-badge badge-street">⚡ STREET</span>';

  card.innerHTML = `
    <div class="card-header">
        <div>
            <div class="card-name">${char.name}</div>
            <div class="card-alias">"${char.alias}"</div>
        </div>
        ${alignmentBadge}
    </div>
    
    <div class="card-mid-section">
        <div class="card-text-content">
            <div class="card-role">${char.occupation}</div>
            <div class="card-info">
                <span>Age:</span> ${char.age} | <span>Origin:</span> ${char.nationality}
            </div>
            <div class="card-specialty">
                ${char.specialty}
            </div>
        </div>
    </div>

    <div class="card-actions">
        <button class="view-details-btn" style="flex-grow: 1;">VIEW FULL PROFILE</button>
        <button class="view-details-btn">🕻</button>
        <button class="view-details-btn">🗨</button>
    </div>
  `;

  card.querySelector(".view-details-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    showModal(char);
  });

  return card;
}

function renderCards(filter = "all", search = "") {
  const cardsGrid = document.getElementById("cardsGrid");
  cardsGrid.innerHTML = "";

  let filtered = characters.filter((char) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "fixer" && char.type === "fixer") ||
      (filter === "corpo" && char.alignment === "corpo") ||
      (filter === "street" && char.alignment === "street");

    const matchesSearch =
      search === "" ||
      char.name.toLowerCase().includes(search.toLowerCase()) ||
      char.alias.toLowerCase().includes(search.toLowerCase()) ||
      char.occupation.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  filtered.forEach((char) => {
    cardsGrid.appendChild(createCard(char));
  });

  if (filtered.length === 0) {
    cardsGrid.innerHTML =
      '<p style="grid-column: 1/-1; text-align: center; color: var(--cp-red);">No contacts found matching criteria.</p>';
  }
}

function showModal(char) {
  const modal = document.getElementById("characterModal");
  const modalContent = document.getElementById("modalContent");
  const modalBody = document.getElementById("modalBody");

  const iscorpo = char.alignment === "corpo";
  modalContent.className = `modal-content ${char.alignment}`;

  let servicesHTML = '<ul class="services-list">';
  char.services.forEach((service) => {
    servicesHTML += `<li>${service}</li>`;
  });
  servicesHTML += "</ul>";

  let specialHTML = char.special
    ? `
        <div class="modal-section">
            <h3>Special Notes</h3>
            <p>${char.special}</p>
        </div>
    `
    : "";

  let quoteHTML = char.quote
    ? `
        <div class="quote-box">
            "${char.quote}"
        </div>
    `
    : "";

  // Generate gigs section
  let gigsHTML = "";
  if (gigs[char.id] && gigs[char.id].length > 0) {
    gigsHTML = `
    <div class="gigs-section">
      <h3 style="color: var(--cp-yellow); margin-bottom: 15px;">Available Gigs</h3>
      ${gigs[char.id]
        .sort((a, b) => {
          if (a.active && !b.active) return -1; // a goes first
          if (!a.active && b.active) return 1; // b goes first
          return 0; // keep original order
        })
        .filter((gig) => gig.visible !== false)
        .map(
          (gig) => `
            <div class="gig-card ${char.alignment === "corpo" ? "corpo-gig" : ""} ${gig.completed ? "completed" : ""} ${gig.active ? "active" : ""}" data-gig-title="${gig.title.replace(/"/g, "&quot;")}">
              <div class="gig-header">
                <div class="gig-title">${gig.title}</div>
                <div class="gig-difficulty">${gig.difficulty}</div>
              </div>
              <div class="gig-meta">
                <div class="gig-payment">💰 ${gig.payment}</div>
                <div class="gig-type">📋 ${gig.type}</div>
              </div>
              <div class="gig-description">${gig.description}</div>
              ${
                gig.requirements
                  ? `
                <div class="gig-requirements">
                  <div class="gig-requirements-title">Requirements:</div>
                  <ul style="margin: 5px 0 0 20px; list-style: disc;">
                    ${gig.requirements.map((req) => `<li>${req}</li>`).join("")}
                  </ul>
                </div>
              `
                  : ""
              }
              ${
                (() => {
                  const isRepeatable = gig.title.startsWith("Repeatable");
                  const isCompleted = !isRepeatable && gig.completed;
                  if (isCompleted) return `<div class="gig-completed-label">✓ COMPLETED</div>`;
                  return `<button class="gig-complete-btn${isRepeatable ? " repeatable" : ""}" data-gig-title="${gig.title.replace(/"/g, "&quot;")}">${isRepeatable ? "↻ COLLECT REWARD" : "✓ COMPLETE GIG"}</button>`;
                })()
              }
            </div>
          `,
        )
        .join("")}
    </div>
  `;
  }

  // Define the image mapping and get the background image FIRST
  const imageMapping = {
    ashford: "var(--img-malcom)",
    morales: "var(--img-rosa)",
    volkov: "var(--img-kat)",
    akira: "var(--img-akira)",
    jiyeon: "var(--img-jiyeon)",
    wei: "var(--img-shen)",
    zhao: "var(--img-zhao)",
    marcus: "var(--img-marcus)",
    castellanos: "var(--img-val)",
    tamm: "var(--img-kaia)",
    beaumont: "var(--img-anais)",
    aria: "var(--img-aria)",
  };

  const bgImage = imageMapping[char.id] || "none";

  // SET innerHTML FIRST
  modalBody.innerHTML = `
    <div class="modal-header" style="display: flex; align-items: flex-start; gap: 20px;">
        <div style="flex: 1;">
            <h2>${char.name}</h2>
            <div class="card-alias" style="font-size: 1.2em;">"${char.alias}"</div>
        </div>
        <div class="character-thumbnail" style="background-image: ${bgImage} !important; background-size: cover; background-position: top center; width: 150px; height: 150px; border-radius: 8px; flex-shrink: 0; cursor: pointer;"></div>
    </div>
    ${quoteHTML}

    <div class="modal-section">
        <h3>Background</h3>
        <p>${char.background}</p>
    </div>

    <div class="info-grid">
        <div class="info-item">
            <div class="info-label">AGE</div>
            <div>${char.age}</div>
        </div>
        <div class="info-item">
            <div class="info-label">NATIONALITY</div>
            <div>${char.nationality}</div>
        </div>
        <div class="info-item">
            <div class="info-label">OCCUPATION</div>
            <div>${char.occupation}</div>
        </div>
        <div class="info-item">
            <div class="info-label">ALIGNMENT</div>
            <div>${char.alignment.toUpperCase()}</div>
        </div>
        <div class="info-item">
            <div class="info-label">SPECIALTY</div>
            <div>${char.specialty}</div>
        </div>
    </div>

    <div class="modal-section">
        <h3>Physical Description</h3>
        <p>${char.physical}</p>
    </div>

    <div class="modal-section">
        <h3>Personal Notes</h3>
        <p>${char.notes}</p>
    </div>

    <div class="modal-section">
        <h3>Services Available</h3>
        ${servicesHTML}
    </div>

    ${specialHTML}

    ${gigsHTML}
  `;

  modal.style.display = "block";
  modalContent.classList.remove("closing");
  void modalContent.offsetWidth;
  modalContent.classList.add("opening");

  // THEN add event listeners AFTER the HTML is in the DOM
  setTimeout(() => {
    // Complete gig / collect reward buttons
    modalBody.querySelectorAll(".gig-complete-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const gigTitle = btn.getAttribute("data-gig-title");
        const gigData = gigs[char.id].find((g) => g.title === gigTitle);
        if (!gigData) return;

        const isRepeatable = gigData.title.startsWith("Repeatable");
        const reward = parsePaymentValue(gigData.payment);

        if (reward > 0) addToSharedBalance(reward);

        if (!isRepeatable) {
          gigData.completed = true;
          gigData.active = false;
          saveGigsToLocalStorage();
          const gigCard = btn.closest(".gig-card");
          gigCard.classList.add("completed");
          gigCard.classList.remove("active");
          const label = document.createElement("div");
          label.className = "gig-completed-label";
          label.textContent = "✓ COMPLETED";
          btn.replaceWith(label);
        }

        if (reward > 0) {
          const gigCard = btn.closest(".gig-card");
          const flash = document.createElement("div");
          flash.className = "gig-reward-flash";
          flash.textContent = "+Ȼ" + reward.toLocaleString() + " ADDED TO BALANCE";
          gigCard.appendChild(flash);
          setTimeout(() => flash.remove(), 3000);
        }
      });
    });

        // Add gig card click handlers
    const gigCards = modalBody.querySelectorAll(".gig-card");
    gigCards.forEach((gigCard) => {
      gigCard.addEventListener("click", (e) => {
        // Don't toggle if clicking on links or buttons inside
        if (e.target.tagName === "A" || e.target.tagName === "BUTTON") return;

        // Get the gig title from the data attribute
        const gigTitle = gigCard.getAttribute("data-gig-title");

        // Find the actual gig in the original array by title
        const gigData = gigs[char.id].find((g) => g.title === gigTitle);

        if (gigData) {
          gigData.active = !gigData.active;

          // Save to localStorage
          saveGigsToLocalStorage();

          // Toggle the class on THIS card instead of re-rendering
          gigCard.classList.toggle("active");
        }
      });
    });

    // Add thumbnail click handler
    const thumbnail = modalBody.querySelector(".character-thumbnail");
    if (thumbnail) {
      thumbnail.addEventListener("click", () => {
        const imageOverlay = document.createElement("div");
        imageOverlay.className = "image-overlay";
        imageOverlay.innerHTML = `
            <div class="enlarged-image-container">
                <div class="enlarged-image" style="background-image: ${bgImage} !important; background-size: contain !important; background-position: center !important; background-repeat: no-repeat !important;"></div>
            </div>
        `;
        document.body.appendChild(imageOverlay);

        // Close on click
        imageOverlay.addEventListener("click", () => {
          imageOverlay.classList.add("closing");
          setTimeout(() => imageOverlay.remove(), 400);
        });

        // Trigger animation
        setTimeout(() => imageOverlay.classList.add("active"), 10);
      });
    }
  }, 0);
}