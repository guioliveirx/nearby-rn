import { Text, useWindowDimensions } from "react-native";
import { Category } from "../category";
import { s } from "./styles";
import { colors } from "@/styles/theme";

import { Place, PlaceProps } from "../place"
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"
import { useRef } from "react";

type Props = {
    data: PlaceProps[]
}

export function Places( { data }: Props )  {
    const dimensions = useWindowDimensions();
    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = {
        min: 248,
        max: dimensions.height - 248
    }
    
    return (
        <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[snapPoints.min, snapPoints.max]}
        handleIndicatorStyle={s.indicator}
        backgroundStyle={s.container}
        enableOverDrag={false}
        >
            <BottomSheetFlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Place data={item}/>}
                contentContainerStyle={s.content}
                ListHeaderComponent={() => (
                    <Text style={s.title}>Explore locais perto de você</Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </BottomSheet>
    );
};