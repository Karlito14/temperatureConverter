import { UNITS } from "../constant";

export const getOpposite = (unit) => {
    return unit === UNITS.celcius ? UNITS.faranheit : UNITS.celcius;
}

export const convertTemperature = (unit, value) => {
    if(unit === UNITS.celcius) {
        const result = (value * 1.8 + 32).toFixed(1);
        return isNaN(result) ? "" : result;
    } else {
        const result = ((value - 32) / 1.8).toFixed(1);
        return isNaN(result) ? "" : result;
    }
}

export const isIceTemperature = (value, unit) => {
    if(unit === UNITS.celcius) {
        return value <= 0;
    }
    if(unit === UNITS.faranheit) {
        return value <= 32;
    }
};

