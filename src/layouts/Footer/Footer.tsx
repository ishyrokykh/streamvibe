import './Footer.scss';
import {TSocialsProps} from "@/components/Socials/Socials";
import Socials from "@/components/Socials";


type TFooterMenuItem = {
    title: string;
    links?: string[];
    socialLinks?: TSocialsProps['links'];
}

const Footer = () => {
    const menuItems: TFooterMenuItem[] = [
        {
            title: 'Home',
            links: ['Categories', 'Devices', 'Pricing', 'FAQ']
        },
        {
            title: 'Movies',
            links: ['Genres', 'Trending', 'New Release', 'Popular']
        },
        {
            title: 'Shows',
            links: ['Genres', 'Trending', 'New Release', 'Popular']
        },
        {
            title: 'Support',
            links: ['Contact Us']
        },
        {
            title: 'Subscription',
            links: ['Plans', 'Features']
        },
        {
            title: 'Connect With Us',
            socialLinks: [
                {
                    label: 'Facebook',
                    iconId: 'facebook'
                },
                {
                    label: 'Twitter',
                    iconId: 'twitter'
                },
                {
                    label: 'LinkedIn',
                    iconId: 'linked-in'
                }
            ]
        }
    ];
    const extraLinks: string[] = [
      'Terms of Use',
      'Privacy Policy',
      "Cookie Policy",
    ];

    return (
        <footer className="footer">
            <div className="footer__inner container">
                <nav className="footer__menu">
                    {menuItems.map(({title, links, socialLinks}, index) => (
                        <div key={index} className="footer__menu-column">
                            <a href="/" className="footer__menu-title h6">{title}</a>
                            {!!links?.length && (
                                <ul className="footer__menu-list">
                                    {links.map((link, i) => (
                                        <li key={i} className="footer__menu-item">
                                            <a href="/" className="footer__menu-link">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {!!socialLinks?.length && (
                                <Socials className="footer__soc1als" links={socialLinks} />
                            )}
                        </div>
                    ))}

                </nav>
                <div className="footer__extra">
                    <p className="footer__copyright">
                        @<time dateTime="2023">2023</time> streamvib, All Rights Reserved
                    </p>
                    <div className="footer__extra-links">
                        {extraLinks.map((link, i) => (
                            <a key={i} href="/" className="footer__extra-link">{link}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;