import './Specifications.scss';
import classNames from 'classnames';

type TSpecificationsProps = {
    items: {
        term: string,
        value: string
        isWide?: boolean
    }[];
}

const Specifications = ({items}: TSpecificationsProps) => {
    return (
        <div className='specifications'>
            <dl className="specifications__list">
                {items.map((item, index) => (
                    <div key={index} className={classNames('specifications__item', {
                        "specifications__item--wide": item.isWide,
                })}>
                        <dt className="specifications__key">{item.term}</dt>
                        <dd className="specifications__value">{item.value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}

export default Specifications