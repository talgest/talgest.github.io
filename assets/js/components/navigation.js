export const navigation = () => {
  const navMarker = document.querySelector('.nav-marker');
  const navContainer = document.querySelector('.nav');
  const mobileNavToggle = document.querySelector('.nav-toggle');
  const navItemContainer = document.querySelectorAll('.nav-item');

  mobileNavToggle.addEventListener('click', (e) => {
    console.log(e.target)
    e.target.classList.toggle('active');
    navContainer.classList.toggle('active');
    document.querySelector('section').style.overflow = 'hidden'
  });

  navItemContainer.forEach((list) => {
    const navItemLink = list.querySelector('a');

    if (list.children.length > 1) {
      navItemLink.addEventListener('click', (e) => console.log(e.target));
    }

    console.log(navMarker)

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
  // document.querySelector('nav ul li a:not(:only-child)').click(function(e) {
  //   this.siblings('.nav-dropdown').toggle();

  //   document.getElementByClassName("nav-dropdown").not(this.siblings()).style.display = "none";
  //   e.stopPropagation();
  // });

  // $('html').click(function() {
  //   document.getElementByClassName("nav-dropdown").style.display = "none";
  // });

  // document.getElementById("nav-toggle").click(function() {
  //   $('nav ul').slideToggle();
  // });

  // document.getElementById("nav-toggle").addEventListener('click', (e) => {
  //   this.classList.toggle('active');
  // });
};
