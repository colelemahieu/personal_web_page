function setupPhysics_research() {
  const list = document.getElementById('research-list');
  const modal = document.getElementById('research-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = modal.querySelector('.modal-close');

  list.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const title = link.getAttribute('data-title');
      const content = window.physicsResearchContent?.[title] || 'Content coming soon.';

      modalTitle.textContent = title;
      modalBody.innerHTML = content;  // Changed from textContent to innerHTML
      modal.style.display = 'block';
    });
  });

  closeBtn.onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
}
