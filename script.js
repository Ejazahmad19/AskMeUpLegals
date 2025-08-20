// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add intersection observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});

// Add dynamic particle generation
function createRandomParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.position = 'fixed';
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.top = '100vh';
  particle.style.width = (Math.random() * 4 + 2) + 'px';
  particle.style.height = particle.style.width;
  particle.style.background = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)`;
  particle.style.borderRadius = '50%';
  particle.style.pointerEvents = 'none';
  particle.style.animation = `floatUp ${Math.random() * 3 + 4}s linear forwards`;
  
  document.body.appendChild(particle);
  
  setTimeout(() => {
    particle.remove();
  }, 7000);
}

// Add CSS for floating up animation
const style = document.createElement('style');
style.textContent = `
  @keyframes floatUp {
    to {
      transform: translateY(-100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Create particles periodically
setInterval(createRandomParticle, 2000);

// Add mouse move effect for header
const header = document.querySelector('header');
header.addEventListener('mousemove', (e) => {
  const rect = header.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  header.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(99, 102, 241, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%)`;
});

header.addEventListener('mouseleave', () => {
  header.style.background = 'rgba(255, 255, 255, 0.05)';
});