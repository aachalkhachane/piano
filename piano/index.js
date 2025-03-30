const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-checkbox input");

let audio = new Audio('tunes/w.wav'); //default
function playTune(key) {
    key = key.toLowerCase();
    //way 2nd:
    audio.src = `tunes/${key}.wav`;
    audio.play();

    // for keyboard key effect 
    const clickedKey = document.querySelector(`[data-key = "${key}"]`);
    clickedKey.classList.add("active");

    setTimeout(()=>{
        clickedKey.classList.remove("active");  //remove after 130ms
    },130);

    //wayy 1:
    // switch (key) {
    //     case 'y':
    //         const audio1 = new Audio('tunes/y.wav');
    //         audio1.play();
    //         break;
    //     case 'w':
    //         const audio2 = new Audio('tunes/w.wav');
    //         audio2.play();
    //         break;
    //     case 'u':
    //         const audio3 = new Audio('tunes/u.wav');
    //         audio3.play();
    //         break;
    //     case 't':
    //         const audio4 = new Audio('tunes/t.wav');
    //         audio4.play();
    //         break;
    //     case 's':
    //         const audio5 = new Audio('tunes/s.wav');
    //         audio5.play();
    //         break;
    //     case 'p':
    //         const audio6 = new Audio('tunes/p.wav');
    //         audio6.play();
    //         break;
    //     case 'o':
    //         const audio7 = new Audio('tunes/o.wav');
    //         audio7.play();
    //         break;
    //     case 'l':
    //         const audio8 = new Audio('tunes/l.wav');
    //         audio8.play();
    //         break;
    //     case 'k':
    //         const audio9 = new Audio('tunes/k.wav');
    //         audio9.play();
    //         break;
    //     case 'j':
    //         const audio10 = new Audio('tunes/j.wav');
    //         audio10.play();
    //         break;
    //     case 'h':
    //         const audio11 = new Audio('tunes/h.wav');
    //         audio11.play();
    //         break;
    //     case 'g':
    //         const audio12 = new Audio('tunes/g.wav');
    //         audio12.play();
    //         break;
    //     case 'f':
    //         const audio13 = new Audio('tunes/f.wav');
    //         audio13.play();
    //         break;
    //     case 'e':
    //         const audio14 = new Audio('tunes/e.wav');
    //         audio14.play();
    //         break;
    //     case 'd':
    //         const audio15 = new Audio('tunes/d.wav');
    //         audio15.play();
    //         break;
    //     case 'a':
    //         const audio16 = new Audio('tunes/a.wav');
    //         audio16.play();
    //         break;
    //     case ';':
    //         const audio17 = new Audio('tunes/;.wav');
    //         audio17.play();
    //         break;

    // }


}

//for click 

pianoKeys.forEach(key => {
    key.addEventListener("click", (event) => {
        playTune(event.target.textContent);
    });
});

//for volume
const handleVolume = (e) =>{
    audio.volume = e.target.value;
    
}

//for keyboard

const pressedKey = (event) =>{
    playTune(event.key);
}

//for toggle
const handleToggle = (event)=>{
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}


document.addEventListener("keydown",pressedKey); //for keyboard click
volumeSlider.addEventListener("input",handleVolume); //for handle volume
keysCheck.addEventListener("click",handleToggle);