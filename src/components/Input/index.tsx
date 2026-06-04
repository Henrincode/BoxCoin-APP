import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./style";
import { colors } from "@/theme/colors";

type Props = TextInputProps & {
    label: string
}

export default function Input({ label, ...rest }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholderTextColor={colors.gray[400]}
                {...rest}
            />
        </View>
    )
}