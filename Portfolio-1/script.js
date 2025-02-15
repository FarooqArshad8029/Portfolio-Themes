// Typing Effect for Tagline
function typeTagline(text, element, speed = 100) {
    let index = 0;
    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
      }
    }
    type();
  }
  
  // Form Submission Handling
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
  });
  
  // Matrix Rain Effect
  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
  const fontSize = 18;
  let drops;
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drops = Array(Math.floor(canvas.width / fontSize)).fill(1);
  }
  
  function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';
  
    drops.forEach((drop, i) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, drop * fontSize);
      
      if (drop * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    });
    requestAnimationFrame(drawMatrix);
  }
  
  // Initialize effects after page load
  window.addEventListener('load', () => {
    typeTagline("MERN Stack Developer | Turning Ideas into Reality", document.querySelector('.tagline'));
    resizeCanvas();
    drawMatrix();
    window.addEventListener('resize', resizeCanvas);
  });
  