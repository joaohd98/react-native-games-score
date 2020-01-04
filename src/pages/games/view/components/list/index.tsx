import React, { Component } from 'react';
import {
  FlatList,
} from 'react-native';
import {GamesHeaderComponent} from '../header';
import {GamesCardComponent} from '../card';

export class GamesListComponent extends Component {

  static navigationOptions = GamesHeaderComponent;

  render = () => {

    return (
      <FlatList
        data={[1]}
        keyExtractor={item => item.toString()}
        renderItem={item => <GamesCardComponent />}/>
    )

  }

}
