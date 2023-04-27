import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppBar from "./components/ui/AppBar/AppBar";
import StackNavigation from "./navigation/StackNavigation";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
    return (
        <>
            <StatusBar style="dark" />
            <Provider store={store}>
                <NavigationContainer>
                    <StackNavigation />
                </NavigationContainer>
            </Provider>
        </>
    );
}

const styles = StyleSheet.create({});
