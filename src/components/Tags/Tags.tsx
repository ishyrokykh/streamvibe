import './Tags.scss';
import classNames from 'classnames';

type TTagsProps = {
    items: string[];
    className?: string;
}

const Tags = ({className, items}: TTagsProps) => {
    return (
        <div className={classNames(className, 'tags')}>
            <ul className="tags__list">
                {items.map((item, index) => (
                    <li key={index} className="tags__item">{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Tags