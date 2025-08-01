import './Field.scss';
import classNames from 'classnames';
import getIdFromTitle from "@/utils/getIdFromTitle";
import {ReactNode} from "react";

type TFieldProps = {
    className?: string;
    id?: string;
    label: string;
    type?: 'email' | 'textarea';
    placeholder?: string;
    isRequired?: boolean;
    inputMode?: "tel";
    mask?: string;
    renderBefore?: (fieldClassName: string) => ReactNode;
}

const Field = ({renderBefore, className, mask, inputMode, isRequired, placeholder, type, label, id = getIdFromTitle(label)}: TFieldProps) => {
    const Component = type === 'textarea' ? 'textarea' : 'input';
    const extraAttrs: Partial<Record<'data-js-input-mask', string>> = {};

    if (mask) {
        extraAttrs['data-js-input-mask'] = mask;
    }

    const fieldControlClassName = "field__control";

    return (
        <div className={classNames(className, 'field')}>
            <label className="field__label" htmlFor={id}>
                {label} {isRequired && (
                    <span className="field__required-star" aria-hidden="true">*</span>
                )}
            </label>
            <div className="field__body">
                {renderBefore?.(fieldControlClassName)}
                <Component
                    className={fieldControlClassName}
                    id={id}
                    inputMode={inputMode}
                    type={type}
                    required={isRequired}
                    placeholder={placeholder}
                    {...extraAttrs}
                />
            </div>
        </div>
    );
}

export default Field