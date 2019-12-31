import React, { Component } from 'react';
import {FlatList, View, Text} from 'react-native';
import {GamesHeaderComponent} from '../header';
import {GamesListComponentStyle} from './styles';
import {
  FlexColumn,
  FlexRow,
} from '../../../../../theme/components';

export class GamesListComponent extends Component {

  static navigationOptions = GamesHeaderComponent;

  renderCard = (): JSX.Element => {

    const {
      Card,
      CardLogo,
      CardContent,
      CardDescriptionContent,
      CardTitle,
      CardScore,
    } = GamesListComponentStyle;

    const source = { uri: 'https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg' };

    return (
      <Card>
        <CardContent>
          <CardLogo source={source} resizeMode={'stretch'}  />
          <CardDescriptionContent>
            <CardTitle>Red Dead RedemptionRed Dead RedemptionRed Dead RedemptionRed Dead RedemptionRed Dead RedemptionRed Dead RedemptionRed Dead RedemptionRed Dead RedemptionRed Dead RedemptionRed Dead RedemptionRed Dead RedemptionRed Dead RedemptionRed Dead RedemptionRed Dead RedemptionRed Dead Redemption</CardTitle>
          </CardDescriptionContent>
          <CardScore>
          </CardScore>
        </CardContent>
      </Card>
    )

  };

  render = () => {

    return (
      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={item => item.toString()}
        renderItem={item => this.renderCard()}/>
    )

  }

}
