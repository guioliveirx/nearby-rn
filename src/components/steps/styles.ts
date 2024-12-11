// Função do react-native para a criação de estilos 
import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/styles/theme";

// Estilo otimizado que será utilizado no componente Steps
export const style = StyleSheet.create({
   container: {
    gap: 24,
    flex: 1
   },
   title: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500]
   }
});