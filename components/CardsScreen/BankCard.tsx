import { StyleSheet, Text, View } from "react-native";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import { Fontisto } from "@expo/vector-icons";
import { calculateBrightness } from "../../utils/Helpers";

type Props = BankCard;

export default function BankCard(props: Props) {
    const cardColorBrightness: number = calculateBrightness(props.color);

    const textColor = cardColorBrightness > 125 ? "black" : "white";
    return (
        <View style={[styles.rootContainer, { backgroundColor: props.color }]}>
            <View style={styles.numberAndMakerContainer}>
                <Title size="sm" color={textColor}>
                    **** {props.cardNumber.toString().substring(6, 10)}
                </Title>
                <Fontisto name="mastercard" size={46} color={textColor} />
            </View>
            <View style={styles.expirationAndHolderContainer}>
                <View style={styles.expirationContainer}>
                    <Subtitle>{props.expirationDate}</Subtitle>
                </View>
                <View>
                    <Title size="sm" color={textColor}>
                        {props.holderName}
                    </Title>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        height: 220,
        borderRadius: 20,
        padding: 16,
        justifyContent: "space-between",
        shadowColor: "black",
    },
    numberAndMakerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 6,
    },
    expirationAndHolderContainer: {
        marginBottom: 12,
    },
    expirationContainer: {
        marginBottom: 12,
    },
});
