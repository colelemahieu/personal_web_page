(function setupProjects() {
  const select = document.getElementById('year');
  const chart = document.getElementById('chart');

  if (!select || !chart) {
    console.warn("Projects section not loaded yet.");
    return;
  }

  for (let year = 2009; year <= 2023; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    select.appendChild(option);
  }

  select.value = '2009';

  select.addEventListener('change', () => {
    const year = select.value;
    chart.src = `Images/BookProjectImages/genre_distribution_${year}.png`;
    chart.alt = `Genre Distribution Pie Chart for ${year}`;
  });
})();
