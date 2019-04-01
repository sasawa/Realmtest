import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
// import Realm from 'realm';

const Realm = require('realm');
let realm;

export default class TelaPrincipal extends Component {
  constructor() {
    super();
    this.state = {
    number: 0,
    nome: '',
    };

        realm = new Realm({
      schema: [{
        name: 'Numbers',
        properties: { 
          number: 'int',
        },
      }],
    });
  }

  increaseNumber = () => {
    realm.write(() => {
      let number = realm.objects('Numbers').length;
      number++;

      realm.create('Numbers', {
        number: Number(number),
      });
      this.setState({ number });
    });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 60 }}>{this.state.number + ''}</Text>
        <Button onPress={() => this.increaseNumber()}
                title='Click Here' />
      </View>
    );
  }
}
