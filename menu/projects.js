function setupProjects() {
  const genreSelect = document.getElementById('genrePlot');
  const genreChart = document.getElementById('genreChart');
  const pagesSelect = document.getElementById('pagesPlot');
  const pagesChart = document.getElementById('pagesChart');
  const select = document.getElementById('year');
  const chart = document.getElementById('chart');
  // Book search logic
  const input = document.getElementById('searchInput');
  const table = document.getElementById('resultsTable');
  const tableBody = table ? table.querySelector('tbody') : null;
  let books = [];

  // Genre by year dropdown
  if (select && chart) {
    for (let year = 2007; year <= 2024; year++) {
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
        text: "Fiction books per year",
        alt: "Number Fiction Books per Year"
      },
      {
        value: "total_pages_per_year.png",
        text: "Total pages per year",
        alt: "Total Pages per Year"
      },
      {
        value: "average_pages_per_year.png",
        text: "Avg book length per year",
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

  // Book Search Functions
  // Debounce function to reduce input frequency
  function debounce(fn, delay) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  }
  
  function renderBooks(filteredBooks) {
    if (!tableBody) return;
    tableBody.innerHTML = '';

    if (filteredBooks.length === 0) {
      table.style.display = 'none';
      return;
    }

    table.style.display = 'table';

    const maxResults = 50;
    filteredBooks.slice(0, maxResults).forEach(book => {
      const row = `<tr>
        <td>${book.Title}</td>
        <td>${book.Author}</td>
        <td>${book.Pages}</td>
        <td>${book.Year}</td>
      </tr>`;
      tableBody.innerHTML += row;
    });
  }

  function filterBooks(query) {
    query = query.toLowerCase();
    return books.filter(book =>
      book._titleLower.includes(query) || book._authorLower.includes(query)
    );
  }

  if (input) {
    input.addEventListener('input', debounce(() => {
      const query = input.value.trim();
      if (query === '') {
        table.style.display = 'none';
        return;
      }
      renderBooks(filterBooks(query));
    }, 200));

    // Load CSV and preprocess for fast search
    Papa.parse('Files/books.csv', {
      download: true,
      header: true,
      complete: function(results) {
        books = results.data
          .filter(row => row.Title) // skip blanks
          .map(book => ({
            ...book,
            _titleLower: book.Title.toLowerCase(),
            _authorLower: book.Author.toLowerCase()
          }));
        // No render yet; wait for user input
      },
      error: function(err) {
        console.error("Error loading CSV:", err);
      }
    });
  }

  
}
