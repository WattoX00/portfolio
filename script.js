  document.querySelectorAll('.skill-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      content.classList.toggle('open');
      btn.querySelector('.fa-chevron-down').classList.toggle('fa-rotate-180');
    });
  });
