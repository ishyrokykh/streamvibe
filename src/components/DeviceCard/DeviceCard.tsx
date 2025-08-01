import './DeviceCard.scss';
import classNames from 'classnames';

export type TDeviceCardProps = {
    title: string;
    description: string;
    imgSrc: string;
}

const DeviceCard = ({title, description, imgSrc}: TDeviceCardProps) => {
    return (
        <div className='device-card'>
            <header className="device-card__header">
                <div className="device-card__image-wrapper">
                    <img className="device-card__image" loading="lazy" height={40} width={40} src={imgSrc} alt=""/>
                </div>
                <h3 className="device-card__title h4">{title}</h3>
            </header>
            <div className="device-card__description">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default DeviceCard