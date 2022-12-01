addEventListener('DOMContentLoaded', (event) => {

  const bg = document.querySelector('.bg-img');
  const fg =  document.querySelector('.page');
  const windowWidth = window.innerWidth / 5;
  const windowHeight = window.innerHeight / 5 ;

  fg.addEventListener('mousemove', (e) => {
    let mouseX = e.clientX / windowWidth;
    let mouseY = e.clientY / windowHeight;

    mouseX /= 8;
    mouseY /= 8;

    bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
  });
});
