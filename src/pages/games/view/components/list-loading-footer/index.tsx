import React, {Component} from 'react';
import {GameListLoadingFooterComponentStyles} from './styles';
import {GameListLoadingFooterComponentConst} from './constants';

export class GameListLoadingFooterComponent extends Component {

  render = () => {

    const constants = GameListLoadingFooterComponentConst;

    const {
      View,
      Text,
      ActivityIndicator
    } = GameListLoadingFooterComponentStyles;

    return (
      <View>
        <ActivityIndicator size={"large"}/>
        <Text>{ constants.loadingText }</Text>
      </View>
    )

  }

}
