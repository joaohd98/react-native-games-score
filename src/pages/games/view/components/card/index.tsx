import React, {Component} from 'react';
import {GamesCardComponentStyle} from './styles';
import {GamesTrailerModalComponent} from '../trailer-modal';
import {GameServiceResponseCardModel} from '../../../../../services/games/model';

interface Props {
  content: GameServiceResponseCardModel,
}

interface State {
  isExpandable: boolean,
  isModalVisible: boolean,
}

export class GamesCardComponent extends Component<Props, State> {

  state = {
    isExpandable: false,
    isModalVisible: false
  };

  getCardFooterButtonContent = (): JSX.Element => {

    const {
      CardFooterText,
      CardFooterIcon,
    } = GamesCardComponentStyle;

    const {
      isExpandable
    } = this.state;

    return (
      <>
        <CardFooterText>{ isExpandable ? 'Collapse' : 'Expand' }</CardFooterText>
        <CardFooterIcon name={ isExpandable ? "chevron-up" : "chevron-down"}/>
      </>
    )

  };

  render = () => {

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
      CardFooterText
    } = GamesCardComponentStyle;

    const {
      content
    } = this.props;

    const {
      isExpandable,
      isModalVisible
    } = this.state;

    const source = { uri: content.background_image };

    return (
      <>
        <Card>
          <CardContent>
            <CardLogo source={source} resizeMode={'stretch'}  />
            <CardDescriptionContent>
              <CardTitle>{ content.name }</CardTitle>
              <CardInformationContent>
                <CardType>
                  Platform: <CardInformation>{ content.platforms[0].platform.name}</CardInformation>
                </CardType>
                <CardType>
                  Release: <CardInformation>{ content.released }</CardInformation>
                </CardType>
              </CardInformationContent>
              <CardInformationContent>
                <CardDescription numberOfLines={isExpandable ? 0 : 3} ellipsizeMode="tail">
                  Developed by the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America’s unforgiving heartland. The game’s vast and atmospheric world also provides the foundation for a brand new online multiplayer experience. America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang has to rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal fissures threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang that raised him. [Rockstar]
                </CardDescription>
              </CardInformationContent>
            </CardDescriptionContent>
            <CardScore>
              <CardScoreText>{ content.metacritic || "TBA" }</CardScoreText>
            </CardScore>
          </CardContent>
          <CardFooterContent>
            <CardFooterButton onPress={() => this.setState({ isModalVisible: true })}>
              <CardFooterText>Watch Trailer</CardFooterText>
            </CardFooterButton>
            <CardFooterButton onPress={() => this.setState({ isExpandable: !isExpandable })}>
              { this.getCardFooterButtonContent() }
            </CardFooterButton>
          </CardFooterContent>
        </Card>
        <GamesTrailerModalComponent visible={isModalVisible} closeModal={() => this.setState({ isModalVisible: false })} />
      </>
    )

  };

}
