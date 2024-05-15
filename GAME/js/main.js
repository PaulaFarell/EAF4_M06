// main.js

// Importa las escenas que necesitas
import loadingScene from './Scenes/loadingScene.js';
import homeScene from './Scenes/homeScene.js';
import gameScene from './Scenes/level1Scene.js';
import gameScene from './Scenes/level2Scene.js';
import gameScene from './Scenes/gameOverScene.js';

// Configuración del juego
const config = {
    type: Phaser.AUTO,
    width: 360,
    height: 640,
    scene: [loadingScene, homeScene, level1Scene, level2Scene, gameOverScene], // Agrega las escenas aquí
    title: 'Pixel Climber',
    backgroundColor: '#ffffff'
};

// Crea una nueva instancia del juego
const game = new Phaser.Game(config);
