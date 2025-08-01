import './SliderNavigation.scss';
import classNames from "classnames";
import Button from "@/components/Button";

type TSliderNavigationProps = {
   withPagination?: boolean;
   className?: string;
   id?: string;
   mode?: "" | "tile" | 'rounded';
   buttonMode?: 'black-10' | 'black-08';
   position?: "" | 'abs-bottom';
   isHiddenMobile?: boolean;
   justifyContent?: '' | 'space-between';
}

const SliderNavigation = ({justifyContent = '', isHiddenMobile, buttonMode = 'black-10', withPagination = true, id, className, position = "", mode = ""}: TSliderNavigationProps) => {
    return (
        <div id={id} className={classNames(
            className,
            'slider-navigation',
            {
                [`slider-navigation--${mode}`]: mode,
                [`slider-navigation--${position}`]: position,
                [`slider-navigation--${justifyContent}`]: justifyContent,
                'hidden-mobile': isHiddenMobile
            }
        )} data-js-slider-navigation="">
            <Button
                className={classNames(
                    "slider-navigation__arrow-button",
                    "slider-navigation__arrow-button--previous",
                )}
                mode={buttonMode}
                iconBefore='arrow-left'
                label="Previous slide"
                isLabelHidden
                data-js-slider-previous-button=""
            />
            {withPagination && <div data-js-slider-pagination="" className="slider-navigation__pagination" /> }
            <Button
                className={classNames(
                    "slider-navigation__arrow-button",
                    "slider-navigation__arrow-button--next",
                )}
                mode={buttonMode}
                iconBefore='arrow-right'
                label="Next slide"
                isLabelHidden
                data-js-slider-next-button=""
            />
        </div>
    );
}

export default SliderNavigation