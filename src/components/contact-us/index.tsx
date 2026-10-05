import { FormEvent, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import { MainLayoutSharedProps } from "shared/layout/main-layout";
import "components/product/shared/product-v2.scss";
import "./contact-us.scss";
import { ContactField, ContactFieldName, ContactFormConst, ContactHeroConst, ContactNextStepsConst, ContactOfficeConst } from "consts/contact-us.const";
import { requestDemoModal } from "components/product/shared/page-actions";

type FormValues = Record<ContactFieldName, string>;
type FormErrors = Partial<Record<ContactFieldName, string>>;

const initialValues: FormValues = { fullName: "", jobTitle: "", companyName: "", email: "", phone: "", message: "" };
const allFields: ContactField[] = [...ContactFormConst.rows.flat(), ContactFormConst.message];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[\d\s()-]{6,20}$/;

const validate = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};
    allFields.forEach(({ name, placeholder, required }) => {
        if (required && !values[name].trim()) errors[name] = `${placeholder} is required`;
    });
    if (values.email && !EMAIL_PATTERN.test(values.email.trim())) errors.email = "Please enter a valid email address";
    if (values.phone && !PHONE_PATTERN.test(values.phone.trim())) errors.phone = "Please enter a valid phone number";
    return errors;
};

/** Halaman Contact Us (revamp 2026). Memakai gaya dasar product-v2 + tambahan contact-v2. */
export default function ContactUsComponent({ }: MainLayoutSharedProps) {
    return <Box className="product-v2 contact-v2">
        <ContactHero />
        <Box component="section" className="pv-section">
            <Container maxWidth="xl" className="cv-contact">
                <ContactForm />
                <NextSteps />
            </Container>
        </Box>
        <OfficeLocations />
    </Box>
}

function ContactHero() {
    const { title, description } = ContactHeroConst;

    return <Box component="section" className="cv-hero">
        <Container maxWidth="md">
            <Typography variant="h1" className="cv-hero__title">{title}</Typography>
            <Typography className="cv-hero__description">
                {description.map((line, i) => <span key={i}>{line}</span>)}
            </Typography>
        </Container>
    </Box>
}

function ContactForm() {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);

    const onChange = (name: ContactFieldName, value: string) => {
        setValues(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
        setSubmitted(false);
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const nextErrors = validate(values);
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length) return;

        // TODO: kirim ke endpoint backend saat API contact sudah tersedia
        setSubmitted(true);
        setValues(initialValues);
    };

    const renderField = ({ name, placeholder, type = "text", required }: ContactField, multiline = false) =>
        <TextField
            key={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={values[name]}
            onChange={e => onChange(name, e.target.value)}
            error={!!errors[name]}
            helperText={errors[name]}
            inputProps={{ "aria-label": placeholder, "aria-required": required }}
            multiline={multiline}
            minRows={multiline ? 6 : undefined}
            fullWidth
            className="cv-field"
        />;

    return <>
        <Box className="cv-contact__heading">
            <Typography variant="h2" className="cv-title">{ContactFormConst.title}</Typography>
            <Typography className="cv-intro">
                <Link component="button" type="button" underline="hover" className="cv-intro__link" onClick={requestDemoModal}>{ContactFormConst.bookCall}</Link>
                {" "}{ContactFormConst.description}
            </Typography>
        </Box>

        <Box component="form" noValidate onSubmit={onSubmit} className="cv-form">
            {ContactFormConst.rows.map((row, i) => <Box key={i} className="cv-form__row">
                {row.map(field => renderField(field))}
            </Box>)}
            {renderField(ContactFormConst.message, true)}

            {submitted && <Alert severity="success" className="cv-form__alert">{ContactFormConst.successMessage}</Alert>}

            <Box>
                <Button type="submit" className="pv-btn pv-btn--primary cv-form__submit">{ContactFormConst.submit}</Button>
            </Box>
        </Box>
    </>
}

function NextSteps() {
    const { title, steps } = ContactNextStepsConst;

    return <Box component="aside" className="cv-next">
        <Typography variant="h3" className="cv-next__title">{title}</Typography>
        <Box component="ol" className="cv-next__list">
            {steps.map((step, i) => <Box component="li" key={i} className="cv-next__item">
                <span className="cv-next__number">{i + 1}</span>
                <Typography className="cv-next__text">{step}</Typography>
            </Box>)}
        </Box>
    </Box>
}

function OfficeLocations() {
    const { title, viewMap, offices } = ContactOfficeConst;

    return <Box component="section" className="pv-section cv-office">
        <Container maxWidth="xl">
            <Typography variant="h2" className="cv-title">{title}</Typography>
            <Box className="cv-office__grid">
                {offices.map(office => <Box key={office.title} className="cv-office__card">
                    <Typography variant="h3" className="cv-office__name">{office.title}</Typography>
                    <Typography className="cv-office__address">
                        {office.address.map((line, i) => <span key={i}>{line}</span>)}
                    </Typography>
                    <Link href={office.mapLink} target="_blank" rel="noopener noreferrer" underline="hover" className="cv-office__map">{viewMap}</Link>
                </Box>)}
            </Box>
        </Container>
    </Box>
}
