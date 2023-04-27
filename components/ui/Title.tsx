import { StyleSheet, Text, View } from "react-native";

type Props = {
    children: React.ReactNode;
    size?: "lg" | "md" | "sm";
    color?: string;
};

export default function Title(props: Props) {
    return (
        <View>
            <Text
                style={[
                    styles.title,
                    styles[props.size ?? "lg"],
                    { color: props.color ?? "black" },
                ]}
            >
                {props.children}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    title: {
        fontWeight: "500",
    },
    lg: {
        fontSize: 52,
    },
    md: {
        fontSize: 36,
    },
    sm: {
        fontSize: 26,
    },
});
