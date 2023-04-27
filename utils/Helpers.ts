import { RGB } from "../types/RGB";

function hexToRgb(hex: string): RGB {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return {
        r: parseInt(result![1], 16),
        g: parseInt(result![2], 16),
        b: parseInt(result![3], 16),
    };
}

function calculateBrightness(color: string): number {
    const convertedColor = hexToRgb(color);
    return Math.round(
        (convertedColor.r * 299 +
            convertedColor.g * 587 +
            convertedColor.b * 114) /
            1000
    );
}

function getRandomHexColor(): string {
    return (
        "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
    );
}

function getCardCarrier(cardNumber: string): string {
    const cardCarriersRe: { [key: string]: RegExp } = {
        maestro:
            /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
        dankort: /^(5019)\d+$/,
        interpayment: /^(636)\d+$/,
        unionpay: /^(62|88)\d+$/,
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
    };
    for (const carrier in cardCarriersRe) {
        if (cardCarriersRe[carrier].test(cardNumber.replace(/\s/g, ""))) {
            return carrier;
        }
    }
    return "";
}

export { calculateBrightness, getRandomHexColor, getCardCarrier };
