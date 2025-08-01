import getParams from "@/utils/getParams";
import pxToRem from "@/utils/pxToRem";
import BaseComponent from "@/modules/generic/BaseComponent";

const rootSelector = '[data-js-tabs]' as const;

type TTabsEntities = 'root' | 'navigation' | 'button' | 'content';
type TTabsStates = 'isActive';
type TTabsCSSVariables = 'activeButtonWidth' | 'activeButtonOffsetLeft';

type TTabsState = {
    activeTabIndex: number;
};

class Tabs extends BaseComponent<TTabsState> {
    readonly rootElement: HTMLElement | null;
    readonly navigationElement: HTMLElement | null;
    readonly params: {
        navigationTargetElementId?: null | string;
    }
    readonly buttonElements: HTMLElement[];
    readonly contentElements: HTMLElement[];

    readonly selectors: Record<TTabsEntities, string> = {
        root: rootSelector,
        navigation: '[data-js-tabs-navigation]',
        button: '[data-js-tabs-button]',
        content: '[data-js-tabs-content]',
    };
    readonly state: TTabsState;
    readonly limitTabsIndex: number;

    readonly stateClasses: Record<TTabsStates, string> = {
        isActive: 'is-active'
    }

    readonly stateCSSVariables:  Record<TTabsCSSVariables, string> = {
        activeButtonWidth: '--tabsNavigationActiveButtonWidth',
        activeButtonOffsetLeft: '--tabsNavigationActiveButtonOffsetLeft'
    }

    constructor(rootElement: HTMLElement) {
        super();
        this.rootElement = rootElement;
        this.params = getParams(this.rootElement, this.selectors.root);
        this.navigationElement = this.params.navigationTargetElementId ?
            document.getElementById(this.params.navigationTargetElementId) :
            this.rootElement.querySelector(this.selectors.navigation);

        this.buttonElements = [...this.navigationElement.querySelectorAll(this.selectors.button)] as HTMLElement[];
        this.contentElements = [...this.rootElement.querySelectorAll(this.selectors.content)] as HTMLElement[];

        this.state = this.getProxyState({
            activeTabIndex: this.buttonElements.findIndex(buttonElement => buttonElement.ariaSelected),
        });
        this.limitTabsIndex = this.buttonElements.length - 1;
        this.bindEvents();
        setTimeout(this.bindObservers, 500);
    }

    updateNavigationCSSVars(activeButtonElement: HTMLElement = this.buttonElements[this.state.activeTabIndex]) {
        const {width, left} = activeButtonElement.getBoundingClientRect();
        const offsetLeft = left - this.navigationElement.getBoundingClientRect().left;

        this.navigationElement.style.setProperty(
            this.stateCSSVariables.activeButtonWidth,
            `${pxToRem(width)}rem`
        );
        this.navigationElement.style.setProperty(
            this.stateCSSVariables.activeButtonOffsetLeft,
            `${pxToRem(offsetLeft)}rem`
        );
    }

    updateUI() {
        const {activeTabIndex} = this.state;

        this.buttonElements.forEach((buttonElement, index) => {
           const isActive = index === activeTabIndex;

           buttonElement.classList.toggle(
               this.stateClasses.isActive, isActive
           );
           buttonElement.ariaSelected = `${isActive}`;
           buttonElement.tabIndex = isActive ? 0 : -1;

           if (isActive) {
               this.updateNavigationCSSVars(buttonElement);
           }
        });

        this.contentElements.forEach((contentElement, index) => {
            const isActive = index === activeTabIndex;

            contentElement.classList.toggle(
                this.stateClasses.isActive, isActive
            );
        });
    }

    activateTab(newTabIndex: number) {
        this.state.activeTabIndex = newTabIndex;
        this.buttonElements[newTabIndex].focus();
    }

    previousTab = () => {
        const newTabIndex = this.state.activeTabIndex === 0
            ? this.limitTabsIndex : this.state.activeTabIndex - 1;

        this.activateTab(newTabIndex);
    }

    nextTab = () => {
        const newTabIndex = this.state.activeTabIndex === this.limitTabsIndex
            ? 0 : this.state.activeTabIndex + 1;

        this.activateTab(newTabIndex);
    }

    firstTab = () => {
        this.activateTab(0);
    }

    lastTab = () => {
        this.activateTab(this.limitTabsIndex);
    }

    onButtonClick(newActiveTabIndex: number) {
        this.state.activeTabIndex = newActiveTabIndex;
    }

    onKeyDown = (event: KeyboardEvent) => {
        const {target, code, metaKey} = event;

        const isTabsContentFocused = this.contentElements.some(
            (contentElement) => contentElement === target
        );
        const isTabsButtonFocused = this.buttonElements.some(
            (buttonElement) => buttonElement === target
        );

        if (!isTabsButtonFocused && !isTabsContentFocused) {
            return;
        }

        const action = {
            ArrowLeft: this.previousTab,
            ArrowRight: this.nextTab,
            Home: this.firstTab,
            End: this.lastTab
        }[code];

        const isMacHomeKey = metaKey && code === 'ArrowLeft';

        if (isMacHomeKey) {
            event.preventDefault();
            this.firstTab();
            return;
        }

        const isMacEndKey = metaKey && code === 'ArrowRight';

        if (isMacEndKey) {
            event.preventDefault();
            this.lastTab();
            return;
        }

        if (action) {
            event.preventDefault();
            action();
        }
    }

    bindEvents() {
        this.buttonElements.forEach((buttonElement, index) => {
            buttonElement.addEventListener('click', () => {
                this.onButtonClick(index);
            });
        });
        document.addEventListener('keydown', this.onKeyDown)
    }

    onResize = () => {
        this.updateNavigationCSSVars();
    }

    bindObservers = () => {
        const resizeObserver = new ResizeObserver(this.onResize);

        resizeObserver.observe(this.navigationElement);
    }
}

class TabsCollection {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((el) => {
           new Tabs(el as HTMLElement);
        });
    }
}

export default TabsCollection;