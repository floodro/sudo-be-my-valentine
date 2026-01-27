const noBtn = document.querySelector('#no-button');

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

const yesBtn = document.querySelector('#yes-button');

yesBtn.addEventListener('click', () => {
    alert("Yay! I'll see you on the 14th! ❤️");
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; 
});