function setupProjects() {
  const genreSelect = document.getElementById('genrePlot');
  const genreChart = document.getElementById('genreChart');
  const pagesSelect = document.getElementById('pagesPlot');
  const pagesChart = document.getElementById('pagesChart');
  const select = document.getElementById('year');
  const chart = document.getElementById('chart');

  // Genre by year dropdown
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


  // Genre plot dropdown
  if (genreSelect && genreChart) {
    const options = [
      {
        value: "genre_distribution_all.png",
        text: "Genre; all years",
        alt: "genre distribution for all years"
      },
      {
        value: "genre_distribution_by_pages.png",
        text: "Genre; all pages",
        alt: "genre distribution for all pages"
      }
    ];

    options.forEach(opt => {
      const option = document.createElement('option');
      option.value = opt.value;
      option.textContent = opt.text;
      genreSelect.appendChild(option);
    });

    genreSelect.value = "genre_distribution_all.png";

    genreSelect.addEventListener('change', () => {
      const selected = genreSelect.value;
      const selectedOption = options.find(opt => opt.value === selected);
      genreChart.src = `Images/BookProjectImages/${selected}`;
      genreChart.alt = selectedOption.alt;
    });
  }

  
  // Pages plot dropdown
  if (pagesSelect && pagesChart) {
    const options = [
      {
        value: "books_per_year.png",
        text: "Fiction Books per Year",
        alt: "Number Fiction Books per Year"
      },
      {
        value: "total_pages_per_year.png",
        text: "Total Pages per Year",
        alt: "Total Pages per Year"
      },
      {
        value: "average_pages_per_year.png",
        text: "Avg Book Length per Year",
        alt: "Avg Book Length per Year"
      }
    ];

    options.forEach(opt => {
      const option = document.createElement('option');
      option.value = opt.value;
      option.textContent = opt.text;
      pagesSelect.appendChild(option);
    });

    pagesSelect.value = "books_per_year.png";

    pagesSelect.addEventListener('change', () => {
      const selected = pagesSelect.value;
      const selectedOption = options.find(opt => opt.value === selected);
      pagesChart.src = `Images/BookProjectImages/${selected}`;
      pagesChart.alt = selectedOption.alt;
    });
  }

  
}
