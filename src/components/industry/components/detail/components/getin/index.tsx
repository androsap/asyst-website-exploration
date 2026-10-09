import './index.scss'
import { Button } from "components/ui/button";
import { Paper } from "components/ui/paper";
import Dec from "assets/img/icon/dec-download-resource.svg";
import backgroundImage from "assets/img/background/bg-download-resource.webp";
import { Typography } from "components/ui/typography";
import { useT } from "shared/i18n";

export default function GetinTouchComponent() {
    const t = useT();
    return (
        <>
            <Paper className="h-[222px] rounded-[20px] [background:linear-gradient(to_right_bottom,_#89BA3A,_#89BA3AE5,_#89BA3AD4)]">
                <div>
                    <img className="h-[222px] opacity-[0.05] rounded-[0px_20px_20px_0px] absolute left-[49.8%]" src={backgroundImage} alt="img" />
                    <img className="h-[222px] rounded-[0px_20px_20px_0px] absolute top-[94%] left-[54.5%]" src={Dec} alt="Deco" />
                </div>
                <div className="pt-[40px] pr-[40px] pb-[40px] pl-[40px] flex flex-col gap-[41px]">
                    <Typography variant="h6">{t("How Aero Systems Indonesia can we improve your entire company’s operations", "Bagaimana Aero Systems Indonesia dapat meningkatkan seluruh operasional perusahaan Anda")}</Typography>
                    <Button className="w-[126px] h-[48px] text-[color:white] [background:linear-gradient(to_right_bottom,_#89BA3A,_#89BA3A)]">{t("Get in Touch", "Hubungi Kami")}</Button>
                </div>
            </Paper>
        </>
    );
};