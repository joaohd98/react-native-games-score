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
  CardScore,
  CardFooterContent,
  CardFooterText,
} = GamesCardComponentStyle;

export const GamesListLoadingComponentStyle = {
  Card: styled(Card)``,
  CardLogo: styled(CardLogo)`
    background-color: ${Colors.skeleton[0]};
  `,
  CardContent: styled(CardContent)``,
  CardInformationContent: styled(CardInformationContent)``,
  CardTitle: styled(CardTitle)`
    width: 100%
    height: 10px;
    background-color: ${Colors.skeleton[0]};
  `,
  CardType: styled(CardType)`
    width: 100%
    height: 25px;
    margin-top: 5px;
    background-color: ${Colors.skeleton[0]};
  `,
  CardDescriptionContent: styled(CardDescriptionContent)``,
  CardScore: styled(CardScore)`
    height: 30px;
    width: 30px;
    background-color: ${Colors.skeleton[0]};
  `,
  CardFooterContent: styled(CardFooterContent)``,
  CardFooterText: styled(CardFooterText)`
    width: 100px
    height: 20px;
    margin-right: 5px;
    background-color: ${Colors.skeleton[0]};
  `,
};
