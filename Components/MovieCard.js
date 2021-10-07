import React, {memo} from "react";
import {Button, Card, Paragraph, Title} from "react-native-paper";

function MovieCard({title, date, score, poster, overview, id, navigation}){
    return  <Card style={{width: '90%', marginBottom: '10%', marginLeft: '5%'}}>
                <Card.Title title={title} subtitle={date} />
                <Card.Content>
                    <Title style={{color: 'gold'}}>{score}</Title>
                    <Paragraph>{overview}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/w500${poster}`}} />
                <Card.Actions>
                    <Button onPress={() => {navigation.navigate('About', {id: id})}}>MORE</Button>
                </Card.Actions>
            </Card>
}

export default memo(MovieCard)