import React, {Component} from 'react';
import {GamesCardComponentStyle} from './styles';
import {GamesTrailerModalComponent} from '../trailer-modal';
import {GameServiceResponseCardModel} from '../../../../../services/games/model';
import {Helpers} from '../../../../../helpers';
import {images} from '../../../../../assets';
import {GamesCardComponentConst} from './constants';

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
    
    const constants = GamesCardComponentConst;

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

    const source = content.background_image ?  { uri: content.background_image } : images.imageNotFound;

    return (
      <>
        <Card>
          <CardContent>
            <CardLogo source={source} resizeMode={'stretch'}  />
            <CardDescriptionContent>
              <CardTitle>{ content.name }</CardTitle>
              <CardInformationContent>
                <CardType>
                  {constants.platforms}<CardInformation>{ Helpers.getTextSeparatedByComma(content.platforms, "TBA", "name" ,"platform")}</CardInformation>
                </CardType>
                <CardType>
                  {constants.genres}<CardInformation>{ Helpers.getTextSeparatedByComma(content.genres, "TBA", "name")}</CardInformation>
                </CardType>
                <CardType>
                  {constants.release}<CardInformation>{ content.released }</CardInformation>
                </CardType>
              </CardInformationContent>
            </CardDescriptionContent>
            <CardScore>
              <CardScoreText>{ content.metacritic || constants.metacriticNoScore }</CardScoreText>
            </CardScore>
          </CardContent>
          <CardFooterContent>
            <CardFooterButton onPress={() => this.setState({ isModalVisible: true })}>
              <CardFooterText>{constants.watchTrailer}</CardFooterText>
            </CardFooterButton>
          </CardFooterContent>
        </Card>
        <GamesTrailerModalComponent visible={isModalVisible} closeModal={() => this.setState({ isModalVisible: false })} />
      </>
    )

  };

}
