import styled from 'styled-components/native';
import {ModalTransparentComponent} from '../modal-transparent';
import {Colors} from '../../theme/colors';

export const SelectMultipleComponentStyles = {
  Modal: styled(ModalTransparentComponent)`
    width: 70%;
    margin: auto;
    background-color: ${Colors.grayLight};
    border-radius: 10px;
  `,
  TitleContainer: styled.View`
    padding: 15px;
    margin: auto;
    width: 100%;
    border-bottom-width: .55px;
    border-bottom-color: ${Colors.gray};
  `,
  TitleText: styled.Text `
    font-size: 18px;
    font-weight: bold;
    margin: auto;
    color: ${Colors.black};
  `,
  ListContainer: styled.View`
    max-height: 300px;
    padding: 15px;
    border-bottom-width: .55px;
    border-bottom-color: ${Colors.gray};
  `,
  ScrollView: styled.ScrollView`
    flex-grow: 0;
  `,
  ButtonsContainer: styled.View`
    flex-direction: row;
  `,
  ButtonLeft: styled.TouchableOpacity`
    width: 50%;
    border-right-width: .55px;
    border-right-color: ${Colors.gray};
  `,
  ButtonRight: styled.TouchableOpacity`
    width: 50%;
  `,
  ButtonText: styled.Text`
    margin: auto;
    padding: 15px;
    font-weight: bold;
    color: ${Colors.blue};
  `,
};
