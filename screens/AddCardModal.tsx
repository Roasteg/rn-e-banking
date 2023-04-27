import {
    Button,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    TextInput,
    TextStyle,
    View,
} from "react-native";
import {
    calculateBrightness,
    getCardCarrier,
    getRandomHexColor,
} from "../utils/Helpers";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { StackRoutes } from "../navigation/routes/StackRoutes";
import React, { useLayoutEffect, useState } from "react";
import { Colors } from "../utils/Colors";
import { Fontisto } from "@expo/vector-icons";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { addCard } from "../store/slices/bankcards";

type NavigationProp = NativeStackScreenProps<StackRoutes, "AddNewCard">;

export default function AddCardModal({ route, navigation }: NavigationProp) {
    const [cardNumber, setCardNumber] = useState<string>("");
    const [cardExpiration, setCardExpirtaion] = useState<string>("");
    const [cardCarrier, setCardCarrier] = useState<string>("");
    const [cardHolder, setCardHolder] = useState<string>("");
    const [cardColor] = useState<string>(getRandomHexColor());
    const [cardCarrierIcon, setCardCarrierIcon] =
        useState<keyof typeof Fontisto.glyphMap>("question");

    const dispatch: AppDispatch = useDispatch();

    const cardLength: number = 19;

    const expirationLength: number = 5;

    const cardBackgroundBrightness = calculateBrightness(cardColor);

    const cardTextColor =
        cardBackgroundBrightness > 125 ? "black" : Colors.textDefault;

    const cardPlaceholderColor =
        cardBackgroundBrightness > 125
            ? Colors.inactiveStrong
            : Colors.inactive;

    const cardTextColorStyle: TextStyle = {
        color: cardTextColor,
        borderBottomColor: cardTextColor,
    };

    const onCardNumberChangeHandler = (enteredCard: string) => {
        const formattedCardNumber = enteredCard.replace(
            /(\d{4})(?=\d)/g,
            "$1 "
        );
        const carrier = getCardCarrier(enteredCard);
        setCardNumber(formattedCardNumber);
        if (carrier in Fontisto.glyphMap) {
            const carrierIcon = carrier as keyof typeof Fontisto.glyphMap;
            setCardCarrier(carrier);
            setCardCarrierIcon(carrierIcon);
        } else {
            setCardCarrier("");
            setCardCarrierIcon("question");
        }
        if (formattedCardNumber.length === cardLength) {
            Keyboard.dismiss();
        }
    };

    const onCardExpirationChangeHandler = (expiration: string) => {
        const formattedCardExpiration = expiration.replace(
            /(\d{2})(?=\d)/g,
            "$1/"
        );
        setCardExpirtaion(formattedCardExpiration);
        if (formattedCardExpiration.length === expirationLength) {
            Keyboard.dismiss();
        }
    };
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Button
                        title="Add"
                        onPress={() => {
                            dispatch(
                                addCard({
                                    cardNumber: parseInt(cardNumber),
                                    carrier: cardCarrier,
                                    expirationDate: cardExpiration,
                                    holderName: cardHolder,
                                    color: cardColor,
                                })
                            );
                            navigation.goBack();
                        }}
                    />
                );
            },
        });
    });

    return (
        <KeyboardAvoidingView style={styles.rootContainer}>
            <View
                style={[styles.cardContainer, { backgroundColor: cardColor }]}
            >
                <View style={styles.cardNumberAndLogoContainer}>
                    <TextInput
                        placeholder="Card number"
                        keyboardType="number-pad"
                        placeholderTextColor={cardPlaceholderColor}
                        onChangeText={(text) => onCardNumberChangeHandler(text)}
                        style={[
                            styles.textInput,
                            styles.cardInput,
                            cardTextColorStyle,
                        ]}
                        maxLength={cardLength}
                        value={cardNumber}
                    />
                    <Fontisto
                        name={cardCarrierIcon ?? "question"}
                        size={46}
                        color={cardTextColor}
                    />
                </View>
                <View>
                    <View>
                        <TextInput
                            placeholder="MM/YY"
                            value={cardExpiration}
                            placeholderTextColor={cardPlaceholderColor}
                            onChangeText={onCardExpirationChangeHandler}
                            maxLength={expirationLength}
                            keyboardType="number-pad"
                            style={[
                                styles.textInput,
                                styles.expirationDate,
                                cardTextColorStyle,
                            ]}
                        />
                        <TextInput
                            placeholderTextColor={cardPlaceholderColor}
                            placeholder="Card holder"
                            value={cardHolder}
                            onChangeText={(text) => setCardHolder(text)}
                            style={[styles.textInput, cardTextColorStyle]}
                        />
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        padding: 12,
    },
    cardContainer: {
        padding: 16,
        height: 220,
        borderRadius: 20,
        justifyContent: "space-between",
    },
    cardNumberAndLogoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textInput: {
        padding: 6,
        borderBottomWidth: 1,
        fontSize: 18,
    },
    cardInput: {
        width: "65%",
    },
    expirationDate: {
        width: 75,
        marginBottom: 12,
    },
    shrink: {
        alignSelf: "flex-start",
    },
});
