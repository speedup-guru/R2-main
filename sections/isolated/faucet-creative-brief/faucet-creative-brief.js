 const dropdown = document.getElementById('accordionDropdown');
  const selected = dropdown.querySelector('.dropdown-selected');
  const options = dropdown.querySelector('.dropdown-options');
  selected.addEventListener('click', () => {
    dropdown.classList.toggle('dropdown-open');
  });

const scrollOffset = 150;
if (document.getElementById('accordionDropdown')) {
  document.body.classList.add('has-accordion-dropdown');
}
options.querySelectorAll('div').forEach(option => {
  option.addEventListener('click', () => {
    const targetId = option.getAttribute('data-target');

    selected.innerHTML = `${option.textContent} <span><img src="assets/images/arrow_down.svg" alt=""></span>`;

    dropdown.classList.remove('dropdown-open');

    document.querySelectorAll('.accordion-collapse.show').forEach(el => {
      bootstrap.Collapse.getOrCreateInstance(el).hide();
    });

    const targetCollapse = document.getElementById(targetId);
    if (targetCollapse) {
      bootstrap.Collapse.getOrCreateInstance(targetCollapse).show();
      setTimeout(() => {
        const targetHeader = targetCollapse.previousElementSibling;
        const elementPosition = targetHeader.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - scrollOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 350);
    }
  });
});