import './EpisodeCard.scss';
import classNames from 'classnames';
import Icon from "@/components/Icon";

type TEpisodeCardProps = {
    order: string;
    title: string;
    description: string;
    duration: string;
    video: {
        poster: string;
        src: string;
    }
}

const EpisodeCard = ({order, title, description, duration, video}: TEpisodeCardProps) => {
    const playButtonTitle = 'Play Video';

    return (
        <div className='episode-card'>
            <div className="episode-card__number">
                {order}
            </div>
            <div className="episode-card__player" data-js-video-player="">
                <video data-js-video-player-video="" className="episode-card__video" poster={video.poster} width={172} height={118} src={video.src} />
                <button data-js-video-player-play-button="" type="button" className="episode-card__play-button is-active" aria-label={playButtonTitle} title={playButtonTitle}>
                    <Icon className="episode-card__play-button-icon" iconId="play-circle" />
                </button>
            </div>
            <div className="episode-card__body">
                <div className="episode-card__info">
                    <h4 className="episode-card__title h6">{title}</h4>
                    <div className="episode-card__duration">
                        <Icon iconId="clock_stroke" ariaLabel="Duration" />
                        <span>{duration}</span>
                    </div>
                </div>
                <div className="episode-card__description hidden-mobile">
                    <p>{description}</p>
                </div>
            </div>

        </div>
    );
}

export default EpisodeCard