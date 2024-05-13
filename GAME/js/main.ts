import { LoadScene } from "./Escenes/Load";
import { MenuScene } from "./Escenes/Menu";


let game = new Phaser.Game({
    width: 800,
    height: 600,
    scene: [
        LoadScene, MenuScene, PlayScene
    ],
    render: {
        pixelArt: true
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
});