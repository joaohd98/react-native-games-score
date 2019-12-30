import React, { Component } from 'react';
import {FlatList, Text} from 'react-native';
import {GamesHeaderComponent} from '../header';

export class GamesListComponent extends Component {

  static navigationOptions = GamesHeaderComponent;

  render = () => {

    return (
      <FlatList data={[1, 2, 3, 4, 5]} renderItem={(item) => (
        <Text>item</Text>
      )}/>
    )

  }

}
