export const navigation = () => {
  const navMarker = document.querySelector('.nav-marker');
  const navItemContainer = document.querySelectorAll('.nav-item');

  if (window.innerWidth >= 915) {
    navItemContainer.forEach((list) => {
      const navItemLink = list.querySelector('a');
  
      navItemLink.addEventListener('mouseover', (e) => {
        let position = list.getBoundingClientRect();
        e.target.parentNode.classList.add('active');
        navMarker.classList.add('active');
        navMarker.style.left = position.x + 'px';
        navMarker.style.width = position.width + 'px';
      });
  
      list.addEventListener('mouseout', (e) => {
        list.classList.remove('active');
        navMarker.classList.remove('active');
      });
    });
  }
};
