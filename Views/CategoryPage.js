import {Text, View} from "react-native";
import React from "react";
import MyTabs from "../Components/MyTabs";
import Categories from "../Components/Categories";

export default function CategoryPage({ navigation }) {
    return (
        <View>
            <Categories navigation={navigation}/>
        </View>
    );
}