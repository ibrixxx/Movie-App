import {View} from "react-native";
import React from "react";
import AllMovies from "../Components/AllMovies";
import MyTabs from "../Components/MyTabs";

export default function IndexPage({ navigation }) {
    return (
        <View>
            <AllMovies navigation={navigation}/>
            <MyTabs navigation={navigation}/>
        </View>
    );
}