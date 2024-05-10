let titleScene = {
    create: function() {
        // Aquí s'afegiran els elements de la pantalla de títol
    }
};

create: function() {
    // Afegeix el títol
    let titleText = this.add.text(400, 300, 'Pixel Climber', { fontSize: '48px', fontFamily: 'Arial', fill: '#ffffff' });
    titleText.setOrigin(0.5);

    // Afegeix les instruccions
    let instructionsText = this.add.text(400, 400, 'Premi "Espai" per començar', { fontSize: '24px', fontFamily: 'Arial', fill: '#ffffff' });
    instructionsText.setOrigin(0.5);
}

game.scene.add('title', titleScene);
game.scene.start('title');
