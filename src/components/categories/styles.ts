// Função para a criação de estilos 
import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme";

// Cria um conjunto de estilos e armazena no objeto de estilo "s"
export const s = StyleSheet.create({
    // Cria um uma propriedade de estilo chamada container
    container: {
       maxHeight:  36,
       position: "absolute",
       zIndex: 1,
       top: 64
    },
    content: {
        gap: 8,
        paddingHorizontal: 24
    }
});