addEventListener('DOMContentLoaded', (event) => {
    const popupBtn = document.querySelector('#popup-btn');
    const popup = document.querySelector('.popup');
  
    //pop up on click and close when you click outside anywhere
    popupBtn?.addEventListener('click', (event) => {
      popup.style.display = 'flex';
    });
  
    const overlay = document.querySelector('.overlay');
    
    overlay?.addEventListener('click', (event) => {
      popup.style.display = 'none';
    });
  
  
  });