import './Grid.scss';
import classNames from 'classnames';
import {Children, PropsWithChildren} from "react";

type TGridProps = {
    columns?: number;
}

const Grid = ({columns = 1, children}: TGridProps & PropsWithChildren) => {
    return (
        <ul className={classNames('grid', {
            [`grid--${columns}`]: columns > 1,
        })}>
            {Children.toArray(children).map((child, index) => (
                <li className="grid__item" key={index}>
                    {child}
                </li>
            ))}
        </ul>
    );
}

export default Grid