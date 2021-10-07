import {Button, ScrollView, Text, View} from "react-native";
import React from "react";
import {ActivityIndicator, DataTable, Divider, Searchbar} from 'react-native-paper';
import axios from "axios";
import {apiKEY} from "../App";
import MovieCard from "./MovieCard";

export default function Searched({navigation}) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const[searchData, setSeData] = React.useState([]);
    const[ready, setReady] = React.useState(true);

    const getData = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
            .then(function (response) {
                setSeData(response.data.results)
                setReady(true)
            })
            .catch(function (error) {
                console.log('err;', error);
            })
    }

    const onChangeSearch = query => setSearchQuery(query);

    if(!ready)
        return <ActivityIndicator animating={true} color={'dodgerblue'} />

    return (
        <View>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                onIconPress={() => {getData(); setReady(false)}}
                value={searchQuery}
            />
            <ScrollView>
                <Button onPress={() => {getData(); setReady(false)}} title={'search'} />
                <DataTable style={{paddingBottom: '30%'}}>
                    {searchData.map((m, i) => {
                        return  <DataTable.Row key={i}>
                                    <MovieCard
                                        navigation={navigation}
                                        id={m.id}
                                        title={m.title}
                                        overview={m.overview}
                                        poster={m.poster_path}
                                        date={m.release_date}
                                        score={m.vote_average}/>
                                    <Divider/>
                                </DataTable.Row>
                    })}
                </DataTable>
            </ScrollView>
        </View>
    );
}