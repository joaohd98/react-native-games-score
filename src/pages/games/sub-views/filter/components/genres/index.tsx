import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {FilterGamesGenresComponentStyles} from './styles';

export class FilterGamesGenresComponent extends Component {

  getGenreCard = (item: number): JSX.Element => {

    const {
      View,
      TextView,
      Icon,
      Text
    } = FilterGamesGenresComponentStyles;

    return (
      <View>
        <TextView>
          <Icon name={item % 2 == 0 ? "check-square" : "square"} />
          <Text>Aventura</Text>
        </TextView>
      </View>
    )
  };

  render = () => {

    return (
      <FlatList
        numColumns={2}
        data={[1,2,3,4,5,6,6]}
        keyExtractor={item => item.toString()}
        scrollEnabled={false}
        renderItem={({item}) => this.getGenreCard(item)} />
    );

  }

}
