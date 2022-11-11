export const popUp = () => {
  const toggleBtns = document.querySelectorAll('.play-btn');

  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const iframe = document.createElement("iframe");
      const modalParent = e.target.closest('.section');
      const modal = modalParent.querySelector('.modal--media-embed');
      const modalContent = modal.querySelector('.media-player');
      const contentUrl = modalContent.getAttribute('data-url')
      const closeBtn = modalParent.querySelector('.modal--media-embed .close');

      iframe.src = contentUrl;

      modal.style.display = 'block';

      modalContent.appendChild(iframe);

      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
      });
    });
  });
}


{/* <iframe width="1280" height="720" src="https://www.youtube.com/embed/ePNtltBXOjU" title="Tree" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}