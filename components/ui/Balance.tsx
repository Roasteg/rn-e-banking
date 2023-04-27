import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../utils/Colors";
import Badge from "./Badge";

type Props = {
    children: React.ReactNode;
};

export default function Balance(props: Props) {
    const balance = props.children?.toString() ?? "";
    return (
        <View style={styles.rootContainer}>
            <Text style={[styles.textStyle, { color: Colors.inactive }]}>
                $
            </Text>
            <Text style={styles.textStyle}>
                {balance
                    .substring(0, balance.indexOf("."))
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Text>
            <Text style={[styles.textStyle, { color: Colors.inactive }]}>
                {balance.substring(balance.indexOf("."))}
            </Text>
            <View style={styles.badgeContainer}>
                <Badge color={Colors.tertiary500} textColor="white">2%</Badge>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
    },
    textStyle: {
        fontSize: 56,
        fontWeight: "200",
    },
    badgeContainer: {
        alignItems: "flex-start",
    },
});
