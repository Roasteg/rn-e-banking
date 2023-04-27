import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import UserAvatar from "./UserAvatar";
import { Colors } from "../../../utils/Colors";
import ModeSwitch from "../ModeSwitch/ModeSwitch";
export default function AppBar() {
    return (
        <View style={styles.rootContainer}>
            <View>
                <ModeSwitch
                    switchItems={[
                        {
                            label: "Wallet",
                            icon: "wallet",
                        },
                        {
                            label: "Stats",
                            icon: "stats-chart",
                        },
                    ]}
                />
            </View>
            <View>
                <UserAvatar />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.backgroundDefault,
        padding: 12,
        paddingTop: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
