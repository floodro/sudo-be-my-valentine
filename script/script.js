const proceedBtn = document.querySelector('#proceed-button');
const questionTrigger = document.querySelector('#question-trigger');
const yesBtn = document.querySelector('#yes-button');
const noBtn = document.querySelector('#no-button');

const introCard = document.querySelector('#intro-card');
const catCard = document.querySelector('#cat-card');
const proposalCard = document.querySelector('#proposal-card');
const successCard = document.querySelector('#success-card');

let yesSize = 1;
let iteration = 0;

proceedBtn.addEventListener('click', () => {
    playMusic(); 
    fadeTransition(introCard, catCard);
});

questionTrigger.addEventListener('click', () => {
    fadeTransition(catCard, proposalCard);
});

noBtn.addEventListener('click', () => {
    if (yesSize < 2.5) {
        iteration += 1 
        yesSize += 0.2; 
        yesBtn.style.transform = `scale(${yesSize})`;
    }

    if (iteration >= 5) {
        noBtn.style.display = 'none';
        yesBtn.style.transform = 'scale(1.0)';
        proposalCard.insertAdjacentHTML('beforeend', '<p style="margin-top: 20px; color: #d63384;"> Wala kang choice, sapilitan na to AHHAHAHAHAHHA </p>');
    }
    const phrases = ["Damot", "Plsplspls?", "Pahirapan e", "Sige naaaaa", "Pleaseeeee", "Ihhhh", "Libre kita hehe"];
    noBtn.innerText = phrases[Math.floor(Math.random() * phrases.length)];
});

yesBtn.addEventListener('click', () => {
    fadeTransition(proposalCard, successCard);
    for (let i = 0; i < 50; i++) {
        createHeart();
    }
    
    document.title = "I love you!";
});

function fadeTransition(fromCard, toCard) {
    fromCard.style.transition = 'opacity 0.5s ease';
    fromCard.style.opacity = '0';

    setTimeout(() => {
        fromCard.style.display = 'none';
        toCard.style.display = 'block';
        setTimeout(() => {
            toCard.style.transition = 'opacity 0.5s ease';
            toCard.style.opacity = '1';
        }, 50);
    }, 500);
}

function createHeart() {
    const heart = document.createElement('div');
    const secondHeart = document.createElement('div');

    heart.classList.add('heart-particle');
    secondHeart.classList.add('heart-particle');

    heart.innerHTML = '❤️'; 
    secondHeart.innerHTML = '💜';

    heart.style.left = Math.random() * 100 + 'vw';
    secondHeart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    secondHeart.style.top = '100vh';

    const size = Math.random() * 20 + 10 + 'px';
    heart.style.fontSize = size;
    secondHeart.style.fontSize = size;

    const duration = Math.random() * 3 + 2 + 's';
    heart.style.animationDuration = duration;
    secondHeart.style.animationDuration = duration;

    document.body.appendChild(heart);
    document.body.appendChild(secondHeart);

    setTimeout(() => {
        heart.remove();
        secondHeart.remove();
    }, 5000);
}

function playMusic() {
    const music = document.getElementById('bg-music');
    if (music) {
        music.play().catch(e => console.log(e));
        music.volume = 0.5;
    }
}
