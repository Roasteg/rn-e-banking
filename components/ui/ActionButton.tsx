import { StyleSheet, Text, View, Pressable, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../utils/Colors";

type Props = {
    icon: keyof typeof Ionicons.glyphMap;
    style?: ViewStyle;
    iconColor?: string;
    onPress: () => void;
};

export default function ActionButton(props: Props) {
    return (
        <Pressable
            style={[styles.rootContainer, props.style]}
            onPress={props.onPress}
        >
            <Ionicons
                name={props.icon}
                color={props.iconColor ?? "black"}
                size={24}
            />
        </Pressable>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.actionButtonDefault,
        padding: 14,
        borderRadius: 60,
    },
});
