document.addEventListener('DOMContentLoaded', () => {

  // ================= PARTICLES - BOTÕES DO PLAYSTATION =================
  const canvas = document.getElementById('particles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];

    const psButtons = ['△', '○', '□', '✕'];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - 100;
        this.size = Math.random() * 32 + 24;
        this.speedY = Math.random() * 1.6 + 0.9;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.symbol = psButtons[Math.floor(Math.random() * psButtons.length)];
        this.opacity = Math.random() * 0.65 + 0.35;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 2.2 - 1.1;
      }
      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
        if (this.y > canvas.height + 50) this.y = -50;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.font = `${this.size}px Arial`;
        ctx.textAlign = 'center';
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.fillStyle = '#00f0ff';
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 20;
        ctx.fillText(this.symbol, 0, 0);
        ctx.restore();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < 38; i++) {
        particles.push(new Particle());
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animateParticles);
    }

    resizeCanvas();
    initParticles();
    animateParticles();
    window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });
  }

  // ================= GERAR CARDS =================
  const grid = document.getElementById('emuladores-grid');
  if (grid) {
    Object.keys(emuladoresData).forEach(key => {
      const emu = emuladoresData[key];
      
      const card = document.createElement('div');
      card.className = `card-glow bg-zinc-900/80 border border-cyan-400/30 rounded-3xl overflow-hidden backdrop-blur-md cursor-pointer`;
      card.innerHTML = `
        <div class="h-44 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-black p-6">
          <img src="\( {emu.imagem}" alt=" \){emu.nome}" class="max-h-32 drop-shadow-2xl">
        </div>
        <div class="p-6">
          <h3 class="text-2xl font-bold text-white">${emu.nome}</h3>
          <p class="text-cyan-300 text-sm mt-1">${emu.categoria}</p>
          <p class="text-zinc-400 text-sm mt-4 line-clamp-3">${emu.descricao}</p>
          
          <a href="emulador.html?emu=${key}" 
             class="mt-6 block w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold rounded-2xl text-center transition text-lg">
            Ver Detalhes 🔥
          </a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // ================= MÚSICA =================
  const musicBtn = document.getElementById('musicBtn');
  if (musicBtn) {
    let music = null;
    let isPlaying = false;

    musicBtn.addEventListener('click', () => {
      if (!music) {
        music = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3");
        music.loop = true;
        music.volume = 0.45;
      }

      if (isPlaying) {
        music.pause();
        musicBtn.innerHTML = `<i class="fas fa-volume-mute text-2xl"></i>`;
      } else {
        music.play();
        musicBtn.innerHTML = `<i class="fas fa-volume-up text-2xl"></i>`;
      }
      isPlaying = !isPlaying;
    });
  }
});
