import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabsRoutes } from "./routes/BottomTabsRoutes";
import HomeScreen from "../screens/HomeScreen";
import PaymentsScreen from "../screens/PaymentsScreen";
import { Colors } from "../utils/Colors";
import CustomBottomTabbar from "./CustomBottomTabbar";
import { Ionicons } from "@expo/vector-icons";
import WalletScreen from "../screens/WalletScreen";
import AppBar from "../components/ui/AppBar/AppBar";

const BottomTabs = createBottomTabNavigator<BottomTabsRoutes>();

function BottomTabsNavigation() {
    return (
        <>
            <AppBar />
            <BottomTabs.Navigator
                tabBar={(props) => <CustomBottomTabbar {...props} />}
                sceneContainerStyle={{
                    backgroundColor: Colors.backgroundDefault,
                    padding: 12,
                }}
                screenOptions={{
                    headerShown: false,
                }}
            >
                <BottomTabs.Screen
                    options={{
                        tabBarIcon: ({ color, size }) => {
                            return (
                                <Ionicons
                                    color={color}
                                    size={size}
                                    name="home"
                                />
                            );
                        },
                    }}
                    name="Home"
                    component={HomeScreen}
                />
                <BottomTabs.Screen
                    options={{
                        tabBarIcon: ({ color, size }) => {
                            return (
                                <Ionicons
                                    color={color}
                                    size={size}
                                    name="logo-euro"
                                />
                            );
                        },
                    }}
                    name="Payments"
                    component={PaymentsScreen}
                />
                <BottomTabs.Screen
                    options={{
                        tabBarIcon: ({ color, size }) => {
                            return (
                                <Ionicons
                                    color={color}
                                    size={size}
                                    name="wallet"
                                />
                            );
                        },
                    }}
                    name="Wallet"
                    component={WalletScreen}
                />
            </BottomTabs.Navigator>
        </>
    );
}

export default BottomTabsNavigation;
const styles = StyleSheet.create({});
