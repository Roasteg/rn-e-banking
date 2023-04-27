import { StyleSheet, Text, View } from "react-native";

type Props = {
    textColor?: string;
    color?: string;
    children: React.ReactNode;
};

export default function Badge(props: Props) {
    return (
        <View style={[styles.rootContainer, { backgroundColor: props.color ?? "" }]}>
            <Text style={{color: props.textColor}}>{props.children}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        marginHorizontal: 4,
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
    },
});
