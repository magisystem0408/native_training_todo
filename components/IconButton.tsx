import {GestureResponderEvent, TouchableOpacity} from "react-native";
import {VFC} from "react";
import tw from "tailwind-rn";
import {AntDesign} from "@expo/vector-icons"

type Props = {
    name: any
    color: string
    size: number;
    onPress: (e: GestureResponderEvent) => void
}

export const IconButton:VFC<Props> =({color,size,onPress,name}) =>(
    <TouchableOpacity
        style={tw('items-center')}
        onPress={onPress}>
        <AntDesign name={name} size={size} onPress={onPress}/>
    </TouchableOpacity>
)