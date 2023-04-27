import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { StackRoutes } from "./routes/StackRoutes";
import BottomTabsNavigation from "./BottomTabsNavigation";
import CardsScreen from "../screens/CardsScreen";
import AddCardModal from "../screens/AddCardModal";

const Stack = createNativeStackNavigator<StackRoutes>();

export default function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                options={{ headerShown: false }}
                component={BottomTabsNavigation}
            />
            <Stack.Screen
                name="Cards"
                options={{ headerShown: false }}
                component={CardsScreen}
            />
            <Stack.Screen
                name="AddNewCard"
                component={AddCardModal}
                options={{
                    presentation: "modal",
                    headerShown: true,
                    title: "Add new card",
                }}
            />
        </Stack.Navigator>
    );
}
const styles = StyleSheet.create({});
