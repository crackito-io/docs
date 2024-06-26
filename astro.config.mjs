import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";

export default defineConfig({
    site: "https://docs.crackito.io",
    integrations: [
        starlight({
            title: "Crackito",
            customCss: ["./src/styles/custom.css"],
            plugins: [starlightLinksValidator()],
            tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
            defaultLocale: "en",
            locales: {
                en: {
                    label: "English",
                },
                fr: {
                    label: "Français",
                },
            },
            logo: {
                light: "./src/assets/logo_docs.webp",
                dark: "./src/assets/logo_docs_light.webp",
                replacesTitle: true,
            },
            social: {
                github: "https://github.com/crackito-io/crackito",
            },
            sidebar: [
                {
                    label: "Overview",
                    link: "/overview",
                },
                {
                    label: "User",
                    autogenerate: { directory: "user" },
                },
                {
                    label: "Admin",
                    autogenerate: { directory: "admin" },
                },
                {
                    label: "Developper",
                    autogenerate: { directory: "developper" },
                },
            ],
        }),
    ],
    redirects: {
        "/": "/en",
    },
});
