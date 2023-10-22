
const colors = {
    transparent: "transparent",
    white: "#FFFFFF",
    black: "#000000",
    darkGreen: "#203035",
    green: "#02CB63"
};

const breakpoints = {
    mobileSmall: "320px",
    mobileMedium: "375px",
    mobileLarge: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopLarge: "1440px",
    desktop: "2560px",
};

const sizes = {
    maxWidth: "1200px",
    minWidth: "280px",
    largePadding: "64px",
    mediumPadding: "28px",
    smallPadding: "18px",
    navbarHeight: "60px",
    listMarginRight: "1rem",
    largeFontSize: "1.3rem",
    bold: "600",
    spacing: "2rem",
    headlineFontSize: "2.75rem",
    headlineLetterSpacing: "-1px",
    sideNavWidth: "200px",
};

const inputs = {
    textarea: {
        width: "100%",
        height: "10rem",
    },
    input: {
        width: "100%",
        height: "2.5rem",
    },
    borderRadius: "1px",
    fontSize: "0.875rem",
    borderWidth: "2px",
    backgroundColor: colors.white,
    borderColor: colors.borderColor,
    borderFocusColor: colors.primary,
    borderOutlineColor: colors.primary,
    disabledColor: colors.borderColor,
    labelFontSize: "0.625rem",
    labelTransform: "uppercase",
    errorFontSize: "0.675rem",
    errorColor: colors.red,
    labelFontWeight: "500",
    labelMarginBottom: "0.25rem",
    labelLetterSpacing: "0.5px",
};

const theme = {
    colors,
    sizes,
    inputs,
    breakpoints,
    container: {
        backgroundColor: colors.white,
    },
    main: {
        padding: "1rem",
    },
    footer: {
        backgroundColor: colors.black,
        padding: "3rem",
        color: colors.white,
    },
    frame: {
        maxWidth: sizes.maxWidth,
        minWidth: sizes.minWidth,
        largePadding: sizes.largePadding,
        smallPadding: sizes.smallPadding,
        mediumPadding: sizes.mediumPadding,
    },
    navbar: {
        height: sizes.navbarHeight,
    },
    menu: {
        listMarginRight: sizes.listMarginRight,
        largeFontSize: sizes.largeFontSize,
        bold: sizes.bold,
    },
    button: {
        borderRadius: "2px",
        borderWidth: "1px",
        borderColor: colors.primary,
        disabledBackgroundColor: colors.shadeGrey,
        disabledColor: colors.white,
        backgroundColor: colors.primary,
        color: colors.white,
        letterSpacing: "0.25px",
        fontSize: "0.6875rem",
        fontWeight: "500",
        transform: "uppercase",
        horizontalPadding: "24px",
        verticalPadding: "12px",
        minHeight: "44px",
    },
    navlink: {
        fontWeight: "500",
        fontSize: "0.75rem",
        letterSpacing: "0px",
        textTransform: "capitalize"
    },
};

export const devices = {
    mobileSmall: `(max-width: ${breakpoints.mobileSmall})`,
    mobileMedium: `(max-width: ${breakpoints.mobileMedium})`,
    mobileLarge: `(max-width: ${breakpoints.mobileLarge})`,
    tablet: `(max-width: ${breakpoints.tablet})`,
    laptop: `(max-width: ${breakpoints.laptop})`,
    laptopLarge: `(max-width: ${breakpoints.laptopLarge})`,
    desktop: `(max-width: ${breakpoints.desktop})`,
};

export default theme;
