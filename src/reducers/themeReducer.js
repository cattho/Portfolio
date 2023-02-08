import { themeApp } from "../types/types"

const initialTheme = {
    theme: 'dark'
}

export const themeReducer = (state = initialTheme, action) => {
    switch (action.type) {
        case setTheme:
            return {
                ...state,
                theme: action.theme
            };
        default:
            return state;
    }
}