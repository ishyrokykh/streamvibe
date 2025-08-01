import './Accordion.scss';
import {PropsWithChildren} from "react";
import classNames from "classnames";
import Icon from "@/components/Icon";

type TAccordionProps = {
    title: string;
    id: string;
    name: string;
    isOpen?: boolean;
    titleLevelClassName?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    subtitle?: string;
    hasArrowButton?: boolean;
}

const Accordion = ({
    title,
    id,
    name,
    isOpen,
   children,
   titleLevelClassName = 'h5',
   subtitle,
   hasArrowButton = false,
}: TAccordionProps & PropsWithChildren) => {
    return (
        <div className='accordion'>
            <details
                className="accordion__details"
                name={name}
                open={isOpen}
            >
                <summary className="accordion__summary">
                    <h3 className={classNames("accordion__title", titleLevelClassName)}>
                        <span role="term" aria-details={id}>{title}</span>
                        {subtitle && <span className="accordion__subtitle">{subtitle}</span>}
                        {hasArrowButton && <div className="accordion__arrow">
                            <Icon iconId="arrow-down" />
                        </div>}
                    </h3>
                </summary>
            </details>
            <div className="accordion__content" id={id} role="definition">
                <div className="accordion__content-inner">
                    <div className="accordion__content-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion