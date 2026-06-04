import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    ActivityIndicator
} from "react-native";

import { styles } from "./style";
import { colors } from "@/theme/colors";

type Props = TouchableOpacityProps & {
    titulo: string
    isLoading?: boolean
}

export default function Button({ titulo, isLoading, ...rest }: Props) {
    return (
        <TouchableOpacity
            style={[styles.container, isLoading && { opacity: 0.4 }]}
            activeOpacity={0.8}
            disabled={isLoading}
            {...rest}
        >
            <Text style={styles.titulo}>
                {
                    isLoading
                        ? <ActivityIndicator size={'small'} color={colors.white} />
                        : titulo
                }
            </Text>
        </TouchableOpacity>
    )
}