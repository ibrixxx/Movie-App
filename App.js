import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import IndexPage from "./Views/IndexPage";
import CategoryPage from "./Views/CategoryPage";
import SearchPage from "./Views/SearchPage";
import SinglePage from "./Views/SinglePage";
import CategoryList from "./Components/CategoryList";


const Stack = createNativeStackNavigator();

export const apiKEY = '6de738d0b38919877d0cc69ea2de9b06'

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={IndexPage} />
          <Stack.Screen name="Categories" component={CategoryPage} />
          <Stack.Screen name="Search" component={SearchPage} />
          <Stack.Screen name="About" component={SinglePage} />
          <Stack.Screen name="Overview" component={CategoryList} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
