document.addEventListener('DOMContentLoaded', () => {

  // Partículas PlayStation
  const canvas = document.getElementById('particles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    const symbols = ['△', '○', '□', '✕'];

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - 100;
        this.size = Math.random() * 28 + 22;
        this.speed = Math.random() * 1.8 + 1;
        this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
        this.opacity = Math.random() * 0.6 + 0.4;
      }
      update() {
        this.y += this.speed;
        if (this.y > canvas.height + 50) this.reset();
      }
      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.font = `${this.size}px Arial`;
        ctx.fillStyle = '#00ccff';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#00ccff';
        ctx.fillText(this.symbol, this.x, this.y);
      }
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    resize();
    for (let i = 0; i < 30; i++) particles.push(new Particle());
    animate();
    window.addEventListener('resize', resize);
  }

  // Gerar Cards
  const grid = document.getElementById('emuladores-grid');
  if (grid && typeof emuladoresData !== "undefined") {
    grid.innerHTML = ''; // Limpa antes

    Object.keys(emuladoresData).forEach(key => {
      const e = emuladoresData[key];
      const card = document.createElement('div');
      card.className = "bg-zinc-900/90 border border-cyan-500/40 rounded-3xl overflow-hidden";
      card.innerHTML = `
        <div class="h-40 flex items-center justify-center bg-black/50">
          <img src="\( {e.imagem}" class="h-28" alt=" \){e.nome}">
        </div>
        <div class="p-5">
          <h3 class="text-xl font-bold">${e.nome}</h3>
          <p class="text-cyan-400 text-sm">${e.categoria}</p>
          <p class="text-gray-400 text-sm mt-2 line-clamp-2">${e.descricao}</p>
          <a href="emulador.html?emu=${key}" class="block mt-4 text-center py-3 bg-cyan-500 text-black font-bold rounded-2xl">
            Ver Detalhes
          </a>
        </div>
      `;
      grid.appendChild(card);
    });
  }
});
