import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../../../../theme/colors';
import {normalizeFontSize} from '../../../../../theme/font-size';

export const GamesHeaderComponentStyle = {
  Input: styled.TextInput`
    background-color: ${Colors.grayLight};
    font-size: ${normalizeFontSize(14)};
    margin: auto;
    padding: 0 30px 0 35px;
    width: 100%;
    height: 70%;
    border-radius: 10px;
    color: ${Colors.black};
  `,
  SearchIcon: styled(Icon) `
    position: absolute;
    left: 10px;
    font-size: 20px;
    top: 10px;
    z-index: 5;
    color: ${Colors.gray};
  `,
  CloseIcon: styled(Icon) `
    position: absolute;
    right: 10px;
    font-size: 20px;
    top: -10px;
  `,

};
