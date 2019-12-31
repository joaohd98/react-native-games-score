import styled from 'styled-components/native';
import {Colors} from '../../../../../theme/colors';

export const GamesListComponentStyle = {
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
  CardLogo: styled.Image `
    width: 100px;
    height: 100px;
    border-radius: 10px;
  `,
  CardTitle: styled.Text `
   
  `,
  CardPlatformTitle: styled.Text `
  
  `,
  CardPlatformReleaseDate: styled.Text `
  
  `,
  CardDescription: styled.Text `
  
  `,
  CardFooter: styled.View `
  
  `,
  CardFooterButtons: styled.Button `
  
  `,
  CardScore: styled.View `
    background-color: red;
    border-radius: 100px;
    height: 30px;
    width: 30px;
  `,
};
