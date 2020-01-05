import styled from 'styled-components/native';
import {Colors} from '../../theme/colors';
import {ModalTransparentComponent} from '../modal-transparent';

export const ActionSheetComponentStyles = {
  Modal: styled(ModalTransparentComponent)`
    position: absolute;
    bottom: 50px;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;    
  `,
  ActionTitle: styled.Text`
    font-size:  15px;
    text-align: center;
    color: ${Colors.gray};
  `,
  ActionList: styled.View`
    margin-top: 25px;
    margin-bottom: 25px;
    border-radius: 10px;
    overflow: hidden;
  `,
  ActionButton: styled.TouchableOpacity`
    padding: 15px;
    border-bottom-width: 0.5px;
    border-bottom-color: ${Colors.gray};
    background-color: ${Colors.grayLight};
  `,
  ActionCloseButton: styled.TouchableOpacity`
    padding: 15px;
    border-radius: 10px;
    background-color: ${Colors.grayLight}
  `,
  ActionText: styled.Text `
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: ${Colors.blue};
  `
};
