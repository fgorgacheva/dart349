addEventListener('DOMContentLoaded', (event) => {
  let subtitle =  document.querySelector('#subtitle');
  let subtitleText = "Multimedia Designer and Artist";

  for (let i = 0; i < subtitleText.length; i++){
    let span = document.createElement("span");
    let text = document.createTextNode(subtitleText[i]);
    span.style.animationDelay= (i * 0.05)+"s";
    span.appendChild(text);
    subtitle.appendChild(span);
  }
});

window.onload = function () {
  particlesJS.load("particles-js", "/js/particles.json", () => {
    console.log("loaded")
  });


};
