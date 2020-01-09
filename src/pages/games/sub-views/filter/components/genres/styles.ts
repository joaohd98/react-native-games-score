import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const FilterGamesGenresComponentStyles = {
  View: styled.View`
    width: 50%;
    margin-bottom: 15px;
    align-items: flex-start;
  `,
  TextView: styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    font-size: 20px;
  `,
  Text: styled.Text`
    font-size: 22px;
  `,
  Icon: styled(Icon)`
    font-size: 20px;
    padding-right: 10px;
    margin-top: 2.5px;
  `,

};
