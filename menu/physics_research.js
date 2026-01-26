function setupPhysics_research() {
  const modal = document.getElementById('research-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = modal.querySelector('.modal-close');

  document.querySelectorAll('.research-buttons button').forEach(button => {
    button.addEventListener('click', () => {
      const title = button.getAttribute('data-title');
      const content = window.physicsResearchContent?.[title] || 'Content coming soon.';

      modalTitle.textContent = title;
      modalBody.innerHTML = content;

      modal.style.display = 'block';
      document.body.classList.add('modal-open');
    });
  });

  closeBtn.onclick = () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open'); 
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  };
}
