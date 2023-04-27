import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../utils/Colors";
export default function UserAvatar() {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.userProfilePicContainer}>
                <Ionicons name="person" size={24} color="black" />
            </View>
            <View style={styles.addNewProfileButton}>
                <Ionicons name="add" size={16} color="black" />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        position: "relative",
    },
    userProfilePicContainer: {
        padding: 6,
        paddingHorizontal: 7,
        position: "absolute",
        zIndex: 20,
        backgroundColor: Colors.tertiary500,
        top: -4,
        left: -30,
        borderRadius: 100,
    },
    addNewProfileButton: {
        padding: 6,
        borderRadius: 100,
        backgroundColor: "white"
    }
});
