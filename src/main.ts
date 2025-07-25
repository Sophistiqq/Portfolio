import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";
import "@fontsource/montserrat";
import "@fontsource/nunito";
import "@fontsource/nunito-sans";
import "@fontsource/manrope";

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
