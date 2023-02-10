'use strict';

const sounds = {
    'A': '04-DRUM-KIT_sounds_boom.wav',
    'S': '04-DRUM-KIT_sounds_clap.wav',
    'D': '04-DRUM-KIT_sounds_hihat.wav',
    'F': '04-DRUM-KIT_sounds_kick.wav',
    'G': '04-DRUM-KIT_sounds_openhat.wav',
    'H': '04-DRUM-KIT_sounds_ride.wav',
    'J': '04-DRUM-KIT_sounds_snare.wav',
    'K': '04-DRUM-KIT_sounds_tink.wav',
    'L': '04-DRUM-KIT_sounds_tom.wav',
}

const criarDiv = (text) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = text;
    div.id = text;
    document.getElementById('container').appendChild(div);
}

const show = (sounds) => Object.keys(sounds).forEach(criarDiv);

const playsong = (lettersound) => {
    const audio = new Audio(`./sounds/${sounds[lettersound]}`);
    audio.play();
}

const addeffect = (lettersound) => document.getElementById(lettersound)
                                        .classList.toggle('active');

const removerEfeito = (lettersound) => {
    const div = document.getElementById(lettersound);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend',removeActive);
};

const activDiv = (event) => {

    const lettersound = event.type == 'click' ? event.target.id : event.key.toUpperCase();
    
    const lettersoundPermitida = sounds.hasOwnProperty(lettersound);
    if (lettersoundPermitida){
        addeffect(lettersound);
        playsong(lettersound);
        removerEfeito(lettersound);
    }
}

show(sounds);
document.getElementById('container')
        .addEventListener('click', activDiv);

window.addEventListener('keyup',activDiv);