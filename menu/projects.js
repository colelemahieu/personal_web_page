function setupProjects() {
  const genreSelect = document.getElementById('genrePlot');
  const genreChart = document.getElementById('genreChart');
  const pagesSelect = document.getElementById('pagesPlot');
  const pagesChart = document.getElementById('pagesChart');
  const select = document.getElementById('year');
  const chart = document.getElementById('chart');
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

  // Debounce function
  function debounce(fn, delay) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  }

  // Render book search results
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
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${book.Title}</td>
        <td>${book.Author}</td>
        <td>${book.Pages}</td>
        <td>${book.Year}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  // Filter logic
  function filterBooks(query) {
    query = query.toLowerCase();
    return books.filter(book =>
      book._titleLower.includes(query) || book._authorLower.includes(query)
    );
  }

  // Input search + smart scroll behavior
  if (input) {
    let scrollTimeout;

    input.addEventListener('input', debounce(() => {
      const query = input.value.trim();
      if (query === '') {
        table.style.display = 'none';
        return;
      }

      const matches = filterBooks(query);
      renderBooks(matches);

      // Cancel any previous scroll attempts
      clearTimeout(scrollTimeout);

      // If results, scroll to the last one after short delay
      if (matches.length > 0) {
        scrollTimeout = setTimeout(() => {
          if (table) {
            const offset = -80; 
            
            const tableTop = table.getBoundingClientRect().top + window.pageYOffset + offset;

            window.scrollTo({
              top: tableTop,
              behavior: 'smooth'
            });
          }
        }, 500);

      }
    }, 500));

    // Load CSV and preprocess
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
      },
      error: function(err) {
        console.error("Error loading CSV:", err);
      }
    });
  }
}
