import React, {VFC} from "react";
import {useAuthState} from "../hooks/useAuthState";
import {ActivityIndicator, SafeAreaView} from "react-native";
import tw from "tailwind-rn";
import {NavigationContainer} from "@react-navigation/native";
import {TagStackNavigator} from "./TagStackNavigator";
import {AuthStackNavigator} from "./AuthStackNavigator";

export const RootNavigator: VFC = () => {
    const {user, isLoading} = useAuthState()

    if (isLoading) {
        return (
            <SafeAreaView style={tw('flex-1 items-center justify-center')}>
                <ActivityIndicator size="large" color="gray"/>
            </SafeAreaView>
        )
    }
    return (
        //ログインしているのとしていないので、画面を分ける
        <NavigationContainer>
            {user?.uid ? <TagStackNavigator/> : <AuthStackNavigator/>}
        </NavigationContainer>

    )

}