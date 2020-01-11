const VIDEO_PLAYER = document.querySelector(".work-process__video");
const PLAY_BUTTON = document.querySelector(".play-icon");
const CLICK_LISTENER = document.querySelector(".click-listener");

VIDEO_PLAYER.controls = false;

CLICK_LISTENER.onclick = (e) => {
    const isPaused = VIDEO_PLAYER.paused;
    if(isPaused) {
        if(e.target === PLAY_BUTTON) VIDEO_PLAYER.play();
        VIDEO_PLAYER.controls = true;
        PLAY_BUTTON.style.display = "none";
    } else {
        VIDEO_PLAYER.pause();
        VIDEO_PLAYER.controls = false;
        PLAY_BUTTON.style.display = "block";
    }
};
