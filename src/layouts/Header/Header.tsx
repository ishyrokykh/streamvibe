import './Header.scss';
import Logo from "@/components/Logo";
import {GlobalProps} from "minista/dist/types/shared";
import classNames from "classnames";
import Button from "@/components/Button";
import BurgerButton from "@/components/BurgerButton";
import Select from "@/components/Select";

type TMenuItem = {
    label: string;
    href: string;
}

type THeaderProps = {
    isFixed?: boolean;
}

const Header = ({url, isFixed}: Pick<GlobalProps, 'url'> & THeaderProps) => {
    const basePath = import.meta.env.MODE === 'production'
        ? import.meta.env.VITE_PUBLIC_PATH
        : ''

    const menuItems: TMenuItem[] = [
        {
            label: 'Home',
            href: "/",
        },
        {
            label: 'Movies & Shows',
            href: "/movies",
        },
        {
            label: 'Support',
            href: "/support",
        },
        {
            label: 'Subscriptions',
            href: "/subscriptions",
        }
    ].map(item => ({
        ...item,
        href: `${basePath}${item.href}`
    }));


    return (
        <header className={classNames("header", {
            ["is-fixed"]: isFixed,
        })} data-js-overlay-menu="">
            <div className="header__inner container">
                <Logo className="header__logo" loading="eager" />
                <dialog className="header__overlay-menu-dialog" data-js-overlay-menu-dialog="">
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        {menuItems.map(({label, href}, index) => (
                            <li key={index} className="header__menu-item">
                                <a className={classNames("header__menu-link", {
                                    'is-active': href === url
                                })} href={href}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header__actions">
                    <Select
                        label="Theme Switcher"
                        isLabelHidden
                        className="header__theme-switcher"
                        buttonClassName="header__theme-switcher-button"
                        rootAttribute="data-theme-switcher"
                        options={[
                            {
                                value: 'Netflix theme',
                                isSelected: true,
                            },
                            {
                                value: 'Power Rangers theme',
                            },
                            {
                                value: 'Hulk theme',
                            },
                            {
                                value: 'Joker theme',
                            }
                        ]}
                    />
                    <Button className="header__button" mode="transparent" iconBefore="search" label="Search" />
                    <Button className="header__button" mode="transparent" iconBefore="notification" label="Notifications" />
                </div>
                </dialog>
                <BurgerButton
                    className="header__burger-button visible-tablet"
                    extraAttributes={{
                        'data-js-overlay-menu-burger-button': ""
                    }}
                />
            </div>
        </header>
    );
};

export default Header;