import React, { Component } from 'react';
import {
  FlatList,
} from 'react-native';
import {GamesHeaderComponent} from '../header';
import {GamesListComponentStyle} from './styles';

export class GamesListComponent extends Component {

  static navigationOptions = GamesHeaderComponent;

  renderCard = (): JSX.Element => {

    const {
      Card,
      CardLogo,
      CardContent,
      CardInformationContent,
      CardTitle,
      CardType,
      CardDescriptionContent,
      CardInformation,
      CardDescription,
      CardScore,
      CardScoreText,
      CardFooterContent,
      CardFooterButton,
      CardFooterText,
      CardFooterIcon,
    } = GamesListComponentStyle;

    const source = { uri: 'https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg' };

    return (
      <Card>
        <CardContent>
          <CardLogo source={source} resizeMode={'stretch'}  />
          <CardDescriptionContent>
            <CardTitle>Red Dead Redemption</CardTitle>
            <CardInformationContent>
              <CardType>
                Platform: <CardInformation>Playstation 4</CardInformation>
              </CardType>
              <CardType>
                Release: <CardInformation>11/06/1998</CardInformation>
              </CardType>
            </CardInformationContent>
            <CardInformationContent>
              <CardDescription numberOfLines={3} ellipsizeMode="tail">
                Developed by the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America’s unforgiving heartland. The game’s vast and atmospheric world also provides the foundation for a brand new online multiplayer experience. America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang has to rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal fissures threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang that raised him. [Rockstar]
              </CardDescription>
            </CardInformationContent>
          </CardDescriptionContent>
          <CardScore>
            <CardScoreText>98</CardScoreText>
          </CardScore>
        </CardContent>
        <CardFooterContent>
          <CardFooterButton>
            <CardFooterText>Watch Trailer</CardFooterText>
          </CardFooterButton>
          <CardFooterButton>
            <CardFooterText>Expand</CardFooterText>
            <CardFooterIcon name={"chevron-up"}/>
          </CardFooterButton>
        </CardFooterContent>
      </Card>
    )

  };

  render = () => {

    return (
      <FlatList
        data={[1]}
        keyExtractor={item => item.toString()}
        renderItem={item => this.renderCard()}/>
    )

  }

}
