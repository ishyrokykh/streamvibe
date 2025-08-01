import './MovieCard.scss';
import classNames from 'classnames';
import {Image} from "minista";
import Badge from "@/components/Badge";
import RatingView from "@/components/RatingView";

type TMovieCardProps = {
    title: string;
    imgSrc: string;
    duration?: string;
    views?: string;
    href?: string;
    className?: string;
    released?: {
        label: string;
        dateTime: string;
    };
    rating?: {
        value: number;
        label: string;
    };
    season?: string;
}

const MovieCard = ({season, title, rating, released, imgSrc, views, duration, href = "/movie", className}: TMovieCardProps) => {
    return (
        <a className="movie-card" href={href} title={title}>
            <h3 className="visually-hidden">{title}</h3>
            <Image className="movie-card__image" src={imgSrc} />
            <div className="movie-card__body">
                {duration && <Badge
                    iconName="clock"
                    iconAriaLabel="Duration"
                    iconFill
                >{duration}</Badge>}
                {season && <Badge
                    iconName="catalog"
                    iconAriaLabel="Season"
                    iconFill
                >{season}</Badge>}
                {rating && <Badge className="movie-card__rating-badge">
                    <RatingView value={rating.value} label={rating.label} />
                </Badge> }
                {views && <Badge
                    iconName="eye"
                    iconAriaLabel="Views"
                    iconFill
                >{views}</Badge>}
                {released && <Badge className="movie-card__released-badge">
                    Released at <time className="movie-card__released-badge-label" dateTime={released.dateTime}>{released.label}</time>
                </Badge> }
            </div>
        </a>
    );
}

export default MovieCard