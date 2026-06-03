import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router"
import HomeHeader, { HomeHeaderProps } from "@/components/HomeHeader";


const RESUMO: HomeHeaderProps = {
    total: "R$ 8.745,00",
    imput: {
        label: "Entradas",
        value: "R$ 9.854,00"
    },
    output: {
        label: "Saídas",
        value: "-R$ 1.754,00"
    }
}


export default function Index() {
    return (
        <View >
            {/* <Text style={s.Text}>Olá mundo!</Text>
            <TouchableOpacity onPress={() => router.navigate("objetivo")}>
                <Text>Objetivo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate("em-progresso/67")}>
                <Text>Em progresso</Text>
            </TouchableOpacity> */}

            <HomeHeader data={RESUMO} />
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