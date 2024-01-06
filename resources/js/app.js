import "./bootstrap";
import "../css/app.css";

import { createApp, h } from "vue";
import { Head, Link, createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import NProgress from "nprogress";
import { router } from "@inertiajs/vue3";
import Layout from "./Shared/Layout.vue";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    // title: (title) => `My app - ${title}`,
    title: (title) => "My app - " + title,

    resolve: (name) => {
        // resolvePageComponent(
        //     `./Pages/${name}.vue`,
        //     import.meta.glob("./Pages/**/*.vue")
        // ),
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        let page = pages[`./Pages/${name}.vue`];
        page.default.layout = page.default.layout || Layout;
        return page;
    },

    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Link", Link)
            .component("Head", Head)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        // The color of the progress bar...
        color: "#29d",
        // Whether to include the default NProgress styles...
        includeCSS: true,
        // Whether the NProgress spinner will be shown...
        showSpinner: true,
    },
});

router.on("start", () => NProgress.start());
router.on("finish", () => NProgress.done());
