function playNote(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
          key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!key) return;
    audio.play();
}

document.addEventListener('click', playNote);