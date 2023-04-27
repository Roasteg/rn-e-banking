import { StyleSheet, Text, View, ViewProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TSwitchItem } from "../../../types/SwitchItem";
import { Colors } from "../../../utils/Colors";

type Props = {
    switchItem: TSwitchItem;
    active: boolean;
    viewProps: ViewProps;
};

export default function SwitchItem(props: Props) {
    return (
        <View style={styles.switchItemContainer} {...props.viewProps}>
            <Ionicons
                name={props.switchItem.icon}
                color={props.active ? "white" : "black"}
                size={16}
            />
            {props.active && (
                <Text style={styles.switchItemText}>
                    {props.switchItem.label}
                </Text>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    switchItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 4
    },
    switchItemText: {
        color: Colors.textDefault,
    },
});
