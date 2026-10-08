import { FormEvent, ReactNode, useState } from "react";
import { Button } from "components/ui/button";
import { IconButton } from "components/ui/icon-button";
import { RadioGroup, RadioGroupItem } from "components/ui/radio-group";
import { Select } from "components/ui/select";
import { TextField } from "components/ui/text-field";
import { Typography } from "components/ui/typography";
import { CloseRoundedIcon, CheckCircleRoundedIcon, KeyboardArrowDownRoundedIcon } from "components/ui/icons";
import { ASK_ASYST_MESSAGE_MAX, AskAsystConst, AskAsystTopic, PHONE_COUNTRY_CODES } from "consts/ask-asyst.const";
import { useLocalized } from "shared/i18n";
import "./ask-asyst-modal.scss";

interface AskAsystModalProps {
    hide: () => void;
    defaultTopic?: AskAsystTopic;
}

type FormValues = {
    topic: AskAsystTopic | "";
    fullName: string;
    email: string;
    phoneCode: string;
    phone: string;
    company: string;
    jobTitle: string;
    subject: string;
    message: string;
};
type FieldName = keyof FormValues;
type FormErrors = Partial<Record<FieldName, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[\d\s-]{6,15}$/;

/** Modal "Let's Discuss your Business Challenge" (desain revamp 2026), dipanggil lewat askAsystModal(). */
export default function AskAsystModal({ hide, defaultTopic }: AskAsystModalProps) {
    const content = useLocalized(AskAsystConst);
    const initialValues: FormValues = { topic: defaultTopic ?? "", fullName: "", email: "", phoneCode: PHONE_COUNTRY_CODES[0], phone: "", company: "", jobTitle: "", subject: "", message: "" };
    const [values, setValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);

    const onChange = (name: FieldName, value: string) => {
        setValues(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
    };

    const validate = (): FormErrors => {
        const next: FormErrors = {};
        const required = (name: FieldName, label: string) => {
            if (!values[name].trim()) next[name] = content.requiredError.replace("{field}", label);
        };
        required("topic", content.topicLabel.replace(/\?$/, ""));
        required("fullName", content.fullName.label);
        required("email", content.email.label);
        required("company", content.company.label);
        required("message", content.message.label);
        if (values.email && !EMAIL_PATTERN.test(values.email.trim())) next.email = content.emailError;
        if (values.phone && !PHONE_PATTERN.test(values.phone.trim())) next.phone = content.phoneError;
        return next;
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const nextErrors = validate();
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length) return;

        // TODO: kirim ke endpoint backend saat API request demo sudah tersedia
        setSubmitted(true);
    };

    if (submitted) return <div className="ask-asyst ask-asyst--submitted" role="dialog" aria-modal="true">
        <CheckCircleRoundedIcon className="ask-asyst__success-icon" />
        <Typography className="ask-asyst__success-title">{content.successTitle}</Typography>
        <Button className="ask-asyst__back" onClick={() => hide()}>{content.back}</Button>
    </div>;

    const field = (name: FieldName, label: string, input: ReactNode, className = "") =>
        <div className={`ask-asyst__field ${className}`}>
            <Typography component="label" htmlFor={`ask-asyst-${name}`} className="ask-asyst__label">{label}</Typography>
            {input}
        </div>;

    const textInput = (name: FieldName, placeholder: string, extra: object = {}) =>
        <TextField
            id={`ask-asyst-${name}`}
            name={name}
            placeholder={placeholder}
            value={values[name]}
            onChange={e => onChange(name, e.target.value)}
            error={!!errors[name]}
            helperText={errors[name]}
            fullWidth
            size="small"
            className="ask-asyst__input"
            {...extra}
        />;

    return <form noValidate onSubmit={onSubmit} className="ask-asyst" role="dialog" aria-modal="true" aria-labelledby="ask-asyst-title">
        <div className="ask-asyst__header">
            <Typography id="ask-asyst-title" variant="h2" className="ask-asyst__title">{content.title}</Typography>
            <IconButton aria-label={content.close} size="small" className="ask-asyst__close" onClick={() => hide()}>
                <CloseRoundedIcon fontSize="small" />
            </IconButton>
        </div>

        <div className="ask-asyst__body">
            <RadioGroup asChild value={values.topic} onValueChange={value => onChange("topic", value)} aria-labelledby="ask-asyst-topic-label">
                <div className="ask-asyst__field">
                    <Typography id="ask-asyst-topic-label" className="ask-asyst__label">{content.topicLabel}</Typography>
                    <div className="ask-asyst__topics">
                        {content.topics.map(topic => {
                            const checked = values.topic === topic.value;
                            // Bukan <label>: Radix menyisipkan <input> tersembunyi di samping radio (di dalam form), sehingga
                            // <label> pembungkus akan terhubung ke dua kontrol (tidak valid HTML5). Perilaku label ditiru:
                            // klik di mana pun pada pill memfokuskan & memilih radio.
                            return <div
                                key={topic.value}
                                className={`ask-asyst__topic ${checked ? "is-checked" : ""}`}
                                onClick={event => {
                                    // hanya klik pada pill/teksnya — bukan radio itu sendiri atau event dari input tersembunyi Radix
                                    if (event.target !== event.currentTarget) return;
                                    const radio = event.currentTarget.querySelector<HTMLButtonElement>("[data-slot=radio]");
                                    radio?.focus();
                                    radio?.click();
                                }}
                            >
                                <RadioGroupItem value={topic.value} checked={checked} aria-label={topic.label} className="ask-asyst__radio" />
                                {topic.label}
                            </div>;
                        })}
                    </div>
                    {errors.topic && <Typography className="ask-asyst__error">{errors.topic}</Typography>}
                </div>
            </RadioGroup>
    
            <div className="ask-asyst__row">
                {field("fullName", content.fullName.label, textInput("fullName", content.fullName.placeholder))}
            </div>
    
            <div className="ask-asyst__row">
                {field("email", content.email.label, textInput("email", content.email.placeholder, { type: "email" }))}
                {field("phone", content.phone.label, <div className="ask-asyst__phone">
                    <Select
                        size="small"
                        className="ask-asyst__input ask-asyst__phone-code"
                        value={values.phoneCode}
                        onChange={value => onChange("phoneCode", value)}
                        aria-label="Country code"
                        IconComponent={KeyboardArrowDownRoundedIcon}
                        disablePortal
                        options={PHONE_COUNTRY_CODES.map(code => ({ value: code, label: `+${code}` }))}
                    />
                    {textInput("phone", content.phone.placeholder, { type: "tel" })}
                </div>)}
            </div>
    
            <div className="ask-asyst__row">
                {field("company", content.company.label, textInput("company", content.company.placeholder))}
                {field("jobTitle", content.jobTitle.label, <Select
                    id="ask-asyst-jobTitle"
                    size="small"
                    fullWidth
                    className="ask-asyst__input"
                    value={values.jobTitle}
                    onChange={value => onChange("jobTitle", value)}
                    error={!!errors.jobTitle}
                    helperText={errors.jobTitle}
                    IconComponent={KeyboardArrowDownRoundedIcon}
                    disablePortal
                    renderValue={value => value || <span className="ask-asyst__placeholder">{content.jobTitle.placeholder}</span>}
                    options={content.jobTitle.options.map(option => ({ value: option, label: option }))}
                />)}
            </div>
    
            {field("subject", content.subject.label, textInput("subject", content.subject.placeholder))}
    
            {field("message", content.message.label, <>
                {textInput("message", content.message.placeholder, {
                    multiline: true,
                    minRows: 4,
                    inputProps: { maxLength: ASK_ASYST_MESSAGE_MAX },
                })}
                <Typography className="ask-asyst__counter">{values.message.length}/{ASK_ASYST_MESSAGE_MAX}</Typography>
            </>)}
    
            <div>
                <Button type="submit" variant="contained" disableElevation className="ask-asyst__submit">{content.submit}</Button>
            </div>
        </div>
    </form>;
}
