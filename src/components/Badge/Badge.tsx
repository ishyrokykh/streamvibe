import './Badge.scss';
import classNames from 'classnames';
import {PropsWithChildren} from "react";
import Icon from "@/components/Icon";

type TBadgeProps = {
    isBig?: boolean;
    mode?: '' | 'accent';
    className?: string;
    iconName?: string;
    iconAriaLabel?: string;
    iconFill?: boolean;
} & PropsWithChildren;

const Badge = ({iconName, iconFill, iconAriaLabel, className, mode = "", isBig = false, children}: TBadgeProps) => {
    return (
        <div className={classNames(className, 'badge', {
            [`badge--${mode}`]: mode,
            [`badge--big`]: isBig,
        })}>
            {iconName && <Icon className="badge__icon" ariaLabel={iconAriaLabel} withFill={iconFill} iconId={iconName}/>}
            <span>{children}</span>
        </div>
    );
}

export default Badge