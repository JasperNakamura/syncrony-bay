(function() {
  const cardsGrid = document.getElementById("cardsGrid");
  const searchBox = document.getElementById("searchBox");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const modal = document.getElementById("characterModal");
  const modalContent = document.getElementById("modalContent");
  const closeModal = document.getElementById("closeModal");

  let currentFilter = "all";

  function closeModalAnimated() {
    modalContent.classList.remove("opening");
    modalContent.classList.add("closing");
    setTimeout(() => {
      modal.style.display = "none";
      modalContent.classList.remove("closing");
    }, 400);
  }

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

  closeModal.addEventListener("click", closeModalAnimated);

  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModalAnimated();
  });

  renderCards();
})();
