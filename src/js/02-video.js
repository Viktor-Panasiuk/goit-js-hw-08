import Vimeo from '@vimeo/player';
import throttle  from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const iframeRef = document.querySelector('iframe');
const player = new Vimeo(iframeRef);

player.on('timeupdate', throttle(savePlayTime, 1000));
player.on('loaded', loadPlayTime);

function savePlayTime(data) { 
    localStorage.setItem(STORAGE_KEY, data.seconds);
}

function loadPlayTime() {
    const time = localStorage.getItem(STORAGE_KEY);
    if (time) {
        player.setCurrentTime(Number(time));
    };
}