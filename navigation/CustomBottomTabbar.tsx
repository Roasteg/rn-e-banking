import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Pressable } from "react-native";
import {
    NavigationHelpers,
    TabNavigationState,
    ParamListBase,
} from "@react-navigation/native";

import { Colors } from "../utils/Colors";
import { BottomTabDescriptorMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { ReactNode } from "react";
import { BottomTabsRoutes } from "./routes/BottomTabsRoutes";

type TabbarProp = {
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
    state: TabNavigationState<ParamListBase>;
    descriptors: BottomTabDescriptorMap;
};

export default function CustomBottomTabbar(
    this: typeof CustomBottomTabbar,
    { state, descriptors, navigation }: TabbarProp
) {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.routerContainer}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;
                    const Icon = options.tabBarIcon!.bind(this, {
                        focused: isFocused,
                        color: isFocused ? "black" : Colors.inactive,
                        size: 24,
                    });
                    const onPress = () => {
                        const event = navigation.emit({
                            type: "tabPress",
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };
                    return (
                        <Pressable
                            onPress={onPress}
                            style={styles.routeContainer}
                            key={route.key}
                        >
                            {Icon()}
                            <Text
                                style={
                                    isFocused
                                        ? styles.routeActive
                                        : styles.routeInactive
                                }
                            >
                                {route.name}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.backgroundDefault,
    },
    routerContainer: {
        justifyContent: "space-evenly",
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        height: 100,
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
        paddingBottom: 12,
    },
    routeContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    routeInactive: {
        color: Colors.inactive,
    },
    routeActive: {},
});
