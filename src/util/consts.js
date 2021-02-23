import WaveDesktop from '../assets/Desktop/waveDesktop.svg';
import WaveIPadMiniHor from '../assets/IPadMini/Horizontal/waveIPadMini.svg';
import WaveIPadMiniVer from '../assets/IPadMini/Vertical/waveIPadMini.svg';
import WaveIPhone8 from '../assets/IPhone8/waveIPhone8.svg';

import AppsDesktop from '../assets/Desktop/appsDesktop.svg';
import AppsIPadMiniHor from '../assets/IPadMini/Horizontal/appsIPadMini.svg';

export const IPhone8Viewport = {
    width: 375,
    height: 667,
};

export const IPadMiniViewPort = {
    horizontal: {
        width: 1024,
        height: 768,
    },
    vertical: {
        width: 768,
        height: 1024,
    },
};

export const WaveSizes = {
    lg: WaveDesktop,
    md: WaveIPadMiniHor,
    sm: WaveIPadMiniVer,
    xs: WaveIPhone8,
};

export const AppSizes = {
    lg: AppsDesktop,
    md: AppsIPadMiniHor,
};

export const alts = {
    spring: "spring.svg",
    plus: "plus.svg",
    gallery: "gallery.svg",
    notes: "notes.svg",
    weather: "weather.svg"
}