import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player'); 
const player = new Player(iframe);


player.on('timeupdate', throttle(timeTracking, 1000));

if (localStorage.length === 0) {
  localStorage.setItem('videoplayer-current-time', 0);
}

function timeTracking (evt) {
let currentTime = evt.seconds;
localStorage.setItem("videoplayer-current-time", currentTime);
   
}
const localSaveTime = localStorage.getItem("videoplayer-current-time")
player.setCurrentTime(localSaveTime);


