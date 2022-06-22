const PRIMARY_COLOR = "#4a4b4d";
const SECONDARY_COLOR = "#7C7D7E";

const BACKGROUND_COLOR = "#F2F4F9";
const INPUT_BACKGROUND = "#e3e3e3";
const BACKGROUND_COLOR_ANDROID = "rgb(232, 237, 250)";
const DARK_BLUE = "#0a2d51";
const DIVIDER = "#EBEBEB";
const WHITE = "#FFFFFF";
const BLACK = "#000000";
const LIGHT_BLACK = "#2B2B2B";
const TEXTCOLOR_DARKGREY = "#7D8690";
const DISABLED = "#7D8690";
const TEXTCOLOR_GREEN = "#04C424";
const FACEBOOK = "#3B5998";
const GOOGLE = "#DE5246";
const ERROR = "#FF0000";
const SUCCESS = "#62D19E";

const WHITE_GRAY = "#E6E6E6";
const OVERLAY = "rgba(0, 0, 0, 0.7)";
const OVERLAYHALF = "rgba(0, 0, 0, 0.5)";
const OVERLAYLIGHT = "rgba(0, 0, 0, 0.2)";

const LIGHT_YELLOW = "#FCE8BC";
const LIGHT_RED = "#FFD7D9";
const LIGHT_GREY = "#f0f0f0";
const LIGHT_PINK = "#ed9999";
const MEDIUM_GREY = "#8B8B8B";

const TRANSPARENT = "transparent";
const RED = "#f31919";
const YELLOW = "#d6ba01";
const PURPLE = "#7d24c1";
const ORANGE = "#fc6011";
const GRAY = "#7B7B7B";
const TOMATO = "tomato";

export default {
  brand: {
    primary: PRIMARY_COLOR,
  },
  text: {
    label: BLACK,
    labelWhite: WHITE,
    labelGrey: TEXTCOLOR_DARKGREY,
    primaryLabel: PRIMARY_COLOR,
    secondaryLabel: SECONDARY_COLOR,
    disabledLabel: TEXTCOLOR_DARKGREY,
    heading: BLACK,
    input: BLACK,
    primaryBody: WHITE,
    secondaryBody: TEXTCOLOR_DARKGREY,
    placeholder: TEXTCOLOR_DARKGREY,
    inputBackground: INPUT_BACKGROUND,
    title: BLACK,
    brandTitle: PRIMARY_COLOR,
    subtitle: TEXTCOLOR_DARKGREY,
    overlayTitle: WHITE,
    error: ERROR,
  },
  border: {
    active: PRIMARY_COLOR,
    disabled: DISABLED,
  },
  ui: {
    background: BLACK,
    backgroundAndroid: BACKGROUND_COLOR_ANDROID,
    backgroundWhite: WHITE,
    backgroundPrimary: DARK_BLUE,

    overlay: OVERLAY,
    overlayMedium: OVERLAYHALF,
    overlayLight: OVERLAYLIGHT,

    dotActive: PRIMARY_COLOR,
    dotInactive: DISABLED,
  },
  navigation: {
    bottomTabBarBackground: WHITE,
    bottomTabBarText: TEXTCOLOR_DARKGREY,
    bottomTabBarSelected: PRIMARY_COLOR,
    topNavigationBarBackground: WHITE,
    topNavigationBarText: PRIMARY_COLOR,
    topTabBarUnderline: WHITE,
  },
  custom: {
    facebook: FACEBOOK,
    google: GOOGLE,
    white: WHITE,
    black: BLACK,
    red: RED,
    tomato: TOMATO,

    light_yellow: LIGHT_YELLOW,
    light_black: LIGHT_BLACK,
    light_grey: LIGHT_GREY,
    light_pink: LIGHT_PINK,

    medium_grey: MEDIUM_GREY,

    yellow: YELLOW,
    purple: PURPLE,
    orange: ORANGE,
    gray: GRAY,
    transparent: TRANSPARENT,
    success: SUCCESS,
  },
};
