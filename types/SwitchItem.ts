import { Ionicons } from "@expo/vector-icons";

export type TSwitchItem = {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
};