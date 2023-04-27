import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type BankCards = BankCard[];

const initialState: BankCards = [
    {
        carrier: "mastercard",
        color: "#09a337",
        expirationDate: "07/25",
        holderName: "John Doe",
        cardNumber: 5362931598869003,
    },
    {
        carrier: "mastercard",
        color: "#e64e12",
        expirationDate: "07/25",
        holderName: "John Doe",
        cardNumber: 5362931598869003,
    },
];

const bankcardsSlice = createSlice({
    name: "bankcards",
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<BankCard>) => {
            state.push(action.payload);
        },
    },
});

export default bankcardsSlice.reducer;
export const addCard = bankcardsSlice.actions.addCard;
