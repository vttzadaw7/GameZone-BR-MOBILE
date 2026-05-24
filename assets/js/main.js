document.addEventListener('DOMContentLoaded', () => {

  // ================= PARTICLES =================
  const canvas = document.getElementById('particles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 2;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.speedY = Math.random() * 1.2 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        if (this.y > canvas.height) this.y = 0;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#00f0ff';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.size, this.y + this.size * 1.5);
        ctx.lineTo(this.x - this.size, this.y + this.size * 1.5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < 80; i++) {
        particles.push(new Particle());
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animateParticles);
    }

    resizeCanvas();
    initParticles();
    animateParticles();
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
  }

  // ================= GERAR CARDS NO INDEX =================
  const grid = document.getElementById('emuladores-grid');
  if (grid) {
    Object.keys(emuladoresData).forEach(key => {
      const emu = emuladoresData[key];
      
      const card = document.createElement('div');
      card.className = `card-glow bg-zinc-900/80 border border-cyan-500/30 rounded-3xl overflow-hidden backdrop-blur-md cursor-pointer`;
      card.innerHTML = `
        <div class="h-44 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-black p-6">
          <img src="\( {emu.imagem}" alt=" \){emu.nome}" class="max-h-32 drop-shadow-2xl">
        </div>
        <div class="p-6">
          <h3 class="text-2xl font-bold text-cyan-400">${emu.nome}</h3>
          <p class="text-sm text-cyan-300 mt-1">${emu.categoria}</p>
          <p class="text-zinc-400 text-sm mt-4 line-clamp-3">${emu.descricao}</p>
          
          <a href="emulador.html?emu=${key}" 
             class="mt-6 block w-full py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-2xl text-center transition">
            Ver Detalhes
          </a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // Music Button
  const musicBtn = document.getElementById('musicBtn');
  if (musicBtn) {
    let music = null;
    musicBtn.addEventListener('click', () => {
      if (!music) {
        music = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
        music.loop = true;
      }
      music.paused ? music.play() : music.pause();
    });
  }
});
