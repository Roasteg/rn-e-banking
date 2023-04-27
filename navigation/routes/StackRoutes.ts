import { NavigatorScreenParams } from "@react-navigation/native";
import { BottomTabsRoutes } from "./BottomTabsRoutes";

export type StackRoutes = {
    Main: NavigatorScreenParams<BottomTabsRoutes>;
    Cards: undefined;
    AddNewCard: undefined;
};
