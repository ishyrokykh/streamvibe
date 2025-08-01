import './Checkbox.scss';
import classNames from 'classnames';
import getIdFromTitle from "@/utils/getIdFromTitle";

type TCheckboxProps = {
    id?: string;
    label: string;
    isRequired?: boolean;
    className?: string;
}

const Checkbox = ({className, label, id = getIdFromTitle(label), isRequired}: TCheckboxProps) => {
    return (
        <label className={classNames(className, 'checkbox')} htmlFor={id}>
            <input id={id} type="checkbox" required={isRequired} className="checkbox__input" />
            <span className="checkbox__label">
                {label}
            </span>
        </label>
    );
}

export default Checkbox