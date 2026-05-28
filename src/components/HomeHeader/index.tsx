import { LinearGradient } from "expo-linear-gradient"
import { Text, View } from "react-native"
import { styles } from "./style"
import { colors } from "@/theme/colors"

export default function HomeHeader() {
    return (
        <LinearGradient colors={[colors.blue[400], colors.blue[500]]} style={styles.container}>
            <View>
                <Text style={styles.label}>Total que você possui</Text>
                <Text style={styles.total}>R$ 2680,00</Text>
            </View>
        </LinearGradient>
    )
}