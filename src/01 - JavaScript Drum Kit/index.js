function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return //stops the function.
    audio.currentTime = 0; //rewind sound to the start.
    key.classList.add('playing');

    audio.play();
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip if it is not a transform.
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);