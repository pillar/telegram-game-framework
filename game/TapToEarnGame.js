// author: claude and pillar@gz
// 2024.7.5

import Phaser from 'phaser';

class TapToEarnGame extends Phaser.Scene {
    constructor() {
        super('TapToEarnGame');
        this.score = 0;
        this.clickValue = 1;
        this.autoClickerValue = 0;
        this.autoClickerCost = 10;
    }

    preload() {
        this.load.image('coin', 'assets/coin.png');
        this.load.image('button', 'assets/button.png');
    }

    create() {
        // Add coin button
        this.coinButton = this.add.image(400, 300, 'coin').setInteractive();
        this.coinButton.on('pointerdown', this.onCoinClick, this);

        // Add score text
        this.scoreText = this.add.text(20, 20, 'Score: 0', { fontSize: '32px', fill: '#fff' });

        // Add auto-clicker button
        this.autoClickerButton = this.add.image(400, 500, 'button').setInteractive();
        this.autoClickerButton.on('pointerdown', this.buyAutoClicker, this);
        this.autoClickerText = this.add.text(350, 490, 'Buy Auto-Clicker (10)', { fontSize: '16px', fill: '#fff' });

        // Start auto-clicker timer
        this.time.addEvent({ delay: 1000, callback: this.autoClick, callbackScope: this, loop: true });
    }

    onCoinClick() {
        this.score += this.clickValue;
        this.updateScoreText();

        // Add a small animation on click
        this.tweens.add({
            targets: this.coinButton,
            scale: 1.1,
            duration: 100,
            yoyo: true
        });
    }

    buyAutoClicker() {
        if (this.score >= this.autoClickerCost) {
            this.score -= this.autoClickerCost;
            this.autoClickerValue++;
            this.autoClickerCost = Math.floor(this.autoClickerCost * 1.5);
            this.updateScoreText();
            this.autoClickerText.setText(`Buy Auto-Clicker (${this.autoClickerCost})`);
        }
    }

    autoClick() {
        this.score += this.autoClickerValue;
        this.updateScoreText();
    }

    updateScoreText() {
        this.scoreText.setText(`Score: ${this.score}`);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: TapToEarnGame
};

const game = new Phaser.Game(config);
