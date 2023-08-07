import { UNITS } from "../constant";

export const getOpposite = (unit) => {
    return unit === UNITS.celcius ? UNITS.faranheit : UNITS.celsius;
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

