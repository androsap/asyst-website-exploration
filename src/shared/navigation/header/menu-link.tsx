import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface MenuLinkProps {
    link?: string;
    className?: string;
    onClick?: () => void;
}

export default function MenuLink({ link, className = "", onClick, children }: PropsWithChildren<MenuLinkProps>) {
    if (!link) return <span className={`${className} is-disabled`}>{children}</span>;
    if (/^https?:\/\//.test(link)) return <a href={link} className={className} onClick={onClick}>{children}</a>;
    return <Link to={link} className={className} onClick={onClick}>{children}</Link>;
}
