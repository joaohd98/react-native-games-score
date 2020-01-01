import React, { Component } from 'react';
import {GamesListLoadingComponentStyle} from './styles';

export class GamesListLoadingComponent extends Component {

  render = () => {

    const {
      Card,
      CardLogo,
      CardContent,
      CardInformationContent,
      CardTitle,
      CardType,
      CardDescriptionContent,
      CardDescription,
      CardScore,
      CardFooterContent,
      CardFooterButton,
    } = GamesListLoadingComponentStyle;

    return (
      <Card>
        <CardContent>
          <CardLogo source={{uri: ''}} resizeMode={'stretch'} />
          <CardDescriptionContent>
            <CardTitle/>
            <CardInformationContent>
              <CardType/>
              <CardType/>
            </CardInformationContent>
            <CardInformationContent>
              <CardDescription numberOfLines={3} ellipsizeMode="tail" />
            </CardInformationContent>
          </CardDescriptionContent>
          <CardScore>
          </CardScore>
        </CardContent>
        <CardFooterContent>
          <CardFooterButton>
          </CardFooterButton>
          <CardFooterButton>
          </CardFooterButton>
        </CardFooterContent>
      </Card>
    )
  }

}
