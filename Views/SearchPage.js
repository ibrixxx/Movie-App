import {Text, View} from "react-native";
import React from "react";
import Searched from "../Components/Searched";

export default function SearchPage({ navigation }) {
    return (
        <View>
            <Searched navigation={navigation}/>
        </View>
    );
}