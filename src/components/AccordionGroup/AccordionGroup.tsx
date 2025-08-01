import './AccordionGroup.scss';
import classNames from 'classnames';
import {Children, JSX, PropsWithChildren} from "react";

type TAccordionGroupProps = {
    columns?: number;
    isOrderedList?: boolean;
    mode?: "" | "dark";
    className?: string;
}

const AccordionGroup = ({mode = "", className, columns = 1, isOrderedList = true, children}: TAccordionGroupProps & PropsWithChildren) => {

    const ListTag = isOrderedList ? 'ol' : 'ul' ;

    const childrenArray = Children.toArray(children);
    const itemsPerColumn = Math.ceil(childrenArray.length / columns);
    return (
        <ListTag className={classNames(className, 'accordion-group', {
            [`accordion-group--${columns}-columns`]: columns > 1,
            'accordion-group--has-counter': isOrderedList,
            [`accordion-group--mode-${mode}`]: mode
        })}>
            {childrenArray.map((child, index) => (
                <li className={classNames("accordion-group__item", {
                    'accordion-group__item--last-column-item': columns > 1 && (index + 1) % itemsPerColumn === 0
                })} key={index}>
                    {child}
                </li>
            ))}
        </ListTag>
    );
}

export default AccordionGroup