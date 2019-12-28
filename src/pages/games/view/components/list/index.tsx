import React, { Component } from 'react';
import {FlatList, Text} from 'react-native';

export class GamesListComponent extends Component {

  render = () => {

    return (
      <FlatList data={[1, 2, 3, 4, 5]} renderItem={(item) => (
        <Text>item</Text>
      )}/>
    )

  }

}
