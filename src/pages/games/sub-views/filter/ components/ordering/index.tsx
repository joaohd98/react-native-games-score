import React, {Component} from 'react';
import {FilterGamesOrderingComponentStyles} from './styles';

export class FilterGamesOrderingComponent extends Component {

  render = () => {

    const {
      View,
      Icon,
      Text
    } = FilterGamesOrderingComponentStyles;

    return (
      <View>
        <Icon name={"arrow-up"}/>
        <Icon name={"arrow-down"}/>
        <Text>AAA</Text>
      </View>
    );

  };

}
