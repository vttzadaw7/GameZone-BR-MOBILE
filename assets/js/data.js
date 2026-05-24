const emuladoresData = {
  "NetherSX2": {
    nome: "NetherSX2",
    imagem: "https://i.imgur.com/0zK8z3k.png",
    categoria: "PlayStation 2",
    descricao: "O fork mais estável e performático do AetherSX2. Melhor compatibilidade e atualizações frequentes.",
    performance: "92-100%",
    requisitos: [
      "Android 9 ou superior",
      "Snapdragon 845 / Dimensity 8100 ou superior",
      "8GB RAM recomendado",
      "2GB espaço livre"
    ],
    configuracao: [
      "Resolução: 2x ou 3x",
      "Backend: Vulkan + Asynchronous",
      "Anisotropic Filtering: 16x",
      "Anti-Aliasing: MSAA 4x",
      "Skip Draw: 2"
    ],
    jogos: ["God of War II", "Shadow of the Colossus", "Persona 4", "Final Fantasy X", "Gran Turismo 4", "Metal Gear Solid 3", "Silent Hill 2", "Devil May Cry 3", "Tekken 5", "Kingdom Hearts II"]
  },

  "PPSSPP": {
    nome: "PPSSPP",
    imagem: "https://i.imgur.com/5vX9kLm.png",
    categoria: "PlayStation Portable",
    descricao: "O emulador de PSP mais famoso e estável do mundo, com excelente compatibilidade.",
    performance: "95-100%",
    requisitos: ["Android 5.0 ou superior", "2GB RAM", "Qualquer processador médio"],
    configuracao: ["Resolução: 2x ou 3x", "Auto Frameskip", "Anisotropic Filtering", "VSync On"],
    jogos: ["God of War: Ghost of Sparta", "Persona 3 Portable", "Monster Hunter Portable 3rd", "Final Fantasy Type-0", "Dissidia", "Tekken 6"]
  },

  "Dolphin": {
    nome: "Dolphin",
    imagem: "https://i.imgur.com/2fG7pLq.png",
    categoria: "GameCube e Wii",
    descricao: "Melhor emulador de GameCube e Wii para Android.",
    performance: "85-95%",
    requisitos: ["Android 10 ou superior", "Snapdragon 865 ou superior", "8GB RAM"],
    configuracao: ["Backend: Vulkan", "Resolução: 2x", "Anti-Aliasing: 4x MSAA"],
    jogos: ["Super Mario Sunshine", "The Legend of Zelda: Wind Waker", "Super Smash Bros Melee", "Mario Kart Wii"]
  },

  "Citra": {
    nome: "Citra",
    imagem: "https://i.imgur.com/8vH3mXz.png",
    categoria: "Nintendo 3DS",
    descricao: "Emulador de Nintendo 3DS com bom desempenho em aparelhos intermediários.",
    performance: "80-95%",
    requisitos: ["Android 8 ou superior", "Snapdragon 720G ou superior", "6GB RAM"],
    configuracao: ["Resolução: 2x", "Vulkan", "Audio: High"],
    jogos: ["Pokemon Sun/Moon", "The Legend of Zelda: Ocarina of Time", "Super Mario 3D Land"]
  },

  "DuckStation": {
    nome: "DuckStation",
    imagem: "https://i.imgur.com/9Kj2pLm.png",
    categoria: "PlayStation 1",
    descricao: "Emulador de PS1 mais preciso e leve disponível.",
    performance: "98-100%",
    requisitos: ["Android 7 ou superior", "2GB RAM"],
    configuracao: ["Resolução: 4x", "PGXP", "Texture Filtering"],
    jogos: ["Final Fantasy VII", "Resident Evil 2", "Metal Gear Solid", "Castlevania: Symphony of the Night", "Tekken 3"]
  },

  "SNES9x": {
    nome: "SNES9x",
    imagem: "https://i.imgur.com/XpL5vRt.png",
    categoria: "Super Nintendo",
    descricao: "Emulador clássico de SNES com altíssima compatibilidade.",
    performance: "100%",
    requisitos: ["Android 5.0 ou superior"],
    configuracao: ["Filtro: Bilinear", "Resolução Nativa"],
    jogos: ["Super Mario World", "The Legend of Zelda: A Link to the Past", "Donkey Kong Country 2", "Chrono Trigger"]
  },

  "Redream": {
    nome: "Redream",
    imagem: "https://i.imgur.com/7vN9pQm.png",
    categoria: "Sega Dreamcast",
    descricao: "Um dos melhores emuladores de Dreamcast com ótima performance.",
    performance: "90-98%",
    requisitos: ["Android 8 ou superior", "Snapdragon 660 ou superior"],
    configuracao: ["Resolução: 2x", "Vulkan"],
    jogos: ["Shenmue", "Crazy Taxi", "Sonic Adventure 2", "Soul Calibur"]
  }
};
