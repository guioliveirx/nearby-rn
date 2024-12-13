// Função para a criação de estilos 
import { StyleSheet } from "react-native";

// Cria um conjunto de estilos e armazena no objeto de estilo "s"
export const s = StyleSheet.create({
    container: {
       maxHeight:  36,
       position: "absolute",
       zIndex: 1,
       top: 54
    },
    content: {
        gap: 8,
        paddingHorizontal: 24
    }
});