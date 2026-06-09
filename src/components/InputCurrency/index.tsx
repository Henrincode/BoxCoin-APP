import { Text, View } from "react-native";
import { styles } from "./style";
import { colors } from "@/theme/colors";

import Input, { CurrencyInputProps } from 'react-native-currency-input'

type Props = CurrencyInputProps & {
    label: string
}

export default function InputCurrency({ label, ...rest }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Input
                style={styles.input}
                placeholderTextColor={colors.gray[400]}
                prefix="R$ "
                separator=","
                delimiter="."
                precision={2}
                minValue={0}
                {...rest}
            />
        </View>
    )
}