import './Button.scss';
import {JSX, Children} from 'react';
import classNames from "classnames";
import Icon from "@/components/Icon";

type TPossibleButtonElements = Extract<keyof JSX.IntrinsicElements, 'a' | 'button'>;

type TButtonProps<T extends TPossibleButtonElements> = {
    as?: T;
    label?: string;
    isLabelHidden?: boolean;
} & Omit<JSX.IntrinsicElements[T], 'is'> & {
    iconBefore?: string;
    iconAfter?: string;
    iconBeforeFill?: boolean;
    iconAfterFill?: boolean;
    mode?: "" | "transparent" | "black-10" | "black-08" | "black-06";
};

const Button = <T extends TPossibleButtonElements = 'button'>(
    {
        as,
        type = "button",
        className,
        children,
        label,
        mode = "",
        ["aria-label"]: ariaLabel = label,
        title = label,
        iconBefore,
        iconAfter,
        isLabelHidden = true,
        iconBeforeFill,
        iconAfterFill,
        ...rest
    }: TButtonProps<T>
) => {
    const ButtonComponent = as || 'button';

    return (
        // @ts-expect-error
        <ButtonComponent
            className={classNames(className, 'button', {
                [`button--${mode}`]: mode,
            })}
            type={type}
            aria-label={ariaLabel}
            title={title}
            {...rest}
        >
            {Children.count(children) ? children :
                <>
                    {iconBefore && <Icon className="button__icon" withFill={iconBeforeFill} iconId={iconBefore}/>}
                    {!isLabelHidden && <span className="button__label">{label}</span>}
                    {iconAfter && <Icon className="button__icon" withFill={iconAfterFill} iconId={iconAfter}/>}
                </>
            }
        </ButtonComponent>
    );
}

export default Button