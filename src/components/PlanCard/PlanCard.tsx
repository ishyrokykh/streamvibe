import './PlanCard.scss';
import classNames from 'classnames';
import Button from "@/components/Button";

type TPlanCardProps = {
    title: string;
    description: string;
    price: string;
    period: string;
}

const PlanCard = ({title, price, period, description}: TPlanCardProps) => {
    return (
        <div className="plan-card">
            <div className="plan-card__info">
                <h3 className="plan-card__title h4">{title}</h3>
                <div className="plan-card__description">
                    <p>{description}</p>
                </div>
            </div>
            <div className="plan-card__conditions">
                <span className="plan-card__price">{price}</span>
                <span className="plan-card__period">{period}</span>
            </div>
            <div className="plan-card__actions">
                <Button as="a" mode="black-08" isLabelHidden={false} label="Start Free Trial" href="/subscribtions" />
                <Button as="a" isLabelHidden={false} label="Choose Plan" href="/subscribtions" />
            </div>
        </div>
    );
}

export default PlanCard