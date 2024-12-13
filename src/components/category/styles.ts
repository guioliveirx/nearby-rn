// Função para a criação de estilos 
import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

// Cria um conjunto de estilos e armazena no objeto de estilo "s"
export const s = StyleSheet.create({
    // Cria um uma propriedade de estilo chamada container
    container: {
        height: 36,
        backgroundColor: colors.gray[100],
        borderWidth: 1,
        borderColor: colors.gray[300],
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 12,
        gap: 10
    },
    name: {
        fontSize: 14,
        color: colors.gray[500],
        fontFamily: fontFamily.regular
    },
    containerSelected: {
        backgroundColor: colors.green.base,
        borderWidth: 0
    },
    nameSelected: {
        color: colors.gray[100]
    }
});