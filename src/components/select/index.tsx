import React, {Component} from 'react';
import {SelectMultipleComponentStyles} from './styles';
import {Text, View} from 'react-native';

export interface SelectComponentProps {
  visible: boolean,
  close: () => void
}

export class SelectComponent extends Component<SelectComponentProps> {

  render = () => {

    const {
      visible,
      close
    } = this.props;

    const {
      Modal,
      TitleContainer,
      TitleText,
      ListContainer,
      ScrollView,
      ButtonsContainer,
      ButtonLeft,
      ButtonRight,
      ButtonText
    } = SelectMultipleComponentStyles;

    return (
      <Modal visible={visible} close={close}>
        <TitleContainer>
          <TitleText>
            Musica
          </TitleText>
        </TitleContainer>
        <ListContainer>
          <ScrollView>
            <View onStartShouldSetResponder={() => true}>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>BBB</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>BBB</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>BBB</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>BBB</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>BBB</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>BBB</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>BBB</Text>
              <Text>BBB</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>BBB</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>BBB</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
              <Text>AAA</Text>
            </View>
          </ScrollView>
        </ListContainer>
        <ButtonsContainer>
          <ButtonLeft>
            <ButtonText>
              Cancel
            </ButtonText>
          </ButtonLeft>
          <ButtonRight>
            <ButtonText>
              Confirm
            </ButtonText>
          </ButtonRight>
        </ButtonsContainer>
      </Modal>
    )
  }

}

