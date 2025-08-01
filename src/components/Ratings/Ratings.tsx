import './Ratings.scss';
import classNames from 'classnames';
import RatingView from "@/components/RatingView";

type TRatingsProps = {
    items: { title: string; ratingValue: number }[];
    className?: string;
}

const Ratings = ({className, items}: TRatingsProps) => {
    return (
        <div className={classNames(className, 'ratings')}>
            <ul className="ratings__list">
                {items.map((item, index) => (
                    <li key={index} className="ratings__item">
                        <h4 className="ratings__title">{item.title}</h4>
                        <RatingView value={item.ratingValue} label={item.ratingValue} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Ratings