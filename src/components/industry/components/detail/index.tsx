import { MainLayoutSharedProps } from 'shared/layout/main-layout';
import { Suspense, lazy } from 'react';
import { Container } from "components/ui/container";
import { Element } from 'react-scroll';
import { Typography } from "components/ui/typography";
import { CircularProgress } from "components/ui/circular-progress";
import ProductComponent from './components/products';
import GetinTouchComponent from './components/getin';
import OverViewComponent from './components/overview';
import BusinessComponent from './components/business';
import SolutionsComponent from './components/solutions';
import { mainBoxStyle, styles } from './styled';
import './index.scss';
import { useT } from 'shared/i18n';

import { ReactComponent as BackCircleIcon } from "assets/asyst/img/icon/industry/back-circle.svg";
import { ReactComponent as LinkCircleIcon } from "assets/asyst/img/icon/industry/link-orange-circle.svg";

const ContentComponent = lazy(() => import("./content"));

const Loading = <div className="w-full h-[150px] flex items-center justify-center relative">
    <CircularProgress size={40} />
</div>

export default function IndustryDetailComponent({ }: MainLayoutSharedProps) {
    const t = useT();
    return <div className="container-industry-detail">
        <Element name="industry-detail">
            <div className={styles.mainBox} style={mainBoxStyle}>
                <div aria-hidden="true" className={styles.overlayBox} />
                <div className="flex flex-col">
                    <div className={styles.backNavContainer}>
                        <BackCircleIcon />
                        <Typography className={styles.backNavText}>
                            {t("Airline", "Maskapai")}
                        </Typography>
                    </div>
                    <div className={styles.headerBox}>
                        <div>
                            <Typography className={styles.headerTitle}>
                                {t("Aero Systems Indonesia for Airlines", "Aero Systems Indonesia untuk Maskapai")}
                            </Typography>
                            <Typography className={styles.headerSubtitle}>
                                {t("The right balance of innovative technology and unrivalled understanding of industry, to develop and manage integrated solutions and services", "Perpaduan tepat antara teknologi inovatif dan pemahaman industri yang tak tertandingi untuk mengembangkan dan mengelola solusi serta layanan terintegrasi")}
                            </Typography>
                        </div>
                        <LinkCircleIcon className="ml-[12px]" />
                    </div>
                </div>
            </div>
        </Element>
        <Suspense fallback={Loading}>
            <Container maxWidth="xl" className="flex gap-[53px] flex-col pt-[0px]">
                <OverViewComponent />
                <BusinessComponent />
                <SolutionsComponent />
                <ProductComponent />
                <ContentComponent />
                <GetinTouchComponent />
            </Container>
        </Suspense>
    </div>
};
