import React, {VFC} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types/types";

const Stack = createNativeStackNavigator<RootStackParamList>()

export const TagStackNavigator: VFC = () => (
    <Stack.Navigator>
        <Stack.Screen name="TagList" component={TagStackNavigator}/>
    </Stack.Navigator>
)


