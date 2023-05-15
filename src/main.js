import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import "@/assets/main.pcss"
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

let app = createApp(App)

Sentry.init({
    app,
    dsn: "https://34be1aa5585a43949d1a62410f282d06@o4505171947945984.ingest.sentry.io/4505171952533504",
    // integrations: [
    //     new Sentry.BrowserTracing({
    //     routingInstrumentation: Sentry.vueRouterInstrumentation(route),
    //     }),
    //     new Sentry.Replay(),
    // ],
    // Performance Monitoring
    release: __SENTRY_RELEASE__,
    tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
    // Session Replay
    trackComponents: true,
    logErrors: true,
    integrations: [new BrowserTracing()],
});
app.use(router)
app.mount('#app')
