import React from 'react';
import {StyleSheet, View} from "react-native";
import {Button} from "react-native-paper";


export default function MyTabs({navigation}) {
    return (
        <View style={styles.navContainer}>
            <View style={styles.bottomNav}>
            <Button
                onPress={() => navigation.navigate('Home')}
                icon='home'
                color={'white'}
            >HOME</Button>
            <Button
                icon={'more'}
                color={'white'}
                onPress={() => navigation.navigate('Search')}
            >SEARCH</Button>
            <Button
                icon={'menu'}
                color={'white'}
                onPress={() => navigation.navigate('Categories')}
            >CATEGORIES</Button>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    bottomNav: {
        backgroundColor: 'dodgerblue',
        flexDirection: 'row',
        width: '100%',
        zIndex: 2,
        justifyContent: 'center'
    },

    navContainer: {
        width: '100%',
        bottom: 0,
        alignItems: 'center',
        position: 'absolute'
    },
});