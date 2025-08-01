import './RatingView.scss';
import starsUnfilledImgSrc from '@/assets/images/rating/stars_unfilled.svg';
import starsFilledImgSrc from '@/assets/images/rating/stars_filled.svg';

type TRatingViewProps = {
    value?: number;
    label?: string | number;
}

const RatingView = ({value = 5, label}: TRatingViewProps) => {
    const ariaLabel = `Rating: ${value} stars`;


    return (
        <div className='rating-view' aria-label={ariaLabel} title={ariaLabel} style={{
            // @ts-ignore
            '--ratingViewValue': value,
        }}>
            <div className="rating-view__stars">
                <img src={starsUnfilledImgSrc} width={98} height={18} alt="" className="rating-view__stars-unfilled" />
                <img src={starsFilledImgSrc} width={98} height={18} alt="" className="rating-view__stars-filled" />
            </div>
            {label && (
                <div className="rating-view__label">{label}</div>
            )}
        </div>
    );
}

export default RatingView