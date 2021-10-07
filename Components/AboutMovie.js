import {Button, Card, DataTable, Paragraph, Title} from "react-native-paper";
import React, {useCallback} from "react";
import {Image, ScrollView, Linking, Alert, Text} from "react-native";


export default function AboutMovie(props) {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(props.homepage);

        if (supported) {
            await Linking.openURL(props.homepage);
        } else {
            Alert.alert(`Don't know how to open this URL: ${props.homepage}`);
        }
    }, [props.homepage]);

    return  <Card style={{width: '100%', height: '100%'}}>
                <Image style={{width: '100%', height: '70%'}} size={350} source={{ uri: `https://image.tmdb.org/t/p/w500${props.poster_path}`}} />
                <Card.Title title={props.title} subtitle={props.release_date} />
                <ScrollView>
                    <Card.Content>
                        <Title style={{color: 'gold'}}>{props.vote_average}</Title>
                        <Paragraph>{props.overview}</Paragraph>
                    </Card.Content>
                    <DataTable>
                        <DataTable.Row>
                            <DataTable.Cell>Budget:</DataTable.Cell>
                            <DataTable.Cell>{props.budget}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row onPress={handlePress}>
                            <DataTable.Cell>Homepage:</DataTable.Cell>
                            <DataTable.Cell><Text style={{color: 'dodgerblue'}}>{props.homepage}</Text></DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Revenue:</DataTable.Cell>
                            <DataTable.Cell>{props.revenue}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Runtime:</DataTable.Cell>
                            <DataTable.Cell>{props.runtime} min</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Tagline:</DataTable.Cell>
                            <DataTable.Cell>{props.tagline}</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                </ScrollView>
            </Card>
}