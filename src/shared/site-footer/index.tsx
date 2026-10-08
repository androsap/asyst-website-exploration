import { Container } from "components/ui/container";
import { LocalPhoneRoundedIcon, EmailRoundedIcon, LinkedInIcon, InstagramIcon } from "components/ui/icons";
import logoAsystWhite from "assets/asyst/img/logo/asyst-logo-white.webp";
import { FooterColumnsConst, FooterCompanyConst, FooterLegalConst, FooterSocialConst } from "consts/site-footer.const";
import MenuLink from "shared/navigation/header/menu-link";
import { useLocalized, useT } from "shared/i18n";
import "./index.scss";

export default function SiteFooterShared() {
    const t = useT();
    const { title, address, phone, email } = useLocalized(FooterCompanyConst);
    const columns = useLocalized(FooterColumnsConst);
    const legal = useLocalized(FooterLegalConst);

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

                {columns.map(({ title, items }, index) => (
                    <nav key={title || index} className="site-footer__column" aria-label={title || t("Company", "Perusahaan")}>
                        {title && <div className="site-footer__title">{title}</div>}
                        {items.map(({ label, link }) => (
                            <MenuLink key={label} link={link} className="site-footer__link">{label}</MenuLink>
                        ))}
                    </nav>
                ))}
            </div>

            <div className="site-footer__bottom">
                <div className="site-footer__legal">
                    <span>© Aero Systems Indonesia {new Date().getFullYear()} | {t("All Rights Reserved", "Hak Cipta Dilindungi")}</span>
                    {legal.map(({ label, link }) => (
                        <MenuLink key={label} link={link} className="site-footer__link">{label}</MenuLink>
                    ))}
                </div>
                <div className="site-footer__social">
                    <span>{t("Let's Connect", "Mari Terhubung")}</span>
                    <a href={FooterSocialConst.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
                    <a href={FooterSocialConst.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
                </div>
            </div>
        </Container>
    </footer>
}
