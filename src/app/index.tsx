import { StyleSheet, Text, View } from "react-native";

export default function Index() {
    return (
        <View style={s.container}>
            <Text style={s.Text}>Olá mundo!</Text>
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