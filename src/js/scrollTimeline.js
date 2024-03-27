const path = document.querySelector('path');
const animationContainer = document.getElementById('animation-container');
const pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

function animatePath() {
    const scrollPercentage = Math.max(0, Math.min(1, (window.scrollY - animationContainer.offsetTop + animationContainer.offsetHeight / 4) / (animationContainer.offsetHeight - window.innerHeight)));
    const drawLength = pathLength * scrollPercentage;
    path.style.strokeDashoffset = pathLength - drawLength;
}

window.addEventListener('scroll', () => {
    requestAnimationFrame(animatePath);
});
