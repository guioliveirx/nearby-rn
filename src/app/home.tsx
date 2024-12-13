// IMPORT DE MÓDULOS E FUNÇÕES DE BIBLIOTECAS
import { View, Text, Alert } from "react-native";
import { useEffect, useState } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import * as Location from 'expo-location';

// IMPORTS INTERNOS DAS MINHAS FUNÇÕES E COMPONENTES
import { api } from "@/services/api";
import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";
import { colors, fontFamily } from "@/styles/theme"

// TYPAGEM QUE RECEBE AS PROPRIEDADES DE OUTRO OBJETO
type MarketsProps = PlaceProps & {
    latitude: number
    longitude: number
}

// COMPONENTE QUE EXIBE A TELA HOME DO APLICATIVO
export default function Home() {
    const [categories, setCategories] = useState<CategoriesProps>([]);
    const [category, setCategory] = useState("");
    const [markets, setMarket] = useState<MarketsProps[]>([]);
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    // OBJETO QUE ARMAZENA A LOCALIZAÇÃO DE UM LUGAR NO MAPA
    const currentLocation = {
        latitude: -23.561187293883442,
        longitude: -46.656451388116494
    }

    async function fetchCategories() {
        try {
            const { data } = await api.get("/categories");
            setCategories(data);
            setCategory(data[0].id);
        } catch (error) {
            console.log(error);
            Alert.alert("Categorias", "Não foi possível carregar as categorias.")
        }
    }

    async function fetchMarkets() {
        try {
            if (!category) {
                return
            }
            const { data } = await api.get("/markets/category/" + category);
            setMarket(data);

        } catch (error) {
            console.log(error);
            Alert.alert("Locais", "Não foi possível carregar os locais");
        }
    }

    async function getCurrentLocation() {
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync();
            if (!granted) {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            const location = await Location.getCurrentPositionAsync({});
            setLocation(location);


        } catch (error) {
            console.log(error);
            Alert.alert("Locais", "Não foi possível carregar os locais");
        }
    }

    let position = JSON.stringify(location);

    useEffect(() => {
        getCurrentLocation()
        fetchCategories()
    }, [])

    useEffect(() => {
        fetchMarkets()
    }, [category])


    return (
        <View style={{ flex: 1, backgroundColor: "#CECECE" }}>
            <Categories
                data={categories}
                onSelect={setCategory}
                selected={category}
            />

            {/* Componente do React que adiciona a API de um mapa de localização */}
            {/* INITIALREGION: Recebe as coordenadas de uma localização e exibe no mapa como padrão */}
            <MapView
                style={{ flex: 1 }}
                region={{
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            >
                <Marker
                    identifier="current"
                    coordinate={{
                        latitude: currentLocation.latitude,
                        longitude: currentLocation.longitude
                    }}
                    image={require("@/assets/location.png")}
                />

                {
                    markets.map((item) => (
                        <Marker
                            key={item.id}
                            identifier={item.id}
                            coordinate={{
                                latitude: item.latitude,
                                longitude: item.longitude
                            }}
                            image={require("@/assets/pin.png")}
                        >
                            <Callout>
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            color: colors.gray[600],
                                            fontFamily: fontFamily.medium
                                        }}>{item.name}</Text>

                                    <Text
                                        style={{
                                            fontSize: 12,
                                            color: colors.gray[600],
                                            fontFamily: fontFamily.medium
                                        }}>{item.address}</Text>
                                </View>
                            </Callout>
                        </Marker>
                    ))
                }
            </MapView>

            <Places data={markets} />
        </View>
    );
}

