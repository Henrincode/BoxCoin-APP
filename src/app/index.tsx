import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router"
import HomeHeader, { HomeHeaderProps } from "@/components/HomeHeader";
import Objetivos, { ObjetivoProps } from "@/components/Objetivos";
import Lista from "@/components/Lista";
import Button from "@/components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBoxCoinDatabase } from "@/database/useBoxCoinDatabase.";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";


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

// const OBJETIVOS = [
//     {
//         id: "1",
//         nome: "Comprar cadeira ergonomica",
//         porcentagem: "50%",
//         meta: "R$ 2.000,00",
//         atual: "R$ 1.000,00"
//     },
//     {
//         id: "2",
//         nome: "Apple watch",
//         porcentagem: "75%",
//         meta: "R$ 1.000,00",
//         atual: "R$ 750,00"
//     },
//     {
//         id: "3",
//         nome: "AirPods",
//         porcentagem: "43%",
//         meta: "R$ 2.300,00",
//         atual: "R$ 1.000,00"
//     }
// ]



export default function Index() {

    const insets = useSafeAreaInsets()
    const boxCoinDatabase = useBoxCoinDatabase()
    const [objetivos, setObjetivos] = useState<ObjetivoProps[]>([])

    async function fetchMetas(): Promise<ObjetivoProps[]> {
        try {
            const response = await boxCoinDatabase.listBySavedValue()
            console.log(response)
            return response.map((item) => ({
                id: String(item.id),
                nome: item.name,
                porcentagem: item.percentage.toFixed(0) + "%",
                meta: String(item.amount),
                atual: String(item.current)
            }))

        } catch (error) {
            Alert.alert(
                "Erro",
                "Falha ao carregar as metas"
            )
            console.log(error)
            return []
        }
    }

    async function fetchData() {
        const boxCoinPromise = await fetchMetas()
        const [boxCoinData] = await Promise.all([boxCoinPromise])

        setObjetivos(boxCoinData)
    }

    useFocusEffect(
        useCallback(() => { fetchData() }, [])
    )

    return (
        <View style={{ flex: 1, paddingTop: insets.top }}>

            <HomeHeader data={RESUMO} />

            <Lista
                titulo="Metas"
                data={objetivos}
                renderItem={({ item }) =>
                    <Objetivos
                        data={item}
                        onPress={() => router.navigate(`/em-progresso/${item.id}`)}
                    />
                }
                emptyMensagem="Nenhuma meta encontrada"
                containerStyle={{ paddingHorizontal: 24 }}
            />

            <View style={{ padding: 24, marginBottom: 32 }}>
                <Button titulo="teste" onPress={() => router.navigate("/objetivo")} />
            </View>

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