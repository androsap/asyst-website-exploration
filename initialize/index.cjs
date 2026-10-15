const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PAGES_DIR = path.join(ROOT, "src/pages");
const NOINDEX_ROUTES = ["/about-us", "/search"];

const readEnv = (file, key) => {
    try {
        const match = fs.readFileSync(path.join(ROOT, file), "utf8").match(new RegExp(`^${key}=(.*)$`, "m"));
        return match?.[1].trim();
    } catch {
        return undefined;
    }
};

const SITE_URL = (process.env.VITE_SITE_URL || readEnv(".env.prd", "VITE_SITE_URL") || "https://www.asyst.co.id").replace(/\/$/, "");

const toParam = segment => segment.replace(/\[/g, ":").replace(/\]/g, "");

const collectPages = (dir = "") => fs.readdirSync(path.join(PAGES_DIR, dir)).flatMap(name => {
    if (!name.includes(".")) return collectPages(`${dir}/${name}`);
    const file = name.replace(/\.[^/.]+$/, "");
    const route = toParam(dir);
    return [{
        path: file === "index" ? (route || "/") : `${route}/${toParam(file)}`,
        file: `${dir}/${file}`,
    }];
});

const pages = collectPages();

const router = pages.map(({ path, file }) => `{"path":${JSON.stringify(path)},"component":lazyPage(() => import("../../pages${file}"))}`);
fs.writeFileSync(path.join(ROOT, "src/shared/router/router.tsx"), `
import { lazyPage } from "./lazy-page";
const router = [${router.join(",")}];
export default router;`);

const extract = (file, pattern) => [...fs.readFileSync(path.join(ROOT, file), "utf8").matchAll(pattern)].map(match => match[1]);
const caseStudySlugs = [...new Set(extract("src/consts/case-study.const.tsx", /^ {4}"([a-z0-9-]+)": \{$/gm))];
const jobSlugs = [...new Set(extract("src/consts/career.const.tsx", /^ {8}slug: "([a-z0-9-]+)",$/gm))];

const urls = [
    ...pages.map(page => page.path).filter(route => !route.includes(":") && !NOINDEX_ROUTES.includes(route)),
    ...caseStudySlugs.map(slug => `/case-study/${slug}`),
    ...jobSlugs.map(slug => `/career/jobs/${slug}`),
].sort((a, b) => a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b));

fs.writeFileSync(path.join(ROOT, "public/sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${SITE_URL}${url === "/" ? "/" : url}</loc></url>`).join("\n")}
</urlset>
`);

fs.writeFileSync(path.join(ROOT, "public/robots.txt"), `User-agent: *
Allow: /
Disallow: /search

Sitemap: ${SITE_URL}/sitemap.xml
`);

console.log(`Router (${pages.length} pages) and sitemap (${urls.length} URLs) generated.`);
