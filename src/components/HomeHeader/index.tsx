import { LinearGradient } from "expo-linear-gradient"
import { Text, View } from "react-native"
import { styles } from "./style"
import { colors } from "@/theme/colors"
import Separador from "../Separador"
import Resumo from "../Resumo"
import { ResumoProps } from "../Resumo"

export type HomeHeaderProps = {
    total: string
    imput: ResumoProps
    output: ResumoProps
}

type Props = {
    data: HomeHeader
}

export default function HomeHeader({ data }: Props) {
    return (
        <LinearGradient colors={[colors.blue[500], colors.blue[800]]} style={styles.container}>
            <View>
                <Text style={styles.label}>Total que você possui</Text>
                <Text style={styles.total}>R$ 2680,00</Text>
            </View>
            <Separador color={colors.blue[400]} />

            <View style={styles.resumoContainer}>
                <Resumo
                    data={data.imput}
                    icon={{
                        nomeIcone: "arrow-upward",
                        corIcone: colors.green[500]
                    }}
                />

                <Resumo
                    data={data.output}
                    icon={{
                        nomeIcone: "arrow-downward",
                        corIcone: colors.red[500]
                    }}
                    right
                />
            </View>
        </LinearGradient>
    )
}