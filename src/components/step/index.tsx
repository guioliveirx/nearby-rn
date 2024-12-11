import { Text, View } from "react-native";
import { IconProps } from "@tabler/icons-react-native";

// Imports criados por mim
import { style } from "./styles";
import { colors } from "@/styles/theme";

// Cria uma tipagem em Step para receber as propriedades title e description
type Props = {
    title: string,
    description: string
    icon: React.ComponentType<IconProps>
};

// Recebe como parâmetro um objeto que contém as propriedades da chamada do componente
export function Step({ title, description, icon: Icon }: Props){
    return (
        <View style={style.container}>
            {Icon && <Icon size={32} color={colors.red.base}/>}
            <View style={style.details}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.description}>{description}</Text>
            </View>
        </View>
    );
};