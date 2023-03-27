type HEXColor = `#${string}`;

interface Theme {
    success: HEXColor;
    warning: HEXColor;
    danger: HEXColor;
    backgroundColor: HEXColor;
}

const lightTheme1: Theme = {
    success: "#00ff00",
    warning: "#ffcc00",
    danger: "#ff0000",
    backgroundColor: "#ffffff",
};

const darkTheme1: Theme = {
    success: "#00ff00",
    warning: "#ffcc00",
    danger: "#ff0000",
    backgroundColor: "#000000",
};

export { lightTheme1, darkTheme1 };
