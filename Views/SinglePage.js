import {ScrollView, Text, View} from "react-native";
import React, {useEffect} from "react";
import axios from "axios";
import {apiKEY} from "../App";
import {ActivityIndicator} from "react-native-paper";
import AboutMovie from "../Components/AboutMovie";

export default function SinglePage({route}) {
    const {id} = route.params
    const[data, setData] = React.useState([]);
    const[ready, setReady] = React.useState(false);


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKEY}&language=en-US`)
            .then(function (response) {
                console.log(response.data)
                setData(response.data)
                setReady(true)
            })
            .catch(function (error) {
                console.log('err;', error);
            })
    }, [])

    if(!ready)
        return <ActivityIndicator animating={true} color={'dodgerblue'} />

    return (
        <View style={{height: '100%'}}>
            <AboutMovie {...data}/>
        </View>
    );
}