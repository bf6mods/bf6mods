import DefaultTheme from "vitepress/theme";
import "./style.css";
import { Theme } from "vitepress";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {},
} satisfies Theme;
