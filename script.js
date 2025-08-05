document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.tab-content');
  const links = document.querySelectorAll('.main-nav a');
  const startButton = document.getElementById('start-button');

  function showTab(id) {
    sections.forEach(sec => {
      sec.style.display = sec.id === id ? 'block' : 'none';
    });
  }

  links.forEach(link => {
    link.addEventListener('click', evt => {
      evt.preventDefault();
      showTab(link.dataset.tab);
    });
  });

  startButton.addEventListener('click', evt => {
    evt.preventDefault();
    showTab('erfassung');
    document.getElementById('tabs').scrollIntoView({ behavior: 'smooth' });
  });

  showTab('erfassung');
});
