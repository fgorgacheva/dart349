addEventListener('DOMContentLoaded', (event) => {

  const bg = document.querySelector('.bg-img');
  const fg =  document.querySelector('.main-container');
  const windowWidth = window.innerWidth / 5;
  const windowHeight = window.innerHeight / 5 ;

  fg.addEventListener('mousemove', (e) => {
    let mouseX = e.clientX / windowWidth;
    let mouseY = e.clientY / windowHeight;

    mouseX /= 10;
    mouseY /= 10;

    bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
  });
});
