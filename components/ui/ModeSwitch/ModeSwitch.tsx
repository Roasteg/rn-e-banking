import { StyleSheet, Text, View, Switch, Pressable } from "react-native";
import { Colors } from "../../../utils/Colors";
import { useState } from "react";
import SwitchItem from "./SwitchItem";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { TSwitchItem } from "../../../types/SwitchItem";

type Props = {
    switchItems: [TSwitchItem, TSwitchItem];
};

export default function ModeSwitch(props: Props) {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    let containerWidth: number = 0;
    let currentItemWidth: number = 0;
    let inactiveItemWidth: number = 0;
    const pillPosition = useSharedValue(0);
    const pillWidth = useSharedValue(currentItemWidth);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: pillPosition.value }],
            width: pillWidth.value,
        };
    });

    const changeActive = () => {
        if (activeIndex === 0) {
            setActiveIndex(1);
            pillPosition.value = withSpring(
                containerWidth - currentItemWidth - inactiveItemWidth * 0.5
            );
        } else {
            setActiveIndex(0);
            pillPosition.value = withSpring(2);
        }
    };

    return (
        <Pressable onPress={changeActive}>
            <View
                style={styles.rootContainer}
                onLayout={(event) => {
                    containerWidth = event.nativeEvent.layout.width;
                }}
            >
                <Animated.View style={[styles.switchPill, animatedStyle]} />
                {props.switchItems.map((switchItem, index) => (
                    <SwitchItem
                        key={index}
                        active={activeIndex === index}
                        switchItem={switchItem}
                        viewProps={{
                            onLayout: (event) => {
                                if (activeIndex === index) {
                                    currentItemWidth =
                                        event.nativeEvent.layout.width;
                                    pillWidth.value = withSpring(
                                        currentItemWidth +
                                            currentItemWidth * 0.14
                                    );
                                } else {
                                    inactiveItemWidth =
                                        event.nativeEvent.layout.width;
                                }
                            },
                        }}
                    />
                ))}
            </View>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        borderRadius: 100,
        backgroundColor: "white",
        flexDirection: "row",
        padding: 8,
    },
    switchItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    switchPill: {
        position: "absolute",
        backgroundColor: Colors.accent,
        borderRadius: 100,
        marginTop: 2,
        padding: 18,
        paddingBottom: 20,
    },
});
