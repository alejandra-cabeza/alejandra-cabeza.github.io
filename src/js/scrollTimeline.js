const path = document.querySelector('path');
const animationContainer = document.getElementById('animation-container');
const pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength;

function animatePath() {
    const containerTop = animationContainer.offsetTop + (animationContainer.offsetTop / 4);
    const viewportTop = window.scrollY;
    const viewportBottom = viewportTop + window.innerHeight;
    
    const scrollPercentage = Math.max(0, Math.min(1, (viewportBottom - containerTop) / (viewportBottom - viewportTop)));
    
    const drawLength = pathLength * scrollPercentage;
    path.style.strokeDashoffset = pathLength - drawLength;
}

window.addEventListener('scroll', () => {
    requestAnimationFrame(animatePath);
});
