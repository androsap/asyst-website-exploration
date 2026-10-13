interface FigureProps {
    image: string;
    alt: string;
    variant?: "framed" | "showcase";
}

export default function Figure({ image, alt, variant = "framed" }: FigureProps) {
    return <div className={`pe-figure pe-figure--${variant}`}>
        <img key={image} src={image} alt={alt} loading="lazy" decoding="async" />
    </div>
}
