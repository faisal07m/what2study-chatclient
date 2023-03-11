type HEXColor = `#${string}`

interface Theme {
    success: HEXColor,
    warning: HEXColor,
    danger: HEXColor,
    backgroundColor: HEXColor,
}

const lightTheme: Theme = {
    success: "#00ff00",
    warning: "#ffcc00",
    danger: "#ff0000",
    backgroundColor: "#ffffff"
};

const darkTheme: Theme = {
    success: "#00ff00",
    warning: "#ffcc00",
    danger: "#ff0000",
    backgroundColor: "#000000"
};

export {lightTheme, darkTheme};