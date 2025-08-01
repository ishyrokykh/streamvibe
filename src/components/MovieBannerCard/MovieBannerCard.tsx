import './MovieBannerCard.scss';
import {Image} from "minista";
import Button from "@/components/Button";
import classNames from "classnames";

type TMovieBannerCardProps = {
    title: string;
    description: string;
    imgSrc: string;
    TitleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    titleId?: string;
    isSmallPaddingY?: boolean;
}

const MovieBannerCard = ({title, isSmallPaddingY = false, titleId, TitleTag = 'h2', imgSrc, description}: TMovieBannerCardProps) => {
    return (
        <div className='movie-banner-card'>
            <Image className='movie-banner-card__image' src={imgSrc} />
            <div className={classNames("movie-banner-card__inner", {
                'movie-banner-card__inner--small-padding-y': isSmallPaddingY,
            })}>
                <div className="movie-banner-card__body">
                    <TitleTag className="movie-banner-card__title h3" id={titleId}>
                        {title}
                    </TitleTag>
                    <div className="movie-banner-card__description hidden-mobile">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="movie-banner-card__footer">
                    <Button
                        iconBeforeFill
                        className="movie-banner-card__play-button"
                        iconBefore="play"
                        label="Play Now"
                        isLabelHidden={false}
                    />
                    <div className="movie-banner-card__actions">
                        <Button iconBefore="plus" mode='black-06' label="Add to playlist" />
                        <Button iconBefore="like" mode='black-06' label="Like" />
                        <Button iconBefore="volume" mode='black-06' label="Mute" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieBannerCard