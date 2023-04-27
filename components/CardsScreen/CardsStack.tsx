import { ScrollView, StyleSheet, Text, View } from "react-native";
import BankCard from "./BankCard";
import { Colors } from "../../utils/Colors";
import ActionButton from "../ui/ActionButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackRoutes } from "../../navigation/routes/StackRoutes";
import { useNavigation } from "@react-navigation/native";

type Props = {
    cards: BankCard[];
};

type NavigationProp = NativeStackNavigationProp<StackRoutes>;

export default function CardsStack(props: Props) {
    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={styles.rootContainer}>
            <View style={styles.cardsStackContainer}>
                <View style={styles.addNewCard}>
                    <View style={styles.addNewCardInnerContainer}>
                        <Text style={styles.addNewCardText}>Add new card</Text>
                        <ActionButton
                            icon="add"
                            iconColor="white"
                            style={{
                                borderStyle: "dashed",
                                borderWidth: 1,
                                borderColor: "#ffffffbe",
                                backgroundColor: "transparent",
                            }}
                            onPress={() => {
                                navigation.navigate("AddNewCard");
                            }}
                        />
                    </View>
                </View>
                <ScrollView style={styles.cardsStack} bounces={false}>
                    {props.cards.map((card, index, self) => {
                        return (
                            <View
                                key={index}
                                onLayout={() => {}}
                                style={[
                                    styles.cardInStack,
                                    {
                                        top: index * 80,
                                        zIndex: index,
                                    },
                                ]}
                            >
                                <BankCard {...card} />
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {},
    cardsStackContainer: {
        position: "relative",
    },
    addNewCard: {
        padding: 16,
        backgroundColor: Colors.tertiary500,
        borderRadius: 30,
        position: "absolute",
        width: "100%",
        height: 120,
    },
    addNewCardInnerContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    addNewCardText: {
        color: "white",
        fontWeight: "500",
        fontSize: 21,
    },
    cardsStack: {
        height: "100%",
        top: 80,
    },
    cardInStack: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },
});
