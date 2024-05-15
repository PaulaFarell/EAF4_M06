class Level2Scene extends Phaser.Scene {
    constructor() {
        super({ key: 'Level2Scene' });
    }

    create() {
        // Lógica del nivel 2
    }
}


let score = 0;

// Cuando el jugador recoge una estrella
function collectStar() {
    score += 10;
    // Actualizar la puntuación en pantalla
}


// Crear un emisor de partículas
const emitter = this.add.particles('snowflake').createEmitter({
    x: { min: 0, max: 800 },
    y: -10,
    lifespan: 5000,
    speedY: { min: 100, max: 200 },
    scale: { start: 0.1, end: 0 },
    blendMode: 'ADD',
});
