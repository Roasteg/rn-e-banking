import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { Colors } from "../utils/Colors";
import Title from "../components/ui/Title";
import FlatButton from "../components/ui/FlatButton";
import { StackRoutes } from "../navigation/routes/StackRoutes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabsRoutes } from "../navigation/routes/BottomTabsRoutes";
import Subtitle from "../components/ui/Subtitle";
import Balance from "../components/ui/Balance";
type NavigationProp = CompositeScreenProps<
    BottomTabScreenProps<BottomTabsRoutes, "Home">,
    NativeStackScreenProps<StackRoutes>
>;
export default function HomeScreen({ navigation }: NavigationProp) {
    return (
        <SafeAreaView style={styles.rootContainer}>
            <View style={styles.rootContainer}>
                <Subtitle>Get started with e-banking</Subtitle>
                <Title>Your balance</Title>
                <Balance>1200.12</Balance>
                <FlatButton
                    icon="arrow-up-outline"
                    label="Send money"
                    onPress={() => {}}
                    style={{
                        backgroundColor: "#0171df",
                        marginTop: 24,
                        marginBottom: 6,
                    }}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <FlatButton
                            icon="arrow-down-outline"
                            label="Request money"
                            onPress={() => {}}
                            style={{ backgroundColor: "#121660" }}
                        />
                    </View>
                    <View style={styles.spacer} />
                    <View style={styles.buttonContainer}>
                        <FlatButton
                            icon="card-outline"
                            label="Add new card"
                            onPress={() => {
                                navigation.navigate("Cards");
                            }}
                            style={{ backgroundColor: "#3dae8c" }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    spacer: {
        width: 4,
    },
    getStartedText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: "row",
        height: 140,
    },
    buttonContainer: {
        flex: 1,
    },
});
