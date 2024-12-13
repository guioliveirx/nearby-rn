import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

// Cria nossa regra de estilo e armazena em propriedades de um objeto
export const s = StyleSheet.create({
    container:{
        backgroundColor: colors.green.base,
        justifyContent: "center",
        alignItems: "center",
        width: 260,
        height: 50,
        borderRadius: 12
    }, 
    title: {
        color: colors.gray[100],
        fontFamily: fontFamily.semiBold
    }
})