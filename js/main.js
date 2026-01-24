(function() {
  // ==================== DOM REFERENCES ====================
  const cardsGrid = document.getElementById("cardsGrid");
  const searchBox = document.getElementById("searchBox");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const modal = document.getElementById("characterModal");
  const closeModal = document.getElementById("closeModal");

  let currentFilter = "all";

  // ==================== EVENT LISTENERS ====================
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderCards(currentFilter, searchBox.value);
    });
  });

  searchBox.addEventListener("input", () => {
    renderCards(currentFilter, searchBox.value);
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // ==================== INITIALIZATION ====================
  renderCards();
})();