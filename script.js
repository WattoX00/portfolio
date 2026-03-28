document.querySelectorAll('.skill-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('.fa-chevron-down');

    if (content.style.height && content.style.height !== '0px') {
      content.style.height = '0px';
    } else {
      content.style.height = content.scrollHeight + 'px';
    }

    icon.classList.toggle('fa-rotate-180');
  });
});
