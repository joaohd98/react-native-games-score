import React, {Component} from 'react';
import {GamesListComponent} from './components/list';
import {View} from 'react-native';
import {GamesHeaderComponent} from './components/header';

export class GamesPage extends Component {

  static navigationOptions = GamesHeaderComponent;

  render() {

    return (
      <View>
        <GamesListComponent/>
      </View>
    )

  }

}
