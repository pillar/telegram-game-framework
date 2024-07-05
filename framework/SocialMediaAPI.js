// author: claude and pillar@gz
// 2024.7.5

class SocialMediaAPI {
    constructor() {
        this.telegramMiniGamesAPI = new TelegramMiniGamesAPI();
    }

    // Twitter
    shareTwitter(message, url) {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`;
        window.open(twitterUrl, '_blank');
    }

    followTwitter(username) {
        window.open(`https://twitter.com/intent/follow?screen_name=${username}`, '_blank');
    }

    // Facebook
    shareFacebook(url) {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        window.open(facebookUrl, '_blank');
    }

    // Discord
    joinDiscord(inviteCode) {
        window.open(`https://discord.gg/${inviteCode}`, '_blank');
    }

    // Telegram
    shareTelegram(url) {
        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}`, '_blank');
    }

    joinTelegramChannel(username) {
        window.open(`https://t.me/${username}`, '_blank');
    }

    // YouTube
    subscribeYouTube(channelId) {
        window.open(`https://www.youtube.com/channel/${channelId}?sub_confirmation=1`, '_blank');
    }

    // Twitch
    followTwitch(username) {
        window.open(`https://www.twitch.tv/${username}`, '_blank');
    }

    // Instagram
    followInstagram(username) {
        window.open(`https://www.instagram.com/${username}/`, '_blank');
    }

    // Generic share function
    share(platform, data) {
        switch(platform) {
            case 'twitter':
                this.shareTwitter(data.message, data.url);
                break;
            case 'facebook':
                this.shareFacebook(data.url);
                break;
            case 'telegram':
                this.shareTelegram(data.url);
                break;
            default:
                console.error('Unsupported platform');
        }
    }

    // Generic follow/join function
    followOrJoin(platform, data) {
        switch(platform) {
            case 'twitter':
                this.followTwitter(data.username);
                break;
            case 'discord':
                this.joinDiscord(data.inviteCode);
                break;
            case 'telegram':
                this.joinTelegramChannel(data.username);
                break;
            case 'youtube':
                this.subscribeYouTube(data.channelId);
                break;
            case 'twitch':
                this.followTwitch(data.username);
                break;
            case 'instagram':
                this.followInstagram(data.username);
                break;
            default:
                console.error('Unsupported platform');
        }
    }

    // Telegram Mini Games specific functions
    initGame() {
        this.telegramMiniGamesAPI.initGame();
    }

    setScore(score) {
        this.telegramMiniGamesAPI.setScore(score);
    }

    getScore() {
        return this.telegramMiniGamesAPI.getScore();
    }

    shareGame() {
        this.telegramMiniGamesAPI.shareGame();
    }
}

// Usage example
const socialAPI = new SocialMediaAPI();

// Initialize Telegram Mini Game
socialAPI.initGame();

// Share on Twitter
socialAPI.share('twitter', {
    message: 'Check out this awesome game!',
    url: 'https://t.me/yourgamebot'
});

// Join Discord server
// socialAPI.followOrJoin('discord', { inviteCode: 'your-discord-invite-code' });

// Subscribe to YouTube channel
// socialAPI.followOrJoin('youtube', { channelId: 'your-youtube-channel-id' });

// Set score in Telegram Mini Game
// socialAPI.setScore(1000);

// Share Telegram Mini Game
// socialAPI.shareGame();
