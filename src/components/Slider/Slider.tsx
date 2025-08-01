import 'swiper/css';
import './Slider.scss';
import {Children, PropsWithChildren} from "react";
import SliderNavigation from "./components/SliderNavigation";
import {SwiperProps} from "swiper/swiper-react";
import classNames from "classnames";

type TSliderProps = {
    navigationTargetElementId?: string,
    sliderProps?: SwiperProps;
    isEdgeBeyondTheViewportOnMobile?: boolean;
    hasScrollbarOnMobile?: boolean;
    navigationPosition?: "" | "abs-bottom";
    isNavigationHiddenMobile?: boolean;
    navigationMode?: "" | "tile" | "rounded";
    navigationJustifyContent?: "" | "space-between";
};

const defaultSliderParams: SwiperProps = {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20
        },
        481: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20
        },
        1024: {
            allowTouchMove: false,
            spaceBetween: 20,
        },
        1441: {
            allowTouchMove: false,
            spaceBetween: 30
        },
    }
};


const Slider = ({navigationJustifyContent = "", navigationMode, isNavigationHiddenMobile = true, children,hasScrollbarOnMobile = true, navigationPosition = "", sliderProps = defaultSliderParams, isEdgeBeyondTheViewportOnMobile, navigationTargetElementId}: TSliderProps & PropsWithChildren) => {
    return (
        <div className={classNames('slider', {
            'slider--beyond-the-viewport': isEdgeBeyondTheViewportOnMobile
        })} data-js-slider={JSON.stringify({
            sliderProps,
            navigationTargetElementId,
        })}>
            <div className="slider__swiper swiper" data-js-slider-swiper="">
                <ul className="slider__list swiper-wrapper">
                    {Children.toArray(children).map((slide, index) => (
                        <li className="slider__item swiper-slide" key={index}>
                            {slide}
                        </li>
                    )) }
                </ul>
            </div>

            {!navigationTargetElementId && (
                <SliderNavigation justifyContent={navigationJustifyContent} mode={navigationMode} className="slider__navigation" isHiddenMobile={isNavigationHiddenMobile} position={navigationPosition} />
            )}

            {hasScrollbarOnMobile && <div className="slider__scrollbar visible-mobile" data-js-slider-scrollbar="" />}
        </div>
    );
}

export default Slider