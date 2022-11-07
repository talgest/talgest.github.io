export const navigation = () => {
  const navMarker = document.querySelector('.nav-marker');
  const navContainer = document.querySelector('.nav');
  const mobileNavToggle = document.querySelector('.nav-toggle');
  const navItemContainer = document.querySelectorAll('.nav-item');

  mobileNavToggle.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    navContainer.classList.toggle('active');
    document.querySelector('section').style.overflow = 'hidden'
  });

  navItemContainer.forEach((list) => {
    const navItemLink = list.querySelector('a');

    navItemLink.addEventListener('mouseover', () => {
      let position = list.getBoundingClientRect();
      navMarker.classList.add('active');
      navMarker.style.left = position.x + 'px';
      navMarker.style.width = position.width + 'px';
    });

    list.addEventListener('mouseout', () => {
      navMarker.classList.remove('active');
    });
  });
};
