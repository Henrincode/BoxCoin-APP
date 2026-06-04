import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue[500],
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    titulo: {
        fontSize: 14,
        color: colors.white,
        fontWeight: 700,
    },
})