document.getElementById('surpriseButton').addEventListener('click', () => {
    launchConfetti();
});

function launchConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiContainer.appendChild(confetti);
    }
}

// CSS for confetti
const style = document.createElement('style');
style.innerHTML = `
    .confetti {
        position: absolute;
        top: 0;
        width: 10px;
        height: 20px;
        opacity: 0;
        transform: translateY(-100vh);
        animation: drop 3s ease-in-out forwards;
    }
    @keyframes drop {
        to {
            transform: translateY(100vh);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
