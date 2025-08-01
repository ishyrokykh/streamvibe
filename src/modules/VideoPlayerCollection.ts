const rootSelector = '[data-js-video-player]';

type TPlayerEntities = 'root' | 'video' | 'playButton';
type TPlayerStates = 'isActive';

class VideoPlayer {
    readonly selectors: Record<TPlayerEntities, string> = {
        root: rootSelector,
        video: '[data-js-video-player-video]',
        playButton: '[data-js-video-player-play-button]',
    }

    readonly rootElement: HTMLElement;
    readonly videoElement: HTMLVideoElement;
    readonly playButtonElement: HTMLElement;

    readonly stateClasses: Record<TPlayerStates, string> = {
        isActive: 'is-active',
    }

    constructor(rootElement: HTMLElement) {
        this.rootElement = rootElement;
        this.videoElement = this.rootElement.querySelector(this.selectors.video);
        this.playButtonElement = this.rootElement.querySelector(this.selectors.playButton);
        this.bindEvents();
    }

    onPlayButtonClick = () => {
        this.videoElement.play();
        this.videoElement.requestFullscreen();
        this.videoElement.controls = true;
        this.playButtonElement.classList.remove(this.stateClasses.isActive);
    }

    onVideoPause = () => {
        this.videoElement.controls = false;
        this.playButtonElement.classList.add(this.stateClasses.isActive);
    }

    onVideoFullScreenChange = () => {
        const isFullScreenEnabled = document.fullscreenElement === this.videoElement;

        if (!isFullScreenEnabled) {
            this.videoElement.pause();
        }
    }

    bindEvents() {
        this.playButtonElement.addEventListener('click', this.onPlayButtonClick);
        this.videoElement.addEventListener('pause', this.onVideoPause);
        this.videoElement.addEventListener('fullscreenchange', this.onVideoFullScreenChange)
    }

}

class VideoPlayerCollection {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootSelector).forEach(element => {
            new VideoPlayer(element as HTMLElement);
        });
    }
}

export default VideoPlayerCollection;