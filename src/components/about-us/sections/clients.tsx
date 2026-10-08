import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { ClientsConst } from "consts/about-us.const";
import { useLocalized } from "shared/i18n";

export default function ClientsSection() {
    const clients = useLocalized(ClientsConst);

    return <section className="home-section">
        <Container maxWidth="xl">
            <div className="about-left-heading">
                <Typography variant="h2" className="home-heading__title">{clients.title}</Typography>
                <Typography className="about-left-heading__description">{clients.description}</Typography>
            </div>
            <div className="about-clients__marquee">
                {/* Track berisi 2 salinan logo agar animasi -50% bisa looping tanpa jeda */}
                <div className="about-clients__track">
                    {[0, 1].map((copy) => clients.items.map(({ name, logo }) => (
                        <div key={`${copy}-${name}`} className="about-clients__logo" aria-hidden={copy === 1}>
                            <img src={logo} alt={copy === 0 ? name : ""} loading="lazy" />
                        </div>
                    )))}
                </div>
            </div>
        </Container>
    </section>
}
