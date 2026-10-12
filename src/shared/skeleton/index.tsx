import { useLocation } from "react-router-dom";
import { Container } from "components/ui/container";
import { useT } from "shared/i18n";
import { Bone, Card } from "./bone";
import HeaderSkeleton from "./header";
import FooterSkeleton from "./footer";
import HomeSkeleton from "./home";

export { Bone, HeaderSkeleton, FooterSkeleton, HomeSkeleton };

const ContentSkeleton = () =>
    <Container maxWidth="xl" className="pt-[140px] max-[1023px]:pt-28">
        <div className="mx-auto flex max-w-[900px] flex-col items-center gap-3">
            <Bone className="h-11 w-[min(760px,100%)] max-[599px]:h-8" />
            <Bone className="h-11 w-[min(480px,70%)] max-[599px]:h-8" />
            <Bone className="mt-6 h-4 w-[min(820px,100%)]" />
            <Bone className="h-4 w-[min(560px,80%)]" />
        </div>
        <Bone className="mt-14 h-[420px] w-full rounded-2xl max-[599px]:h-[240px]" />
        <div className="mt-14 grid grid-cols-3 gap-6 max-[1023px]:grid-cols-2 max-[599px]:grid-cols-1">
            {[0, 1, 2].map(i => <Card key={i} className="flex flex-col gap-3 p-6">
                <Bone className="size-12 rounded-[10px]" />
                <Bone className="mt-2 h-6 w-[70%]" />
                <Bone className="h-3.5 w-full" />
                <Bone className="h-3.5 w-[85%]" />
            </Card>)}
        </div>
    </Container>

export default function PageSkeleton() {
    const { pathname } = useLocation();
    const t = useT();

    return <div role="status" aria-busy="true" className="relative bg-white">
        <span className="sr-only">{t("Loading content…", "Memuat konten…")}</span>
        <HeaderSkeleton />
        {pathname === "/" ? <HomeSkeleton /> : <ContentSkeleton />}
        <FooterSkeleton />
    </div>
}
