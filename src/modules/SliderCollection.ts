import getParams from "@/utils/getParams";
import {SwiperProps} from "swiper/swiper-react";
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

const rootSliderSelector = 'root' as const;

type TSliderEntities = typeof rootSliderSelector
    | 'swiper' | 'navigation' | "previousButton" | "nextButton" | "pagination" | "scrollbar";

const globalSelectors: Record<typeof rootSliderSelector, string> = {
    root: '[data-js-slider]'
};



class Slider {
    readonly sliderSelectors: Record<TSliderEntities, string> = {
        root: globalSelectors.root,
        swiper: '[data-js-slider-swiper]',
        navigation: '[data-js-slider-navigation]',
        previousButton: '[data-js-slider-previous-button]',
        nextButton: '[data-js-slider-next-button]',
        pagination: '[data-js-slider-pagination]',
        scrollbar: '[data-js-slider-scrollbar]'
    };
    readonly rootElement: HTMLElement;
    readonly swiperElement: HTMLElement;
    readonly params: {
        navigationTargetElementId?: string,
        sliderProps?: SwiperProps;
    };
    readonly navigationElement: HTMLElement;
    readonly previousButtonElement: HTMLElement;
    readonly nextButtonElement: HTMLElement;
    readonly paginationElement: HTMLElement;
    readonly scrollbarElement: HTMLElement;

    constructor(sliderRoot: HTMLElement) {
        this.rootElement = sliderRoot;
        this.swiperElement = this.rootElement.querySelector(this.sliderSelectors.swiper);
        this.params = getParams(this.rootElement, this.sliderSelectors.root);
        this.navigationElement = this.params.navigationTargetElementId ?
            document.getElementById(this.params.navigationTargetElementId as string) :
            this.rootElement.querySelector(this.sliderSelectors.navigation);
        this.previousButtonElement = this.navigationElement.querySelector(this.sliderSelectors.previousButton);
        this.nextButtonElement = this.navigationElement.querySelector(this.sliderSelectors.nextButton);
        this.paginationElement = this.navigationElement.querySelector(this.sliderSelectors.pagination);
        this.scrollbarElement = this.rootElement.querySelector(this.sliderSelectors.scrollbar);
        this.init();
    }

    private init() {
        new Swiper(this.swiperElement, {
           ...this.params.sliderProps,
            modules: [Navigation, Pagination, Scrollbar],
            navigation: {
                prevEl: this.previousButtonElement,
                nextEl: this.nextButtonElement,
            },
            pagination: {
                el: this.paginationElement,
                bulletClass: 'slider-navigation__pagination-bullet',
                bulletActiveClass: 'is-active',
            },
            scrollbar: {
                el: this.scrollbarElement,
                dragClass: 'slider__scrollbar-drag'
            }
        })
    }
}

class SliderCollection {
    constructor() {
        this.init();
    }

    private init() {
        document.querySelectorAll(globalSelectors.root).forEach(sliderRoot => {
            new Slider(sliderRoot as HTMLElement);
        });
    }
}

export default SliderCollection;