import styled from 'styled-components/native'
import {Colors} from '../../theme/colors';
import {normalizeFontSize} from '../../theme/font-size';

export const SearchInputComponentStyles = {
  Input: styled.TextInput`
    background-color: ${Colors.grayLight};
    font-size: ${ normalizeFontSize(14) };
    margin: auto;
    padding: 0 10px;
    width: 100%;
    height: 70%;
    border-radius: 10px;
    color: ${Colors.black};
  `
};
