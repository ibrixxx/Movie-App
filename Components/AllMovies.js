import {FlatList, SafeAreaView, ScrollView, Text, View} from "react-native";
import React, {useEffect} from "react";
import axios from "axios";
import {apiKEY} from "../App";
import {ActivityIndicator, DataTable, Divider} from "react-native-paper";
import MovieCard from "./MovieCard";


export default function AllMovies({navigation}) {
    const[data, setData] = React.useState([]);
    const[ready, setReady] = React.useState(false);
    const[page, setPage] = React.useState(1);
    const[loading, setLoading] = React.useState(false);

    const getData = () => {
        setLoading(true)
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKEY}&language=en-US&page=${page}`)
            .then(function (response) {
                setData([...data, ...response.data.results])
                setReady(true)
                setLoading(false)
            })
            .catch(function (error) {
                console.log('err;', error);
            })
    }

    const loadMoreItems = () => {
        setPage((page) => page + 1)
        console.log(page)
    }

    useEffect(() => {
        getData()
    }, [page])

    if(!ready)
        return <ActivityIndicator animating={true} color={'dodgerblue'} />
        
    return (
            <FlatList data={data}
                      style={{zIndex: 1}}
                      onEndReached={loadMoreItems}
                      onEndReachedThreshold={0.5}
                      ListFooterComponent={() => loading? <ActivityIndicator size={'large'} style={{paddingBottom: '10%'}} animating={true} color={'dodgerblue'} />:null}
                      renderItem={({item}) => <MovieCard
                                          navigation={navigation}
                                          id={item.id}
                                          title={item.title}
                                          overview={item.overview}
                                          poster={item.poster_path}
                                          date={item.release_date}
                                          score={item.vote_average}/>}
                      keyExtractor={(item) => item.id.toString()}/>
    )
}