import './Select.scss';
import classNames from 'classnames';
import getIdFromTitle from "@/utils/getIdFromTitle";

type TSelectProps = {
    id?: string;
    label: string;
    isLabelHidden?: boolean;
    options: {
        value: string;
        isSelected?: boolean;
    }[];
    buttonClassName?: string;
}

const Select = ({options, buttonClassName, isLabelHidden = true, label, id = getIdFromTitle(label)}: TSelectProps) => {
    const IDs = {
        originalControl: id,
        label: `${id}-label`,
        dropdown: `${id}-dropdown`
    };

    const selectedOptionIndex = options.findIndex(({ isSelected }) => isSelected) ?? 0;
    const selectedOption = options[selectedOptionIndex]

    const getOptionId = (index: number) => {
        return `${id}-option-${index}`
    }
    return (
        <div className='select' data-js-select="">
            <label className={classNames('select__label', {
                'visually-hidden': isLabelHidden
            })} id={IDs.label} htmlFor={IDs.originalControl}>{label}</label>
            <select
                defaultValue={selectedOption.value}
                data-js-select-original-control=""
                className={classNames("select__original-control", buttonClassName)}
                id={IDs.originalControl}
                tabIndex={-1}
                aria-hidden
            >
                {options.map((option, index) => (
                    <option value={option.value} key={index}>{option.value}</option>
                ))}
            </select>
            <div className="select__body">
                <div
                    className={classNames('select__button', buttonClassName)}
                    tabIndex={0}
                    role="combobox"
                    aria-expanded={false}
                    aria-haspopup='listbox'
                    aria-controls={IDs.dropdown}
                    aria-labelledby={IDs.label}
                    data-js-select-button=""
                    aria-activedescendant={getOptionId(selectedOptionIndex)}
                >
                    {selectedOption.value}
                </div>
                <div
                    className="select__dropdown"
                    id={IDs.dropdown}
                    role="listbox"
                    aria-labelledby={IDs.label}
                    data-js-select-dropdown=""
                >
                    {options.map((option, index) => {
                        const {value, isSelected = false} = option;
                        return <div className={classNames('select__option', {
                            'is-selected': isSelected,
                            'is-current': isSelected,
                        })}
                                    id={getOptionId(index)}
                                    role="option"
                                    aria-selected={isSelected}
                                    data-js-select-option=""
                                    key={index}
                        >
                            {value}
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Select