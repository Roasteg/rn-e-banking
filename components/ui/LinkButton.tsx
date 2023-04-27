import { StyleSheet, Text, Pressable } from "react-native";
import { Colors } from "../../utils/Colors";

type Props = {
    children: React.ReactNode;
    onPress: () => void;
    type?: "highlighted" | "default";
};

export default function LinkButton(props: Props) {
    return (
        <Pressable>
            <Text
                style={[styles.textButtonText, styles[props.type ?? "default"]]}
            >
                {props.children}
            </Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    textButtonText: {
        textDecorationStyle: "solid",
        textDecorationLine: "underline",
    },
    default: {
        color: Colors.inactive,
    },
    highlighted: {
        color: Colors.accent,
    },
});
