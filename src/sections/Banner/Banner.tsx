import './Banner.scss';
import Button from "@/components/Button";

const Banner = () => {
    const titleId = 'banner-title';

    return (
        <div className='banner container' aria-labelledby={titleId}>
            <div className="banner__inner">
                <div className="banner__body">
                    <h2 className="banner__title" id={titleId}>Start your free trial today!</h2>
                    <div className="banner__description">
                        <p>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
                    </div>
                </div>
                <Button className="banner__button" isLabelHidden={false} label="Start a Free Trail" as="a" href="/subscribtions" />
            </div>
        </div>
    );
}

export default Banner