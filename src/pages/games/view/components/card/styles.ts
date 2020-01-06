import styled from 'styled-components/native';
import {Colors} from '../../../../../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Animated} from 'react-native';
import {ProgressiveImageComponent} from '../../../../../components/progressive-image';

export const GamesCardComponentStyle = {
  Card: styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.grayLight};
    padding: 10px;
  `,
  CardContent: styled.View`
    flex-direction: row;
  `,
  CardDescriptionContent: styled.View`
    flex: 1;
    padding: 0 10px;
  `,
  CardLogo: styled(ProgressiveImageComponent) `
    width: 120px;
    height: 120px;
    border-radius: 10px;
  `,
  CardInformationContent: styled.View`
    margin-top: 10px;
  `,
  CardType: styled(Animated.Text) `
    margin-bottom: 10px;
    font-size: 15px;
    color: ${Colors.black};
    font-weight: bold;
  `,
  CardTitle: styled(Animated.Text) `
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
    color: ${Colors.black}
  `,
  CardInformation: styled.Text `
    color: ${Colors.gray};
  `,
  CardFooterContent: styled.View `
    margin-top: 10px;
    flex-direction: row;
    justify-content: flex-end
  `,
  CardFooterButton: styled.TouchableOpacity`
    flex-direction: row;
    padding: 5px
  `,
  CardFooterText: styled(Animated.Text)`
    font-size: 18px;
    color: ${Colors.blue};
  `,
  CardFooterIcon: styled(Icon)`
    font-size: 18px;
    padding-left: 5px
    color: ${Colors.blue};
    top: 2px
  `,
  CardScore: styled(Animated.View)`
    background-color: red;
    padding: 5px;
    border-radius: 100px;
    height: 30px
  `,
  CardScoreText: styled.Text`
    color: ${Colors.white};
    font-weight: bold;
  `
};
