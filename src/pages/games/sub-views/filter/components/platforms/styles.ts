import styled from 'styled-components/native';
import {Colors} from '../../../../../../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export const FilterGamesPlatformsComponentStyles = {
  View: styled.TouchableOpacity`
    flex-direction: row;
    width: 100%;
    padding: 20px;
    background-color: ${Colors.grayLight};
  `,
  Icon: styled(Icon) `
    font-size: 18px;
    font-weight: 500;
    margin-right: 2.5px;
    color: ${Colors.blue};
  `,
  Text: styled.Text `
    font-size: 18px;
    font-weight: 500;
    margin-left: 10px;
    color: ${Colors.blue};
  `
};
