const path = document.querySelector('path');
const animationContainer = document.getElementById('animation-container');
const pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

function animatePath() {
    const scrollPercentage = Math.max(0, Math.min(1, (window.scrollY - (animationContainer.offsetTop - 700)) / (document.documentElement.scrollHeight - window.innerHeight)));
    const drawLength = pathLength * scrollPercentage;
    path.style.strokeDashoffset = pathLength - drawLength;
    if (scrollPercentage < 1) {
        requestAnimationFrame(animatePath);
    }
}

window.addEventListener('scroll', () => {
    requestAnimationFrame(animatePath);
});
