import { View, Text, Alert } from "react-native";

import { router, useFocusEffect, useLocalSearchParams } from "expo-router";

import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import Lista from "@/components/Lista";
import Progresso from "@/components/Progresso";
import Transacoes from "@/components/Transacoes";

import { useBoxCoinDatabase } from "@/database/useBoxCoinDatabase.";
import { useCallback, useState } from "react";
import { TransacoesTypes } from "@/utils/TransacoesTypes";

// const detalhes = {
//     atual: "R$ 2.000,00",
//     meta: "R$ 4.000,00",
//     porcentagem: 50
// }

const transacoes = [
    {
        id: '1',
        value: 'R$ 300,00',
        date: '12/04/2026',
        descricao: 'CDB de 110% do CDI',
        tipo: TransacoesTypes.Input
    },
    {
        id: '2',
        value: 'R$ 100,00',
        date: '14/04/2026',
        descricao: 'Retirada de emergencia',
        tipo: TransacoesTypes.Output
    },
    {
        id: '3',
        value: 'R$ 700,00',
        date: '16/04/2026',
        descricao: 'CDB de 110% do CDI',
        tipo: TransacoesTypes.Input
    }
]

export default function EmProgresso() {

    const [detalhes, setDetalhes] = useState({
        nome: "",
        atual: "",
        meta: "",
        porcentagem: 0
    })

    const params = useLocalSearchParams<{ id: string }>()
    const boxCoinDatabase = useBoxCoinDatabase()

    async function fetchDetalhes() {
        try {
            const response = boxCoinDatabase.show(Number(params.id))
            console.log(response)

            setDetalhes({
                nome: String(response?.name || 'Sem nome'),
                atual: String(response?.current || "R$ 0,00"),
                meta: String(response?.amount || "R$ 0,00"),
                porcentagem: response?.percentage || 0
            })
        } catch (error) {
            Alert.alert("Erro", "Não foi possivel carregar os detalhes da meta.")
            console.error(error)
        }
    }

    useFocusEffect(
        useCallback(() => { fetchDetalhes() }, [])
    )



    return (
        <View style={{ flex: 1, padding: 24, gap: 32 }}>
            <PageHeader
                titulo="Apple Watch"
                rightButton={{
                    icon: "edit",
                    onPress: () => router.navigate(`/objetivo?id=${params.id}`)
                }}
            />

            <Progresso data={detalhes} />

            <Lista
                data={transacoes}
                titulo="Transações"
                renderItem={({ item }) => (
                    <Transacoes data={item} onRemove={() => console.log("remover Transações")} />
                )}
            />

            <Button
                titulo="Nova Transição"
                onPress={() => router.navigate(`/transacao/${params.id}`)}
            />
        </View>
    )
}