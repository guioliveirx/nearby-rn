// Função para a criação de estilos 
import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme";

// Cria um conjunto de estilos e armazena no objeto de estilo "s"
export const s = StyleSheet.create({
    // Cria um uma propriedade de estilo chamada container
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.gray[100],
    },
});