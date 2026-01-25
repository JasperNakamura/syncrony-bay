(function() {
  // ==================== DOM REFERENCES ====================
  const mapRegions = document.querySelectorAll('.map-region');
  const districtModal = document.getElementById('districtModal');
  const districtModalContent = document.getElementById('districtModalContent');
  const districtContent = document.getElementById('districtContent');
  const closeInfo = document.getElementById('closeInfo');

  // ==================== FUNCTIONS ====================
  function showDistrictInfo(districtKey) {
    const district = districts[districtKey];
    
    if (!district) return;

    districtContent.innerHTML = `
      <h2 class="district-title">${district.name}</h2>
      <p class="district-description">${district.description}</p>
      <div class="district-features">
        <h3>Notable Features:</h3>
        <ul>
          ${district.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
    `;

    // Show modal and trigger animation
    districtModal.style.display = 'block';
    districtModalContent.classList.remove('closing');
    districtModalContent.classList.add('opening');
  }

  function hideDistrictInfo() {
    districtModalContent.classList.remove('opening');
    districtModalContent.classList.add('closing');
    
    // Wait for animation to finish before hiding
    setTimeout(() => {
      districtModal.style.display = 'none';
      districtModalContent.classList.remove('closing');
    }, 400);
  }

  // ==================== EVENT LISTENERS ====================
  mapRegions.forEach(region => {
    region.addEventListener('click', (e) => {
      e.preventDefault();
      const districtKey = region.dataset.district;
      showDistrictInfo(districtKey);
    });
  });

  closeInfo.addEventListener('click', hideDistrictInfo);

  // Close when clicking outside the modal content
  window.addEventListener('click', (e) => {
    if (e.target === districtModal) {
      hideDistrictInfo();
    }
  });

})();