const DarkModeReducer = (state, action) => {
    switch (action) {
        case "LIGHT": return { darkMode: false }
        case "DARK": return { darkMode: true }
        case "TOGGLE": return { darkMode: !state.darkMode }
        default: return false;
    }
}

export default DarkModeReducer;