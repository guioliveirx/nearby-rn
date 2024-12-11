// Importa um Spinning de Loading do módulo react-native
import { ActivityIndicator } from "react-native";

import { s } from "./styles";
import { colors } from "@/styles/theme";

// Cria o componente Loading
export function Loading(){
    // Retorna um spinning com uma cor e um estilo como propriedade;
    return(
        <ActivityIndicator color={colors.green.base} style={s.container} />
    )
};