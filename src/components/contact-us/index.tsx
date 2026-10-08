import { FormEvent, useState } from "react";
import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { TextField } from "components/ui/text-field";
import { Typography } from "components/ui/typography";
import { Alert } from "components/ui/alert";
import { MainLayoutSharedProps } from "shared/layout/main-layout";
import "components/product/shared/product-v2.scss";
import "./contact-us.scss";
import { ContactField, ContactFieldName, ContactFormConst, ContactHeroConst, ContactNextStepsConst, ContactOfficeConst } from "consts/contact-us.const";
import { requestDemoModal } from "components/product/shared/page-actions";
import { useLocalized } from "shared/i18n";

type FormValues = Record<ContactFieldName, string>;
type FormErrors = Partial<Record<ContactFieldName, string>>;

type ContactFormContent = typeof ContactFormConst.EN;

const initialValues: FormValues = { fullName: "", jobTitle: "", companyName: "", email: "", phone: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[\d\s()-]{6,20}$/;

const validate = (values: FormValues, form: ContactFormContent): FormErrors => {
    const errors: FormErrors = {};
    const allFields: ContactField[] = [...form.rows.flat(), form.message];
    allFields.forEach(({ name, placeholder, required }) => {
        if (required && !values[name].trim()) errors[name] = form.requiredError.replace("{field}", placeholder);
    });
    if (values.email && !EMAIL_PATTERN.test(values.email.trim())) errors.email = form.emailError;
    if (values.phone && !PHONE_PATTERN.test(values.phone.trim())) errors.phone = form.phoneError;
    return errors;
};

/** Halaman Contact Us (revamp 2026). Memakai gaya dasar product-v2 + tambahan contact-v2. */
export default function ContactUsComponent({ }: MainLayoutSharedProps) {
    return <div className="product-v2 contact-v2">
        <ContactHero />
        <section className="pv-section">
            <Container maxWidth="xl" className="cv-contact">
                <ContactForm />
                <NextSteps />
            </Container>
        </section>
        <OfficeLocations />
    </div>
}

function ContactHero() {
    const { title, description } = useLocalized(ContactHeroConst);

    return <section className="cv-hero">
        <Container maxWidth="md">
            <Typography variant="h1" className="cv-hero__title">{title}</Typography>
            <Typography className="cv-hero__description">
                {description.map((line, i) => <span key={i}>{line}</span>)}
            </Typography>
        </Container>
    </section>
}

function ContactForm() {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);
    const form = useLocalized(ContactFormConst);

    const onChange = (name: ContactFieldName, value: string) => {
        setValues(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
        setSubmitted(false);
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const nextErrors = validate(values, form);
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
        <div className="cv-contact__heading">
            <Typography variant="h2" className="cv-title">{form.title}</Typography>
            <Typography className="cv-intro">
                <button
                    type="button"
                    data-slot="link"
                    className="m-0 [font:inherit] text-[#2775BB] no-underline relative appearance-none bg-transparent [outline:0] border-0 border-none border-current [-webkit-tap-highlight-color:transparent] rounded-none p-0 cursor-pointer select-none align-middle hover:underline [&::-moz-focus-inner]:border-none focus-visible:[outline:auto] cv-intro__link"
                    onClick={requestDemoModal}
                >{form.bookCall}</button>
                {" "}{form.description}
            </Typography>
        </div>

        <form noValidate onSubmit={onSubmit} className="cv-form">
            {form.rows.map((row, i) => <div key={i} className="cv-form__row">
                {row.map(field => renderField(field))}
            </div>)}
            {renderField(form.message, true)}

            {submitted && <Alert className="cv-form__alert">{form.successMessage}</Alert>}

            <div>
                <Button type="submit" className="pv-btn pv-btn--primary cv-form__submit">{form.submit}</Button>
            </div>
        </form>
    </>
}

function NextSteps() {
    const { title, steps } = useLocalized(ContactNextStepsConst);

    return <aside className="cv-next">
        <Typography variant="h3" className="cv-next__title">{title}</Typography>
        <ol className="cv-next__list">
            {steps.map((step, i) => <li key={i} className="cv-next__item">
                <span className="cv-next__number">{i + 1}</span>
                <Typography className="cv-next__text">{step}</Typography>
            </li>)}
        </ol>
    </aside>
}

function OfficeLocations() {
    const { title, viewMap, offices } = useLocalized(ContactOfficeConst);

    return <section className="pv-section cv-office">
        <Container maxWidth="xl">
            <Typography variant="h2" className="cv-title">{title}</Typography>
            <div className="cv-office__grid">
                {offices.map(office => <div key={office.mapLink} className="cv-office__card">
                    <Typography variant="h3" className="cv-office__name">{office.title}</Typography>
                    <Typography className="cv-office__address">
                        {office.address.map((line, i) => <span key={i}>{line}</span>)}
                    </Typography>
                    <a href={office.mapLink} target="_blank" rel="noopener noreferrer" data-slot="link" className="m-0 [font:inherit] text-[#2775BB] no-underline hover:underline cv-office__map">{viewMap}</a>
                </div>)}
            </div>
        </Container>
    </section>
}
