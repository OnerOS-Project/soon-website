const glow = document.getElementById('glow');

window.addEventListener('mousemove', (e) => {
    const x = e.clientX - glow.offsetWidth / 2;
    const y = e.clientY - glow.offsetHeight / 2;
    
    glow.style.transform = `translate(${x}px, ${y}px)`;
});
