import styled from 'styled-components/native';
import {Colors} from '../../../../../theme/colors';
import {GamesCardComponentStyle} from '../card/styles';

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
} = GamesCardComponentStyle;

export const GamesListLoadingComponentStyle = {
  Card: styled(Card)``,
  CardLogo: styled(CardLogo)`
    background-color: ${Colors.grayLight};
  `,
  CardContent: styled(CardContent)``,
  CardInformationContent: styled(CardInformationContent)``,
  CardTitle: styled(CardTitle)`
    width: 100%
    height: 10px;
    background-color: ${Colors.grayLight};
  `,
  CardType: styled(CardType)`
    width: 100%
    height: 10px;
    margin-top: 5px;
    background-color: ${Colors.grayLight};
  `,
  CardDescriptionContent: styled(CardDescriptionContent)``,
  CardDescription: styled(CardDescription)`
    width: 100%
    height: 30px;
    background-color: ${Colors.grayLight};
  `,
  CardScore: styled(CardScore)`
    height: 30px;
    width: 30px;
    background-color: ${Colors.grayLight};
  `,
  CardFooterContent: styled(CardFooterContent)``,
  CardFooterText: styled(CardFooterText)`
    width: 100px
    height: 20px;
    margin-right: 5px;
    background-color: ${Colors.grayLight};
  `,
};
