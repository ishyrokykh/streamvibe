import './Icon.scss';
import {Icon as MinistaIcon} from 'minista';
import classNames from 'classnames';
import {ComponentProps, JSX} from "react";

type TIconProps = Pick<JSX.IntrinsicElements["span"], 'className'>
    & Pick<ComponentProps<typeof MinistaIcon>, 'iconId'>
    & {withFill?: boolean, ariaLabel?: string};

const Icon = ({className, ariaLabel, iconId, withFill = false}: TIconProps ) => {
    return (
        <span className={classNames(className, 'icon')} aria-label={ariaLabel}>
            <MinistaIcon
                iconId={iconId}
                fill={withFill ? 'currentColor' : 'none'}
                stroke={withFill ? 'none' : 'currentColor'}
            />
        </span>
    );
}

export default Icon