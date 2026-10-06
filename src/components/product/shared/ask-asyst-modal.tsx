import { FormEvent, ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
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

const selectProps = { IconComponent: KeyboardArrowDownRoundedIcon, displayEmpty: true, MenuProps: { disablePortal: true } };

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

    if (submitted) return <Box className="ask-asyst ask-asyst--submitted" role="dialog" aria-modal="true">
        <CheckCircleRoundedIcon className="ask-asyst__success-icon" />
        <Typography className="ask-asyst__success-title">{content.successTitle}</Typography>
        <Button className="ask-asyst__back" onClick={() => hide()}>{content.back}</Button>
    </Box>;

    const field = (name: FieldName, label: string, input: ReactNode, className = "") =>
        <Box className={`ask-asyst__field ${className}`}>
            <Typography component="label" htmlFor={`ask-asyst-${name}`} className="ask-asyst__label">{label}</Typography>
            {input}
        </Box>;

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

    return <Box component="form" noValidate onSubmit={onSubmit} className="ask-asyst" role="dialog" aria-modal="true" aria-labelledby="ask-asyst-title">
        <Box className="ask-asyst__header">
            <Typography id="ask-asyst-title" variant="h2" className="ask-asyst__title">{content.title}</Typography>
            <IconButton aria-label={content.close} size="small" className="ask-asyst__close" onClick={() => hide()}>
                <CloseRoundedIcon fontSize="small" />
            </IconButton>
        </Box>

        <Box className="ask-asyst__body">
            <Box className="ask-asyst__field" role="radiogroup" aria-labelledby="ask-asyst-topic-label">
                <Typography id="ask-asyst-topic-label" className="ask-asyst__label">{content.topicLabel}</Typography>
                <Box className="ask-asyst__topics">
                    {content.topics.map(topic => {
                        const checked = values.topic === topic.value;
                        return <Box component="label" key={topic.value} className={`ask-asyst__topic ${checked ? "is-checked" : ""}`}>
                            <Radio size="small" checked={checked} value={topic.value} name="topic" onChange={() => onChange("topic", topic.value)} className="ask-asyst__radio" />
                            {topic.label}
                        </Box>;
                    })}
                </Box>
                {errors.topic && <Typography className="ask-asyst__error">{errors.topic}</Typography>}
            </Box>
    
            <Box className="ask-asyst__row">
                {field("fullName", content.fullName.label, textInput("fullName", content.fullName.placeholder))}
            </Box>
    
            <Box className="ask-asyst__row">
                {field("email", content.email.label, textInput("email", content.email.placeholder, { type: "email" }))}
                {field("phone", content.phone.label, <Box className="ask-asyst__phone">
                    <TextField
                        select
                        value={values.phoneCode}
                        onChange={e => onChange("phoneCode", e.target.value)}
                        size="small"
                        className="ask-asyst__input ask-asyst__phone-code"
                        inputProps={{ "aria-label": "Country code" }}
                        SelectProps={selectProps}
                    >
                        {PHONE_COUNTRY_CODES.map(code => <MenuItem key={code} value={code}>+{code}</MenuItem>)}
                    </TextField>
                    {textInput("phone", content.phone.placeholder, { type: "tel" })}
                </Box>)}
            </Box>
    
            <Box className="ask-asyst__row">
                {field("company", content.company.label, textInput("company", content.company.placeholder))}
                {field("jobTitle", content.jobTitle.label, textInput("jobTitle", "", {
                    select: true,
                    SelectProps: {
                        ...selectProps,
                        renderValue: (value: unknown) => value
                            ? value as string
                            : <span className="ask-asyst__placeholder">{content.jobTitle.placeholder}</span>,
                    },
                    children: content.jobTitle.options.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>),
                }))}
            </Box>
    
            {field("subject", content.subject.label, textInput("subject", content.subject.placeholder))}
    
            {field("message", content.message.label, <>
                {textInput("message", content.message.placeholder, {
                    multiline: true,
                    minRows: 4,
                    inputProps: { maxLength: ASK_ASYST_MESSAGE_MAX },
                })}
                <Typography className="ask-asyst__counter">{values.message.length}/{ASK_ASYST_MESSAGE_MAX}</Typography>
            </>)}
    
            <Box>
                <Button type="submit" variant="contained" disableElevation className="ask-asyst__submit">{content.submit}</Button>
            </Box>
        </Box>
    </Box>;
}
