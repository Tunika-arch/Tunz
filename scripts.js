function startAnimation() {
    document.querySelector('.landing-page').style.display = 'none';
    createBalloons();
    setTimeout(showFriendshipReview, 3000);
}

function createBalloons() {
    const balloonContainer = document.getElementById('balloons');
    for (let i = 0; i < 50; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        balloon.style.left = `${Math.random() * 100}vw`;
        balloonContainer.appendChild(balloon);
    }
    setTimeout(showClown, 3000);
}

function showClown() {
    const clownContainer = document.createElement('div');
    clownContainer.classList.add('clown-container');
    clownContainer.id = 'clown';
    clownContainer.innerHTML = '<h1>Happy Birthday!</h1>';
    document.body.appendChild(clownContainer);
    setTimeout(() => {
        clownContainer.style.display = 'none';
    }, 3000);
}

function showFriendshipReview() {
    document.getElementById('friendship-review').style.display = 'block';
    const countdown = document.getElementById('countdown-timer');
    countdown.style.display = 'block';
    let timer = 20;
    const countdownInterval = setInterval(() => {
        countdown.textContent = `Wait for it... ${timer--}`;
        if (timer < 0) {
            clearInterval(countdownInterval);
            countdown.style.display = 'none';
            showGlitch();
        }
    }, 1000);
}

function showGlitch() {
    document.getElementById('friendship-review').style.display = 'none';
    document.getElementById('glitch').style.display = 'block';
    createGlitchText();
    setTimeout(showFinalMessage, 5000);
}

function createGlitchText() {
    const glitchContainer = document.getElementById('glitch');
    const texts = ["ERROR 404", "GLITCHING...", "SYSTEM FAILURE", "REBOOTING...", "PLEASE WAIT...", "!!!"];
    for (let i = 0; i < 50; i++) {
        const glitchText = document.createElement('div');
        glitchText.classList.add('glitch-text');
        glitchText.textContent = texts[Math.floor(Math.random() * texts.length)];
        glitchContainer.appendChild(glitchText);
    }
}

function showFinalMessage() {
    document.getElementById('glitch').style.display = 'none';
    document.getElementById('final-message').style.display = 'block';
}

// Responsive gallery slide effect
const photoGallery = document.querySelector('.memory-lane');
let scrollAmount = 0;
const slideTimer = setInterval(() => {
    photoGallery.scrollBy({ left: 300, behavior: 'smooth' });
    scrollAmount += 300;
    if (scrollAmount >= photoGallery.scrollWidth) {
        clearInterval(slideTimer);
    }
}, 2000);
