// Importando do módulo do react-native as funções View e Text.
import {View, Text} from "react-native";

import { Welcome } from "@/components/welcome";

// Exportar como padrão para que o Expo Router entenda que isso é uma rota.
// Por padrão, nomes de componentes deverão começar com letra maiúscula.
export default function Index(){
    // O componente só poderá ter UM elemento pai na raiz!
    return(
        <View style={{ flex: 1, padding: 30, gap: 40 }}>
            <Welcome/>
        </View>
    )
}