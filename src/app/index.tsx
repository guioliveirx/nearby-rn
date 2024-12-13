// Importando do módulo do react-native as funções View e Text.
import { View } from "react-native";
import { router } from "expo-router";

// Importando meus componentes
import { Welcome } from "@/components/welcome";
import { Steps } from "@/components/steps";
import { Button } from "@/components/button";

// Exportar como padrão para que o Expo Router entenda que isso é uma rota.
// Por padrão, nomes de componentes deverão começar com letra maiúscula.
export default function Index(){
    // O componente só poderá ter UM elemento pai na raiz!
    return(
        <View style={{ flex: 1, padding: 30, gap: 40 }}>
            <Welcome/>
            <Steps/>
            <Button onPress={() => router.navigate("/home")}>
                <Button.Title>Começar</Button.Title>
            </Button>
        </View>
    )
}