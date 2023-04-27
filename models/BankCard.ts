class BankCard {
    cardNumber: number;
    carrier: string;
    holderName: string;
    expirationDate: string;
    color: string;

    constructor(
        number: number,
        brand: string,
        holderName: string,
        expirationDate: string,
        color: string
    ) {
        this.cardNumber = number;
        this.carrier = brand;
        this.holderName = holderName;
        this.expirationDate = expirationDate;
        this.color = color;
    }
}