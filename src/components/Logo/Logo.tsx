import './Logo.scss';
import {ImgHTMLAttributes} from "react";
import classNames from "classnames";
import logoImgSrc from '@/assets/images/logo.svg'

const Logo = ({className, loading = 'lazy'}: Pick<ImgHTMLAttributes<'img'>, 'loading' | 'className'>) => {
    const title = 'Home';
    return (
        <a className={classNames(className, "logo")} href="/" title={title} aria-label={title}>
            <img
                src={logoImgSrc}
                alt=""
                className="logo__image"
                width={199}
                height={60}
                loading={loading}
            />
        </a>
    );
}

export default Logo