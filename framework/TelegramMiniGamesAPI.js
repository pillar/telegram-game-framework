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

    // Telegram star pay
    requestPayment(amount, currency = 'USD') {
        return new Promise((resolve, reject) => {
            if (!this.payments) {
                reject(new Error('Payments are not available'));
                return;
            }

            this.payments.requestPayment({
                amount: amount,
                currency: currency,
                payload: 'game_purchase'
            }, (success, paymentResult) => {
                if (success) {
                    resolve(paymentResult);
                } else {
                    reject(new Error('Payment failed'));
                }
            });
        });
    }

    // connect the wallet
    connectWallet() {
        return new Promise((resolve, reject) => {
            if (!this.tg.connectWallet) {
                reject(new Error('Wallet connection is not available'));
                return;
            }

            this.tg.connectWallet((success, walletData) => {
                if (success) {
                    resolve(walletData);
                } else {
                    reject(new Error('Wallet connection failed'));
                }
            });
        });
    }

    // get the wallet info
    getWalletInfo() {
        return new Promise((resolve, reject) => {
            if (!this.tg.getWalletInfo) {
                reject(new Error('Wallet info is not available'));
                return;
            }

            this.tg.getWalletInfo((success, walletInfo) => {
                if (success) {
                    resolve(walletInfo);
                } else {
                    reject(new Error('Failed to get wallet info'));
                }
            });
        });
    }

    // start the trade
    sendTransaction(toAddress, amount, currency) {
        return new Promise((resolve, reject) => {
            if (!this.tg.sendTransaction) {
                reject(new Error('Transaction sending is not available'));
                return;
            }

            this.tg.sendTransaction({
                to: toAddress,
                amount: amount,
                currency: currency
            }, (success, transactionResult) => {
                if (success) {
                    resolve(transactionResult);
                } else {
                    reject(new Error('Transaction failed'));
                }
            });
        });
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
