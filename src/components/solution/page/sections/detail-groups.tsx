import { Typography } from "components/ui/typography";
import { SolutionDetailGroup } from "consts/solution-detail/solution-page.types";

interface DetailGroupsProps {
    groups: SolutionDetailGroup[];
}

export default function DetailGroups({ groups }: DetailGroupsProps) {
    return <>
        {groups.map(({ label, text, points }) => (
            <div key={label} className="sp-group">
                <Typography className="sp-group__label">{label}</Typography>
                {text && <Typography className="sp-group__text">{text}</Typography>}
                {points && <ul className="sp-bullets">
                    {points.map(point => <li key={point}>{point}</li>)}
                </ul>}
            </div>
        ))}
    </>
}
