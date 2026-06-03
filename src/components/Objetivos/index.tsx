import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./style"

export default function Objetivos() {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.contant}>
                <Text style={styles.nome} >
                    Comprar um pão de queijo
                </Text>
                <Text style={styles.status} >
                    25% • R$ 250,00 de R$ 1.000,00
                </Text>
            </View>
            <MaterialIcons name="chevron-right" />
        </TouchableOpacity>
    )
}