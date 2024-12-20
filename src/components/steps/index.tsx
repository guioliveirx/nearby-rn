import { Image, Text, View } from "react-native";
import { style } from "./styles";
import { Step } from "@/components/step";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";

export function Steps() {
    return(
        <View style={style.container}>
            <Text style={style.title}>Veja como funciona: </Text>
            {/* Passa como parâmetro duas propriedades de um objeto para o componente Step */}
            <Step icon={IconMapPin} title="Encontre estabelecimentos" description="Veja locais perto de você que são parceiros Nearby"/>
            <Step icon={IconQrcode} title="Ative o cupom com QR Code" description="Escaneie o código no estabelecimento para usar o benefício"/>
            <Step icon={IconTicket} title="Garanta vantagens perto de você" description="Ative cupons onde estiver, em diferentes tipos de estabelecimento "/>
        </View>
    );
};