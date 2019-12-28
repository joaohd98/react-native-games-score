import React, {Component} from 'react';
import {GamesListComponent} from './components/list';
import {View} from 'react-native';

export class GamesPage extends Component {

  render() {

    return (
      <View>
        <GamesListComponent/>
      </View>
    )

  }

}
