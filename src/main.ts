import "./lib/orange.scss";
import "./index.scss";
import './lib/svg.js'
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "github-markdown-css";
const app = createApp(App);
app.use(router);
app.mount("#app");
