// Crear una escena de Game Over
class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOverScene' });
    }

    create() {
        // Agrega un fondo o imagen de Game Over
        this.add.image(400, 300, 'gameOverBackground').setOrigin(0.5);

        // Agrega un texto de "Game Over"
        this.add.text(400, 200, '¡Game Over!', { fontSize: '48px', fill: '#fff' }).setOrigin(0.5);

        // Agrega un texto con instrucciones para reiniciar o volver al menú principal
        this.add.text(400, 400, 'Pressiona Espai Per Reiniciar', { fontSize: '24px', fill: '#fff' }).setOrigin(0.5);

        // Escucha el evento de teclado para reiniciar el juego
        this.input.keyboard.once('keydown-Space', () => {
            this.scene.start('Level1Scene'); // Cambia 'TitleScene' por la escena que desees
        });
    }
}

// Agregar la escena al juego
const config = {
    // Configuración del juego...
    scene: [TitleScene, LoadingScene, Level1Scene, Level2Scene, GameOverScene],
    // ...
};
