
function setupPhysics_research() {
  const list = document.getElementById('research-list');
  if (!list) return;

  list.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const title = link.getAttribute('data-title');
      const content = link.getAttribute('data-content');
      openPopup(content, title);
    });
  });

  function openPopup(content, title) {
    const popup = window.open("", title, "width=400,height=300,scrollbars=yes");
    popup.document.write(`
      <html>
        <head><title>${title}</title></head>
        <body>
          <h2>${title}</h2>
          <p>${content}</p>
        </body>
      </html>
    `);
    popup.document.close();
  }
}
