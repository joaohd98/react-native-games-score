import React, {Component} from 'react';
import {GamesCardComponentStyle} from './styles';
import {GamesTrailerModalComponent} from '../trailer-modal';
import {GameServiceResponseCardModel} from '../../../../../services/games/model';
import {Helpers} from '../../../../../helpers';

interface Props {
  content: GameServiceResponseCardModel,
}

interface State {
  isModalVisible: boolean,
}

export class GamesCardComponent extends Component<Props, State> {

  state = {
    isModalVisible: false
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
                  Platform(s): <CardInformation>{ Helpers.getTextSeparatedByComma(content.platforms, "TBA", "name" ,"platform")}</CardInformation>
                </CardType>
                <CardType>
                  Genre(s): <CardInformation>{ Helpers.getTextSeparatedByComma(content.genres, "TBA", "name")}</CardInformation>
                </CardType>
                <CardType>
                  Release: <CardInformation>{ content.released }</CardInformation>
                </CardType>
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
          </CardFooterContent>
        </Card>
        <GamesTrailerModalComponent visible={isModalVisible} closeModal={() => this.setState({ isModalVisible: false })} />
      </>
    )

  };

}
