import React, { Component } from 'react';
import {GamesListLoadingComponentStyle} from './styles';
import {Animated, ScrollView, View} from 'react-native';
import {Colors} from '../../../../../theme/colors';

interface State {
  skeletonAnimation: Animated.Value;
}

export class GamesListLoadingComponent extends Component<any, State> {

  state = {
    skeletonAnimation: new Animated.Value(0)
  };

  componentDidMount = () => {

    Animated.loop(
      Animated.timing(this.state.skeletonAnimation, {
        toValue: 300,
        duration: 3000
      })
    ).start();

  };

  renderCard = (key: number): JSX.Element => {
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
      CardFooterText,
    } = GamesListLoadingComponentStyle;

    const styles = {
      backgroundColor: this.state.skeletonAnimation.interpolate({
        inputRange: [0, 50, 100, 150, 200, 250, 300],
        outputRange: Colors.skeleton,
      })
    };

    return (
      <Card key={key}>
        <CardContent>
          <CardLogo source={{}} resizeMode={'stretch'} />
          <CardDescriptionContent>
            <CardTitle style={styles}/>
            <CardInformationContent>
              <CardType style={styles}/>
              <CardType style={styles}/>
            </CardInformationContent>
            <CardInformationContent>
              <CardDescription style={styles}/>
            </CardInformationContent>
          </CardDescriptionContent>
          <CardScore style={styles} />
        </CardContent>
        <CardFooterContent>
          <CardFooterText style={styles}/>
          <CardFooterText style={styles}/>
        </CardFooterContent>
      </Card>
    )

  };

  render = () => {

    let cards: JSX.Element[] = [];

    for(let i = 0; i < 10; i++)
      cards.push(this.renderCard(i));

    return (
      <ScrollView scrollEnabled={false}>
        { cards }
      </ScrollView>
    );
  }

}
