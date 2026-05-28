import { LinearGradient } from "expo-linear-gradient"
import { Text, View } from "react-native"
import { styles } from "./style"

export default function HomeHeader() {
    return (
        <LinearGradient colors={["#fff", "#000"]} style={styles.container}>
            <View>
                <Text>Total que você possui</Text>
                <Text>R$ 2680,00</Text>
            </View>
        </LinearGradient>
    )
}