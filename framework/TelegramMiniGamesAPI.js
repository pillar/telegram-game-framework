// https://telegram.org/js/games.js
// author: claude and pillar@gz
// 2024.7.5

class TelegramMiniGamesAPI {
    constructor() {
        this.tg = window.Telegram.WebApp;
    }

    // init game
    initGame() {
        this.tg.ready();
        this.tg.expand();
    }

    // get the player data
    getPlayerData() {
        return this.tg.initDataUnsafe.user;
    }

    // set player score
    setScore(score) {
        this.tg.CloudStorage.setItem('score', score.toString());
    }

    // get player score
    async getScore() {
        const score = await this.tg.CloudStorage.getItem('score');
        return parseInt(score) || 0;
    }

    // share the game
    shareGame() {
        this.tg.shareGame();
    }

    // show the alert window
    showAlert(message) {
        this.tg.showAlert(message);
    }

    // show the confirm window
    showConfirm(message) {
        return new Promise((resolve) => {
            this.tg.showConfirm(message, (confirmed) => {
                resolve(confirmed);
            });
        });
    }

    // close the game
    closeGame() {
        this.tg.close();
    }

    // shet the back button action handler
    setBackButtonAction(callback) {
        this.tg.BackButton.onClick(callback);
    }

    // send the data to the bot
    sendDataToBot(data) {
        this.tg.sendData(JSON.stringify(data));
    }

    // set the theme color
    setHeaderColor(color) {
        this.tg.setHeaderColor(color);
    }

    // set the background color
    setBackgroundColor(color) {
        this.tg.setBackgroundColor(color);
    }
}

// example
// const telegramApi = new TelegramMiniGamesAPI();

// init game
// telegramApi.initGame();

// get the player data
// const playerData = telegramApi.getPlayerData();
// console.log('Player:', playerData);

// set the score
// telegramApi.setScore(1000);

// get the scorte
// telegramApi.getScore().then(score => {
//    console.log('Current score:', score);
// });

// share the game
// document.getElementById('shareButton').addEventListener('click', () => {
//    telegramApi.shareGame();
// });

// show alert
// telegramApi.showAlert('Welcome to the game!');

// show the confirm
// telegramApi.showConfirm('Are you sure you want to restart?').then(confirmed => {
//    if (confirmed) {
        // restart the game to do
//    }
// });

// back button
// telegramApi.setBackButtonAction(() => {
    // what to do
// });

// send data to the bot
// telegramApi.sendDataToBot({ action: 'gameCompleted', score: 1000 });

// set the theme color
// telegramApi.setHeaderColor('#FFFFFF');

// set the background color
// telegramApi.setBackgroundColor('#000000');
