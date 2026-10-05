import Container from "@mui/material/Container";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import logoAsystWhite from "assets/asyst/img/logo/asyst-logo-white.png";
import { FooterColumnsConst, FooterCompanyConst, FooterLegalConst, FooterSocialConst } from "consts/site-footer.const";
import MenuLink from "shared/navigation/header/menu-link";
import "./index.scss";

export default function SiteFooterShared() {
    const { title, address, phone, email } = FooterCompanyConst;

    return <footer className="site-footer">
        <Container maxWidth="xl">
            <div className="site-footer__top">
                <div className="site-footer__company">
                    <img src={logoAsystWhite} alt="ASYST" className="site-footer__logo" loading="lazy" />
                    <div>
                        <div className="site-footer__title">{title}</div>
                        <address className="site-footer__address">{address}</address>
                        <a href={`tel:${phone.replace(/\s/g, "")}`} className="site-footer__contact">
                            <LocalPhoneRoundedIcon />{phone}
                        </a>
                        <a href={`mailto:${email}`} className="site-footer__contact">
                            <EmailRoundedIcon />{email}
                        </a>
                    </div>
                </div>

                {FooterColumnsConst.map(({ title, items }, index) => (
                    <nav key={title || index} className="site-footer__column" aria-label={title || "Company"}>
                        {title && <div className="site-footer__title">{title}</div>}
                        {items.map(({ label, link }) => (
                            <MenuLink key={label} link={link} className="site-footer__link">{label}</MenuLink>
                        ))}
                    </nav>
                ))}
            </div>

            <div className="site-footer__bottom">
                <div className="site-footer__legal">
                    <span>© Aero Systems Indonesia {new Date().getFullYear()} | All Right Reserved</span>
                    {FooterLegalConst.map(({ label, link }) => (
                        <MenuLink key={label} link={link} className="site-footer__link">{label}</MenuLink>
                    ))}
                </div>
                <div className="site-footer__social">
                    <span>Let's Connect</span>
                    <a href={FooterSocialConst.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
                    <a href={FooterSocialConst.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
                </div>
            </div>
        </Container>
    </footer>
}
