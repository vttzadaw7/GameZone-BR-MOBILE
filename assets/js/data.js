const emuladoresData = {
  "NetherSX2": {
    nome: "NetherSX2",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/PS2_logo.svg/512px-PS2_logo.svg.png",
    categoria: "🎮 PlayStation 2",
    descricao: "O fork mais estável e performático do AetherSX2. Melhor compatibilidade e atualizações frequentes.",
    performance: "92-100%",
    requisitos: ["Android 9 ou superior", "Snapdragon 845 ou superior", "8GB RAM recomendado"],
    configuracao: ["Resolução: 2x ou 3x", "Vulkan + Asynchronous", "Anisotropic 16x", "MSAA 4x"],
    jogos: [
      "God of War II", "Shadow of the Colossus", "Persona 4", "Final Fantasy X",
      "Gran Turismo 4", "Metal Gear Solid 3", "Silent Hill 2", "Devil May Cry 3",
      "Tekken 5", "Kingdom Hearts II"
    ]
  },

  "PPSSPP": {
    nome: "PPSSPP",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/PPSSPP_logo.svg/512px-PPSSPP_logo.svg.png",
    categoria: "🎮 PlayStation Portable",
    descricao: "O emulador de PSP mais famoso e estável do mundo.",
    performance: "95-100%",
    requisitos: ["Android 5.0 ou superior", "2GB RAM"],
    configuracao: ["Resolução: 2x ou 3x", "Auto Frameskip", "Anisotropic Filtering"],
    jogos: [
      "God of War: Ghost of Sparta", "Persona 3 Portable", "Monster Hunter Portable 3rd",
      "Final Fantasy Type-0", "Dissidia Final Fantasy", "Tekken 6", "Metal Gear Solid: Peace Walker",
      "Burnout Legends", "Grand Theft Auto: Vice City Stories", "Need for Speed Most Wanted"
    ]
  },

  "Dolphin": {
    nome: "Dolphin",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Dolphin_Emulator_logo.svg/512px-Dolphin_Emulator_logo.svg.png",
    categoria: "🎮 GameCube & Wii",
    descricao: "Melhor emulador de GameCube e Wii para Android.",
    performance: "85-95%",
    requisitos: ["Android 10+", "Snapdragon 865+", "8GB RAM"],
    configuracao: ["Backend: Vulkan", "Resolução: 2x", "Anti-Aliasing 4x"],
    jogos: [
      "Super Mario Sunshine", "The Legend of Zelda: Wind Waker", "Super Smash Bros Melee",
      "Mario Kart Wii", "Xenoblade Chronicles", "Resident Evil 4", "Metroid Prime",
      "Luigi's Mansion", "Star Fox Assault", "Paper Mario: The Thousand-Year Door"
    ]
  },

  "Citra": {
    nome: "Citra",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Citra_logo.svg/512px-Citra_logo.svg.png",
    categoria: "🎮 Nintendo 3DS",
    descricao: "Emulador de Nintendo 3DS com bom desempenho.",
    performance: "80-95%",
    requisitos: ["Android 8+", "Snapdragon 720G+", "6GB RAM"],
    configuracao: ["Resolução: 2x", "Vulkan"],
    jogos: [
      "Pokemon Sun", "Pokemon Moon", "The Legend of Zelda: Ocarina of Time",
      "Super Mario 3D Land", "Animal Crossing: New Leaf", "Fire Emblem Awakening",
      "Monster Hunter Stories", "Mario Kart 7", "Luigi's Mansion: Dark Moon", "Kirby Triple Deluxe"
    ]
  },

  "DuckStation": {
    nome: "DuckStation",
    imagem: "https://i.ibb.co/5Y7Z8kZ/duckstation.png",
    categoria: "🎮 PlayStation 1",
    descricao: "Emulador de PS1 mais preciso e leve.",
    performance: "98-100%",
    requisitos: ["Android 7+", "2GB RAM"],
    configuracao: ["Resolução: 4x", "PGXP", "Texture Filtering"],
    jogos: [
      "Final Fantasy VII", "Resident Evil 2", "Metal Gear Solid", "Castlevania: Symphony of the Night",
      "Tekken 3", "Crash Bandicoot", "Tony Hawk's Pro Skater 2", "Silent Hill",
      "Gran Turismo 2", "Persona 2: Innocent Sin"
    ]
  },

  "SNES9x": {
    nome: "SNES9x",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/SNES_logo.svg/512px-SNES_logo.svg.png",
    categoria: "🎮 Super Nintendo",
    descricao: "Emulador clássico de SNES com altíssima compatibilidade.",
    performance: "100%",
    requisitos: ["Android 5.0 ou superior"],
    configuracao: ["Filtro Bilinear", "Resolução Nativa"],
    jogos: [
      "Super Mario World", "The Legend of Zelda: A Link to the Past", "Donkey Kong Country 2",
      "Final Fantasy VI", "Chrono Trigger", "Super Metroid", "EarthBound",
      "Mega Man X", "Street Fighter II Turbo", "Star Fox"
    ]
  },

  "Redream": {
    nome: "Redream",
    imagem: "https://i.ibb.co/4pKzL3D/redream.png",
    categoria: "🎮 Sega Dreamcast",
    descricao: "Melhor emulador de Dreamcast disponível.",
    performance: "90-98%",
    requisitos: ["Android 8+", "Snapdragon 660+"],
    configuracao: ["Resolução: 2x", "Vulkan"],
    jogos: [
      "Shenmue", "Crazy Taxi", "Sonic Adventure 2", "Soul Calibur",
      "Resident Evil: Code Veronica", "Jet Set Radio", "Skies of Arcadia",
      "Grandia II", "Phantasy Star Online", "Power Stone 2"
    ]
  },

  "Winlator": {
    nome: "Winlator",
    imagem: "https://i.ibb.co/0qKzZ7k/winlator.png",
    categoria: "🖥️ Windows no Android",
    descricao: "Rode jogos de PC (Windows) diretamente no seu celular.",
    performance: "70-90%",
    requisitos: ["Android 9+", "Snapdragon 865+", "8GB RAM"],
    configuracao: ["DXVK", "Turnip Driver", "Resolução Alta"],
    jogos: [
      "GTA San Andreas", "Half-Life 2", "Minecraft Java", "Counter-Strike 1.6",
      "Need for Speed Underground 2", "The Sims 2", "Max Payne", "Quake III Arena",
      "Call of Duty 2", "Prince of Persia: The Sands of Time"
    ]
  },

  "Eden": {
    nome: "Eden",
    imagem: "https://i.ibb.co/3zK7vLm/eden.png",
    categoria: "🌿 Nintendo Switch",
    descricao: "Emulador leve de Nintendo Switch em desenvolvimento.",
    performance: "75-90%",
    requisitos: ["Android 10+", "Snapdragon 888+", "8GB RAM"],
    configuracao: ["Resolução 720p", "Vulkan"],
    jogos: [
      "The Legend of Zelda: Breath of the Wild", "Mario Kart 8 Deluxe", "Super Mario Odyssey",
      "Animal Crossing: New Horizons", "Splatoon 2", "Pokemon Sword", "Fire Emblem Three Houses",
      "Xenoblade Chronicles 2", "Hollow Knight", "Celeste"
    ]
  }
};
