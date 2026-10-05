import dayjs from "dayjs";
import { CAREER_JOBS_PATH, CareerFilterKey, CareerJob } from "consts/career.const";

/** Filter aktif di /career/jobs; disimpan sebagai query param (`q` = kata kunci) */
export type CareerFilters = Partial<Record<CareerFilterKey | "q", string>>;

export const CAREER_FILTER_KEYS: (CareerFilterKey | "q")[] = ["q", "department", "location", "experience", "type", "skill"];

export const readCareerFilters = (params: URLSearchParams): CareerFilters =>
    CAREER_FILTER_KEYS.reduce<CareerFilters>((result, key) => {
        const value = params.get(key);
        if (value) result[key] = value;
        return result;
    }, {});

/** Hanya filter yang terisi yang masuk ke URL (nilai tidak di-trim agar spasi saat mengetik tidak hilang) */
export const careerFilterParams = (filters: CareerFilters) => {
    const params = new URLSearchParams();
    CAREER_FILTER_KEYS.forEach(key => {
        const value = filters[key];
        if (value?.trim()) params.set(key, value);
    });
    return params;
};

export const careerJobsLink = (filters: CareerFilters = {}) => {
    const query = careerFilterParams(filters).toString();
    return query ? `${CAREER_JOBS_PATH}?${query}` : CAREER_JOBS_PATH;
};

const JOB_FIELDS: Record<CareerFilterKey, (job: CareerJob) => string[]> = {
    department: job => [job.department],
    location: job => [job.location],
    experience: job => [job.experience],
    type: job => [job.employmentType],
    skill: job => [...job.skills, ...job.tags],
};

export const filterCareerJobs = (jobs: CareerJob[], filters: CareerFilters) => {
    const keyword = filters.q?.trim().toLowerCase();
    return jobs.filter(job =>
        (Object.keys(JOB_FIELDS) as CareerFilterKey[]).every(key => {
            const value = filters[key];
            return !value || JOB_FIELDS[key](job).includes(value);
        }) &&
        (!keyword || [job.title, job.department, job.summary, ...job.skills, ...job.tags].some(text => text.toLowerCase().includes(keyword)))
    );
};

export const formatJobDate = (date: string) => {
    const parsed = dayjs(date);
    return parsed.isValid() ? parsed.format("D MMMM YYYY") : "";
};
