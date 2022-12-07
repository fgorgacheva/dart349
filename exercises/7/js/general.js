addEventListener('DOMContentLoaded', (event) => {

    const mainContainer = document.querySelector('.main-container');

    const startBtn = document.querySelector('.start-btn');
    const musicBtn = document.querySelector('#music');
    const scriptBtn = document.querySelector('#script');
    const script = document.querySelector('.script-popup');
    
    //set up music, stop or start on button press, google workout (user must interact with page first)
    let musicOn = true;
    var music = new Audio('../files/botw-hatenovillage-night.mp3');
    
    music.volume = 0.02;
    music.loop = true;

    musicBtn?.addEventListener('click', (event) => {
        if(musicOn){
            musicBtn.src = "./images/ui/musicOff.PNG";
            music.pause();
        }
        else{
            musicBtn.src = "./images/ui/musicOn.png";
            music.play();
        }
        musicOn = !musicOn;
    });

    //script pop up on click and close when you click outside anywhere
    scriptBtn?.addEventListener('click', (event) => {
        script.style.display = 'flex';
    });

    const overlay = document.querySelector('.overlay');
    
    overlay?.addEventListener('click', (event) => {
        script.style.display = 'none';
    });


    //fade entire page when start is clicked and load story board
    startBtn.addEventListener('click', (event) => {
        //chrome said users must interact with page to play music, no more autoplay?
        if(musicOn){
            music.play();
        }

        //fade home page out, fade storyboard in
        document.querySelector(".main-container").classList.add("fade-out");
        document.querySelector(".game-container").classList.add("displayed");
        setTimeout(() => {
            document.querySelector(".main-container").remove(); 
            document.querySelector(".game-container").classList.add("fade-in");
        }, 1000)
    });

    //scroll logic
    const scrollContainer = document.querySelector(".story-board");

    // scrollContainer.addEventListener("wheel", (evt) => {
    //     evt.preventDefault();
    //     scrollContainer.scrollLeft += 2*evt.deltaY;
    // });

    let options = {
        threshold: 0.6
    }

    //illustration animations on load and adding specific animations
    let callback = function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if(entry.target.classList.contains("shake")){
                    entry.target.classList.add('jello');
                }
                if(entry.target.classList.contains("fade")){
                    entry.target.classList.add('delay-fade-out');
                }
            } else {
                entry.target.classList.remove('active');
                if(entry.target.classList.contains("shake")){
                    entry.target.classList.remove('jello');
                }
                if(entry.target.classList.contains("fade")){
                    entry.target.classList.remove('delay-fade-out');
                }
            }
        });
    };

    //when reach the middle of the screen, do the illustration animation thing
    let observer = new IntersectionObserver(callback, options);

    let imgs = document.querySelectorAll('.story-board section .char');
    imgs.forEach(img => {
        observer.observe(img);
    })
});