import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TelaPrincipal from './telas/TelaPrincipal';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <TelaPrincipal />
    );
  }
}

