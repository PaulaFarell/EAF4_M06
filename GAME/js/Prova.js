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

let level1Scene = {
    create: function() {
        // Aquí s'afegiran els elements del primer nivell
    }
};
create: function() {
    // Carrega el mapa del primer nivell
    this.map = this.make.tilemap({ key: 'level1' });

    // Afegeix el conjunt de tiles al mapa
    let tileset = this.map.addTilesetImage('tileset', 'tiles');

    // Crea les capes de plataformes i col·lisions
    this.platformLayer = this.map.createStaticLayer('platforms', tileset, 0, 0);
    this.platformLayer.setCollisionByExclusion([-1]);
}

create: function() {
    // Creació del mapa i les plataformes (pas 2)

    // Crea el jugador
    this.player = this.physics.add.sprite(100, 450, 'player');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    // Configura la gravetat
    this.physics.world.gravity.y = 300;

    // Configura la col·lisió entre el jugador i les plataformes
    this.physics.add.collider(this.player, this.platformLayer);
}
create: function() {
    // Creació del mapa i les plataformes (pas 2)

    // Creació del jugador (pas 3)

    // Control del jugador
    this.cursors = this.input.keyboard.createCursorKeys();

    // Moure el jugador a l'esquerra i a la dreta
    if (this.cursors.left.isDown) {
        this.player.setVelocityX(-160);
    } else if (this.cursors.right.isDown) {
        this.player.setVelocityX(160);
    } else {
        this.player.setVelocityX(0);
    }

    // Salt del jugador
    if (this.cursors.up.isDown && this.player.body.onFloor()) {
        this.player.setVelocityY(-330);
    }
}
game.scene.add('level1', level1Scene);
game.scene.start('level1');

let level2Scene = {
    create: function() {
        // Aquí s'afegiran els elements del segon nivell
    }
};

create: function() {
    // Carrega el mapa del segon nivell
    this.map = this.make.tilemap({ key: 'level2' });

    // Afegeix el conjunt de tiles al mapa
    let tileset = this.map.addTilesetImage('tileset', 'tiles');

    // Crea les capes de plataformes i col·lisions
    this.platformLayer = this.map.createStaticLayer('platforms', tileset, 0, 0);
    this.platformLayer.setCollisionByExclusion([-1]);
}

create: function() {
    // Carrega el mapa i les plataformes del segon nivell (pas 2)

    // Crea el jugador
    this.player = this.physics.add.sprite(100, 450, 'player');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    // Configura la gravetat
    this.physics.world.gravity.y = 300;

    // Configura la col·lisió entre el jugador i les plataformes
    this.physics.add.collider(this.player, this.platformLayer);
}
game.scene.add('level2', level2Scene);

