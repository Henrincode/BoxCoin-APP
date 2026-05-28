import { View, Text } from "react-native";

import { useLocalSearchParams } from "expo-router";

export default function EmProgresso() {
    const params = useLocalSearchParams()
    return (
        <View>
            <Text>
               {params.id}
            </Text>
        </View>
    )
}