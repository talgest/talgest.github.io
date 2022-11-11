export const readMore = () => {
  const readMoreBtn = document.querySelectorAll('.read-more-toggle');

  readMoreBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const readMoreId = e.target.getAttribute('data-read-more-id');
      const dots = document.querySelector(`.dots[data-read-more-id="${readMoreId}"]`);
      const hiddenContent = document.querySelector(`.read-more-content[data-read-more-id="${readMoreId}"]`);

      [dots, hiddenContent].forEach(item => {
        item.classList.toggle('hide')
      });

      e.target.classList.toggle('shown');


      if (e.target.classList.contains('shown')) {
        e.target.textContent = 'Read Less';
      } else {
        e.target.textContent = 'Read More';
      }
    });
  });
}
