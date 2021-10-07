import {ScrollView, Text, View} from "react-native";
import React, {useEffect} from "react";
import axios from "axios";
import {apiKEY} from "../App";
import {ActivityIndicator, DataTable} from "react-native-paper";


export default function Categories({navigation}) {
    const[data, setData] = React.useState([]);
    const[ready, setReady] = React.useState(false);

    const getData = () => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKEY}&language=en-US`)
            .then(function (response) {
                setData(response.data.genres)
                setReady(true)
            })
            .catch(function (error) {
                console.log('err;', error);
            })
    }

    const handlePress = (str) => {
        navigation.navigate('Overview', {navigation: navigation, genre: str})
    }

    useEffect(() => {
        getData()
    }, [])


    if(!ready)
        return <ActivityIndicator animating={true} color={'dodgerblue'} />


    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Cell>#</DataTable.Cell>
                <DataTable.Cell>Name</DataTable.Cell>
            </DataTable.Header>
            <ScrollView>
            {data.map((m,i) => {
                return <DataTable.Row key={i} onPress={() => handlePress(m.id)}>
                    <DataTable.Cell>{m.id}</DataTable.Cell>
                    <DataTable.Cell>{m.name}</DataTable.Cell>
                </DataTable.Row>
            })}
            </ScrollView>
        </DataTable>
    );
}