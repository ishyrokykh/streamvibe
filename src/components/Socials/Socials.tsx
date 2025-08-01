import './Socials.scss';
import classNames from 'classnames';
import {JSX} from "react";
import Button from "@/components/Button";

type TFooterMenuSocialItem = {
    label: string;
    iconId: string;
}

export type TSocialsProps = JSX.IntrinsicElements['div'] & {
    links?: TFooterMenuSocialItem[];
};

const Socials = ({className, links}: TSocialsProps) => {
    return (
        <div className={classNames(className, 'soc1als')}>
            <ul className="soc1als__list">
                {links.map(({label, iconId}, i) => (
                    <li className="soc1als__item" key={i}>
                        <Button
                            className="soc1als__link"
                            mode="black-10"
                            as="a"
                            href="/"
                            target="_blank"
                            label={label}
                            isLabelHidden
                            iconBefore={iconId}
                            iconBeforeFill
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Socials