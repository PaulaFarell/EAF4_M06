const loader = (game) => {

    var progressBar = game.add.graphics();
    var width = game.cameras.main.width;
    var height = game.cameras.main.height;

    var loadingText = game.make.text({
        x: width / 2,
        y: height / 2 - 50,
        text: 'Loading...',
        style: {
            font: '20px monospace',
            fill: '#ffffff'
        }
    });
    loadingText.setOrigin(0.5, 0.5);
    
    var percentText = game.make.text({
        x: width / 2,
        y: height / 2 - 5,
        text: '0%',
        style: {
            font: '18px monospace',
            fill: '#ffffff'
        }
    });
    percentText.setOrigin(0.5, 0.5);
    
    var assetText = game.make.text({
        x: width / 2,
        y: height / 2 + 50,
        text: '',
        style: {
            font: '18px monospace',
            fill: '#ffffff'
        }
    });
    assetText.setOrigin(0.5, 0.5);
    
    game.load.on('progress', function (value) {
        percentText.setText(parseInt(value * 100) + '%');
        progressBar.clear();
        progressBar.fillStyle(0xffffff, 1);
        progressBar.fillRect(width, height, 300 * value, 30);
    });
    
    game.load.on('fileprogress', function (file) {
        assetText.setText('Loading asset: ' + file.key);
    });
    game.load.on('complete', function () {
        progressBar.destroy();
        loadingText.destroy();
        percentText.destroy();
        assetText.destroy();
    });
}

export default loader