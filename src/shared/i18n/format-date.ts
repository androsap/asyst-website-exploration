import dayjs from "dayjs";
import "dayjs/locale/id";
import type { Language } from ".";

export const formatDate = (date: string, format: string, language: Language) => {
    const parsed = dayjs(date);
    return parsed.isValid() ? parsed.locale(language === "ID" ? "id" : "en").format(format) : "";
};
