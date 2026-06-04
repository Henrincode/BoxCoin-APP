import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./style"

export type ObjetivosProps = {
    id: string
    nome: string
    porcentagem: string
    meta: string
    atual: string
}

type Props = TouchableOpacityProps & {
    data: ObjetivosProps
}

export default function Objetivos({ data, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <View style={styles.contant}>
                <Text style={styles.nome} >
                    {data.nome}
                </Text>
                <Text style={styles.status} >
                    {data.porcentagem} • {data.atual} de {data.meta}
                </Text>
            </View>
            <MaterialIcons name="chevron-right" />
        </TouchableOpacity>
    )
}