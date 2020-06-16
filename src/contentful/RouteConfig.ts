import linkHandler from "./handlers/LinkHandler";
import { RouteGeneratorConfig } from "./RouteGenerator";

const config: RouteGeneratorConfig = {
    pages: [
        { contentType: "page", parentField: "parentPage" },
        { contentType: "article", parentPath: "project" },
        { contentType: "category" },
    ],
    cleanupConfig: {
        handlers: {
            link: linkHandler,
        },
        ignoreProps: ["sys"],
        ignoreTypes: [],
    },
    defaultLocale: "en-US",
};

export default config;
