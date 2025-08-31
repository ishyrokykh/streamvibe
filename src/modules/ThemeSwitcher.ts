import { Select } from "@/modules/SelectCollection";

const rootSelector = '[data-theme-switcher]';

class ThemeSwitcher extends Select{
    constructor() {
        const rootElement = document.querySelector(rootSelector) as HTMLElement;

        super(rootElement);
        const themeFromStorage = localStorage.getItem('data-theme');
        if (themeFromStorage) {
            const optionIndex  = [...this.optionElements].findIndex(
                option => option.textContent.trim() === themeFromStorage
            );
            if (optionIndex !== -1) {
                this.state.currentOptionIndex = optionIndex;
                this.selectCurrentOption();
            }
        }

        this.updateUI();
    }

    updateUI() {
        super.updateUI();
        const newValue = this.originalControlElement.value;
        document.documentElement.setAttribute('data-theme', newValue);
        localStorage.setItem('data-theme', newValue);
    }
}

export default ThemeSwitcher;