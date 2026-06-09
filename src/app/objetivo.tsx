import Button from "@/components/Button";
import Input from "@/components/Input";
import InputCurrency from "@/components/InputCurrency";
import PageHeader from "@/components/PageHeader";
import { colors } from "@/theme/colors";
import { View } from "react-native";

export default function Objetivo() {
    return (
        <View style={{ flex: 1, padding: 24, gap: 32 }}>
            <PageHeader
                titulo="Meta"
                subtitulo="Economize para alcançar sua meta financeira."
            />

            <View style={{ marginTop: 32, gap: 24 }}>
                <Input label="Nome da Meta" placeholder="Ex: Comprar um carro 0" />
                <InputCurrency
                    label="Valor alvo"
                    placeholder="Ex: Comprar um carro 0"
                    value={0}

                />
                <Button
                    titulo="Salvar"
                    onPress={() => console.log("Salvar Meta")}
                />

            </View>
        </View>
    )
}