import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router"


export default function Index() {
    return (
        <View style={s.container}>
            <Text style={s.Text}>Olá mundo!</Text>
            <TouchableOpacity onPress={() => router.navigate("objetivo")}>
                <Text>Objetivo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate("em-progresso/67")}>
                <Text>Em progresso</Text>
            </TouchableOpacity>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#676767",
    },
    Text: {
        color: "#f1f1f1",
        fontSize: 60,
    }
})