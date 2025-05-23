function setupProjects() {
  const select = document.getElementById('year');
  const chart = document.getElementById('chart');
  const pagesSelect = document.getElementById('pagesPlot');
  const pagesChart = document.getElementById('pagesChart');

  // Genre/year dropdown
  if (select && chart) {
    for (let year = 2007; year <= 2023; year++) {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      select.appendChild(option);
    }

    select.value = '2007';

    select.addEventListener('change', () => {
      const year = select.value;
      chart.src = `Images/BookProjectImages/genre_distribution_${year}.png`;
      chart.alt = `Genre Distribution Pie Chart for ${year}`;
    });
  }

  
  // Pages plot dropdown
  if (pagesSelect && pagesChart) {
    const options = [
      {
        value: "total_pages_per_year.png",
        text: "Total Pages per Year",
        alt: "Total Pages per Year"
      },
      {
        value: "average_pages_per_year.png",
        text: "Average Pages per Year",
        alt: "Average Pages per Year"
      }
    ];

    options.forEach(opt => {
      const option = document.createElement('option');
      option.value = opt.value;
      option.textContent = opt.text;
      pagesSelect.appendChild(option);
    });

    pagesSelect.value = "total_pages_per_year.png";

    pagesSelect.addEventListener('change', () => {
      const selected = pagesSelect.value;
      const selectedOption = options.find(opt => opt.value === selected);
      pagesChart.src = `Images/BookProjectImages/${selected}`;
      pagesChart.alt = selectedOption.alt;
    });
  }
}
