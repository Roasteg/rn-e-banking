import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/Colors";
import { StackRoutes } from "../navigation/routes/StackRoutes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ActionButton from "../components/ui/ActionButton";
import Title from "../components/ui/Title";
import Subtitle from "../components/ui/Subtitle";
import LinkButton from "../components/ui/LinkButton";
import CardsStack from "../components/CardsScreen/CardsStack";
import { StatusBar } from "expo-status-bar";

type NavigationProp = NativeStackScreenProps<StackRoutes, "Cards">;

export default function CardsScreen({ navigation }: NavigationProp) {
    const bankCards = useSelector((state: RootState) => state.bankCards);
    return (
        <>
            <StatusBar style="light" />
            <View style={styles.rootContainer}>
                <View style={styles.cardsMainContainer}>
                    <View style={styles.headerContainer}>
                        <ActionButton
                            icon="arrow-back"
                            onPress={() => {
                                navigation.goBack();
                            }}
                        />
                        <Title size="md">Cards</Title>
                        <ActionButton icon="scan" onPress={() => {}} />
                    </View>
                    <View style={styles.subtitleContainer}>
                        <Subtitle>Your cards</Subtitle>
                    </View>
                    <View style={styles.cardsContainer}>
                        <CardsStack cards={bankCards} />
                    </View>
                    <View style={styles.linkButtonsContainer}>
                        <LinkButton onPress={() => {}}>
                            Privacy Policy
                        </LinkButton>
                        <LinkButton onPress={() => {}}>Terms of use</LinkButton>
                    </View>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: Colors.accent,
    },
    cardsMainContainer: {
        flex: 1,
        backgroundColor: "white",
        marginTop: 60,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 12,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
    },
    subtitleContainer: {
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: 24,
    },
    cardsContainer: {
        flex: 1,
    },
    linkButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingBottom: 24,
    },
});
