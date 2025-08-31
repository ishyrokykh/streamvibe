import BaseComponent from "@/modules/generic/BaseComponent";
import MatchMedia from "@/constants/MatchMedia";

const rootSelector = '[data-js-select]';

type TSelectEntities = 'originalControl' | 'button' | "dropdown" | 'option';

type TSelectState = {
    isExpanded: boolean,
    currentOptionIndex: null | number,
    selectedOptionElement: null | Element,
}

type TSelectStates = 'isExpanded' | 'isSelected' | 'isCurrent' | 'isOnTheLeftSide' | 'isOnTheRightSide';

export class Select extends BaseComponent<TSelectState> {
    readonly selectors: Record<TSelectEntities, string> = {
        originalControl: '[data-js-select-original-control]',
        button: '[data-js-select-button]',
        dropdown: '[data-js-select-dropdown]',
        option: '[data-js-select-option]'
    }

    readonly a11yAttributes = { activeDescendant: 'aria-activedescendant' } as const;

    readonly stateClasses: Record<TSelectStates, string> = {
        isExpanded: 'is-expanded',
        isSelected: 'is-selected',
        isCurrent: 'is-current',
        isOnTheLeftSide: 'is-on-the-left-side',
        isOnTheRightSide: 'is-on-the-right-side',
    }

    readonly initialState: TSelectState = {
        isExpanded: false,
        currentOptionIndex: null,
        selectedOptionElement: null,
    }

    readonly state: TSelectState;

    readonly rootElement: HTMLElement;
    readonly originalControlElement: HTMLSelectElement;
    readonly buttonElement: HTMLDivElement;
    readonly dropdownElement: HTMLElement;
    readonly optionElements: NodeListOf<Element>;

    constructor(
        rootElement: HTMLElement,
    ) {
        super();

        this.rootElement = rootElement;
        this.originalControlElement = this.rootElement.querySelector(this.selectors.originalControl);
        this.buttonElement = this.rootElement.querySelector(this.selectors.button);
        this.dropdownElement = this.rootElement.querySelector(this.selectors.dropdown);
        this.optionElements = this.dropdownElement.querySelectorAll(this.selectors.option);
        this.state = this.getProxyState({
            ...this.initialState,
            currentOptionIndex: this.originalControlElement.selectedIndex,
            selectedOptionElement: this.optionElements[this.originalControlElement.selectedIndex],
        });
        setTimeout(this.fixDropdownPosition, 500);
        this.toggleA11yVisibility();
        this.bindEvents();
    }

    updateUI() {
        const {isExpanded, currentOptionIndex, selectedOptionElement} = this.state;

        const newSelectedOptionValue = selectedOptionElement.textContent.trim();

        const updateOriginalControl = () => {
            this.originalControlElement.value = newSelectedOptionValue;
        }
        const updateButton = () => {
            this.buttonElement.textContent = newSelectedOptionValue;
            this.buttonElement.classList.toggle(this.stateClasses.isExpanded, isExpanded);
            this.buttonElement.ariaExpanded = `${isExpanded}`;
            this.buttonElement.setAttribute(
                this.a11yAttributes.activeDescendant,
                this.optionElements[currentOptionIndex].id
            );
        }
        const updateDropdown = () => {
            this.dropdownElement.classList.toggle(this.stateClasses.isExpanded, isExpanded);
        }
        const updateOptions = () => {
            this.optionElements.forEach((option, index) => {
                const isCurrent = index === currentOptionIndex;
                const isSelected = option === selectedOptionElement;

                option.classList.toggle(this.stateClasses.isCurrent, isCurrent);
                option.classList.toggle(this.stateClasses.isSelected, isSelected);
                option.ariaSelected = `${isSelected}`;
            });
        }

        updateOriginalControl();
        updateButton();
        updateDropdown();
        updateOptions();
    }

    fixDropdownPosition = () => {
        const viewportWidth = document.documentElement.clientWidth;
        const viewportCenterX = viewportWidth / 2;

        const { width, x } = this.buttonElement.getBoundingClientRect();

        const buttonCenterX = x + width / 2;
        const isButtonOnTheLeftViewportSide = buttonCenterX < viewportCenterX;

        this.dropdownElement.classList.toggle(this.stateClasses.isOnTheLeftSide, isButtonOnTheLeftViewportSide);
        this.dropdownElement.classList.toggle(this.stateClasses.isOnTheRightSide, !isButtonOnTheLeftViewportSide);
    }

    toggleA11yVisibility(isMobileDevice: boolean = MatchMedia.mobile.matches) {
        this.originalControlElement.tabIndex = isMobileDevice ? 0 : -1;
        this.buttonElement.tabIndex = isMobileDevice ? -1 : 0;
        this.originalControlElement.ariaHidden = `${!isMobileDevice}`;
        this.buttonElement.ariaHidden = `${isMobileDevice}`;
    }

    toggleExpandedState() {
        this.state.isExpanded = !this.state.isExpanded;
    }

    expand() {
        this.state.isExpanded = true;
    }

    get isNeedToExpand() {
        const isButtonFocused = document.activeElement === this.buttonElement;

        return !this.state.isExpanded && isButtonFocused;
    }

    selectCurrentOption() {
       this.state.selectedOptionElement = this.optionElements[this.state.currentOptionIndex];
    }

    collapse() {
        this.state.isExpanded = false;
    }

    onMobileMatchMediaChange = (event:MediaQueryListEvent) => {
        this.toggleA11yVisibility(event.matches)
    }

    onOriginalControlChange = () => {
        this.state.selectedOptionElement = this.optionElements[this.originalControlElement.selectedIndex];
    }

    onButtonClick = () => {
        this.toggleExpandedState();
    }

    onClick = (event: MouseEvent) => {
        const {target} = event;

        const isButtonClick = target === this.buttonElement;
        const isOutsideDropdownClick = (target as Element).closest(this.selectors.dropdown) !== this.dropdownElement;

        if (!isButtonClick && isOutsideDropdownClick) {
            this.collapse();
            return;
        }

        const isOptionClick = (target as Element).matches(this.selectors.option);

        if (isOptionClick) {
            this.state.selectedOptionElement = target as Element;
            this.state.currentOptionIndex = [...this.optionElements].findIndex(
              option => option === target
            );
            this.collapse();
        }
    }

    onArrowUpKeyDown = () => {
        if (this.isNeedToExpand) {
            this.expand();
            return;
        }

        if (this.state.currentOptionIndex > 0) {
            this.state.currentOptionIndex--;
        }
    }

    onArrowDownKeyDown = () => {
        if (this.isNeedToExpand) {
            this.expand();
            return;
        }

        if (this.state.currentOptionIndex < this.optionElements.length - 1) {
            this.state.currentOptionIndex++;
        }
    }

    onSpaceKeyDown = () => {
        if (this.isNeedToExpand) {
            this.expand();
            return;
        }

        this.selectCurrentOption();
        this.collapse();
    }

    onEnterKeyDown = () => {
        if (this.isNeedToExpand) {
            this.expand();
            return;
        }

        this.selectCurrentOption();
        this.collapse();
    }

    onEscapeKeyDown = () => {
        this.collapse();
    }

    onKeyDown = (event: KeyboardEvent) => {
        const {code} = event;

        const action = {
            ArrowUp: this.onArrowUpKeyDown,
            ArrowDown: this.onArrowDownKeyDown,
            Space: this.onSpaceKeyDown,
            Enter: this.onEnterKeyDown,
            Escape: this.onEscapeKeyDown,
        }[code];

        if (action) {
            event.preventDefault();
            action();
        }
    }

    bindEvents() {
        MatchMedia.mobile.addEventListener('change', this.onMobileMatchMediaChange);
        this.originalControlElement.addEventListener('change', this.onOriginalControlChange);
        this.buttonElement.addEventListener('click', this.onButtonClick);
        document.addEventListener('click', this.onClick);
        this.rootElement.addEventListener('keydown', this.onKeyDown);
    }
}

class SelectCollection {
    constructor(selector: string = rootSelector) {
        this.init(selector);
    }

    init(selector: string) {
        document.querySelectorAll(selector).forEach((element) => {
            new Select(element as HTMLElement);
        });
    }
}

export default SelectCollection;