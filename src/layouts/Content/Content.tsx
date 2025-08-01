import './Content.scss';
import {PropsWithChildren} from "react";
import classNames from "classnames";

type TContentProps = PropsWithChildren & {
    isResetPaddingTop?: boolean;
}

const Content = ({children, isResetPaddingTop = false}: TContentProps) => {
    return <main className={classNames("content", {
        'content--reset-padding-top': isResetPaddingTop,
    })}>{children}</main>
}

export default Content;