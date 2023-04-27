import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../utils/Colors";

type Props = {
    children: React.ReactNode;
    size?: "lg" | "md" | "sm";
};

export default function Subtitle(props: Props) {
    return (
        <View>
            <Text style={[styles.subtitle, styles[props.size ?? "md"]]}>
                {props.children}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    subtitle: {
        color: Colors.inactive,
    },
    lg: {
        fontSize: 22,
    },
    md: {
        fontSize: 16,
    },
    sm: {
        fontSize: 10,
    },
});
