export const navigation = () => {
  const navMarker = document.querySelector('.nav-marker');
  const navItemContainer = document.querySelectorAll('.nav-item');
  const navContainer = document.querySelector('.nav-list.toggle');
  const mobileNavToggle = document.querySelector('.nav-toggle');
  const subNav = document.querySelectorAll('.sub-nav');

  mobileNavToggle.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    navContainer.classList.toggle('active');
  });

  navItemContainer.forEach((list) => {
    const navItemLink = list.querySelector('a');
    const navItemText = list.querySelector('span');

    [navItemLink, navItemText].forEach((item) => {
      item.addEventListener('mouseover', (e) => {
        let position = list.getBoundingClientRect();
        e.target.parentNode.classList.add('active');
        navMarker.classList.add('active');
        navMarker.style.left = position.x + 'px';
        navMarker.style.width = position.width + 'px';
      });
    });

    if (mobileNavToggle.classList.contains('active')) {
      [navItemLink].forEach((item) => {
        item.addEventListener('click', (e) => {
          mobileNavToggle.classList.toggle('active');
          navContainer.classList.toggle('active');
        });
      });
    }

    list.addEventListener('mouseout', () => {
      const navItemLink = list.querySelector('a');
      const navItemText = list.querySelector('span');

      [list, navItemLink, navItemText, navMarker].forEach((item) => {
        item.classList.remove('active');
      });
    });
  });

  subNav.forEach((list) => {
    const navItemText = list.parentNode.querySelector('span').parentNode;

    list.addEventListener('mouseover', () => {
      [navItemText, navMarker].forEach((item) => {
        item.classList.add('active');
      });
    });
  });

  window.addEventListener('resize', () => {
    mobileNavToggle.classList.remove('active');
    navContainer.classList.remove('active');
  });
};
