import './Section.scss';
import {PropsWithChildren, ReactNode} from "react";
import classNames from "classnames";

type TSectionProps = PropsWithChildren & {
    className?: string;
    title?: string;
    titleId?: string;
    description?: string;
    actions?: ReactNode;
    hideActionsOnMobile?: boolean;
};

const Section = ({
     className,
     actions,
     description,
     titleId,
     title,
     children,
     hideActionsOnMobile
}: TSectionProps) => {
    return (
        <section
            className={classNames(className, 'section container')}
            aria-labelledby={titleId}
        >
            <header className="section__header">
                <div className="section__info">
                    <h2 className="section__title h3" id={titleId}>{title}</h2>
                    {!!description && <div className="section__description">
                        <p>{description}</p>
                    </div>}
                </div>
                {!!actions && <div
                    className={classNames("section__actions", {
                        "hidden-mobile": hideActionsOnMobile
                     })
                }>{actions}</div>}
            </header>
            <div className="section__body">
                {children}
            </div>
        </section>
    );
}

export default Section