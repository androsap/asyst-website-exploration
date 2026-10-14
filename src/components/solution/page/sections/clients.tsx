import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { SolutionClientsConst } from "consts/solution-detail/clients.const";
import { useT } from "shared/i18n";

export default function ClientsSection() {
    const t = useT();

    return <section className="sp-clients">
        <Container maxWidth="xl">
            <Typography component="h2" className="sp-clients__label">{t("Trusted By Clients", "Dipercaya oleh Klien")}</Typography>
            <ul className="sp-clients__list">
                {SolutionClientsConst.map(({ name, logo }) => (
                    <li key={name} className="sp-clients__logo">
                        <img src={logo} alt={name} loading="lazy" decoding="async" />
                    </li>
                ))}
            </ul>
        </Container>
    </section>
}
