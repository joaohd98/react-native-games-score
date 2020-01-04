import React, {Component} from 'react';
import {GameListLoadingFooterComponentStyles} from './styles';

export class GameListLoadingFooterComponent extends Component {

  render = () => {

    const {
      View,
      Text,
      ActivityIndicator
    } = GameListLoadingFooterComponentStyles;

    return (
      <View>
        <ActivityIndicator size={"large"}/>
        <Text>Carrgando</Text>
      </View>
    )

  }

}
