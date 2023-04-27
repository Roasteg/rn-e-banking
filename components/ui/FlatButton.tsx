import { StyleSheet, Text, View, Pressable, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../utils/Colors";

type Props = {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    onPress: () => void;
    style: ViewStyle;
};

export default function FlatButton(props: Props) {
    return (
        <Pressable onPress={props.onPress}>
            <View style={[styles.rootContainer, props.style]}>
                <View style={styles.topIconContainer}>
                    <Ionicons name={props.icon} size={28} color="white" />
                </View>
                <View style={styles.labelAndIconContainer}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>{props.label}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Ionicons name="arrow-forward" size={16} />
                    </View>
                </View>
            </View>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        height: 180,
        borderRadius: 20,
        borderBottomRightRadius: 2,
        justifyContent: "space-between",
        padding: 16,
    },
    topIconContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.329)",
        alignSelf: "flex-start",
        borderRadius: 46,
        padding: 12,
    },
    labelAndIconContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    labelContainer: {
        flexWrap: "wrap",
    },
    label: {
        color: Colors.textDefault,
        fontSize: 16,
        width: 90,
    },
    iconContainer: {
        backgroundColor: Colors.textDefault,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        padding: 4,
    },
});
