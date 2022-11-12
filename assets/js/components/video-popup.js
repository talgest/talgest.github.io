export const popUp = () => {
  const toggleBtns = document.querySelectorAll('.play-btn');

  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const iframe = document.createElement('iframe');
      const popupParent = e.target.closest('.section');
      const popup = popupParent.querySelector('.modal--media-embed');
      const popupContent = popup.querySelector('.media-player');
      const contentUrl = popupContent.getAttribute('data-url')
      const closeBtn = popupParent.querySelector('.modal--media-embed .close');

      iframe.src = contentUrl;

      popup.style.display = 'block';

      popupContent.appendChild(iframe);

      closeBtn.addEventListener('click', () => {
        popup.style.display = 'none'
      });
    });
  });
}
