import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';

const DATA = [
  {
    id: 1,
    text: 'Card #1',
    uri:
      'https://i.picsum.photos/id/1004/5616/3744.jpg?hmac=Or7EJnz-ky5bsKa9_frdDcDCR9VhCP8kMnbZV6-WOrY',
  },
  {
    id: 2,
    text: 'Card #2',
    uri:
      'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ',
  },
  {
    id: 3,
    text: 'Card #3',
    uri:
      'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
  },
  {
    id: 4,
    text: 'Card #4',
    uri:
      'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk',
  },
  {
    id: 5,
    text: 'Card #5',
    uri:
      'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
  },
  {
    id: 6,
    text: 'Card #6',
    uri:
      'https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc',
  },
  {
    id: 7,
    text: 'Card #7',
    uri:
      'https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII',
  },
  {
    id: 8,
    text: 'Card #8',
    uri:
      'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y',
  },
];
class App extends Component {
  renderCard(item) {
    return (
      <Card key={item.id}>
        <Card.Image source={{ uri: item.uri }} />
        <Card.Divider />
        <Card.Title>{item.text}</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 10 }}>
          I can customize the Card further
        </Text>
        <Button
          icon={{ name: 'code' }}
          backgroundColor="#03A9F4"
          title="View Now!"
        />
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card>
        <Card.Title>All Done!</Card.Title>
        <Text style={{ marginBottom: 10 }}>There's no more content here!</Text>
        <Button backgroundColor="#03A9F4" title="Get more!" />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
