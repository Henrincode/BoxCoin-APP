import { Stack, Tabs } from "expo-router";
import { colors } from "../theme/colors";

export default function Layout() {
    return (
        <Stack screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.white }
        }}>
            {/* Configuração da aba inicial (index) */}
            <Stack.Screen
                name="index"
                options={{
                    title: "Início", // Nome que vai aparecer na aba e no topo
                    // Se quiser mudar apenas o título do topo, use: headerTitle: "Início"
                    // Se quiser mudar apenas o nome do botão da aba, use: tabBarLabel: "Início"
                }}
            />

            {/* Configuração da aba objetivo */}
            {/* <Stack.Screen
                name="objetivos/index"
                options={{
                    title: "Meu Objetivo", // Nome amigável que substituirá "Objetivo/index"
                }}
            /> */}
            <Stack.Screen
                name="em-progresso/[id]"
                options={{
                    title: "Em Progresso", // Nome amigável que substituirá "Objetivo/index"
                }}
            />
        </Stack>
    );
}