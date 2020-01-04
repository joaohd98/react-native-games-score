import styled from 'styled-components/native';
import {Colors} from '../../../../../theme/colors';

export const GameListLoadingFooterComponentStyles = {
  View: styled.View`
    width: 100%;
    padding: 30px 20px;
    text-align: center;
  `,
  ActivityIndicator: styled.ActivityIndicator`
    color: ${Colors.black}
  `,
  Text: styled.Text`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
  `,

};
