import { themeApp } from "../types/types";

export const seTheme=(theme)=>({
    type: themeApp.setTheme,
    theme
}) 