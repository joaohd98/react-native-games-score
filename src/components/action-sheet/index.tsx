import React, {Component} from 'react';
import {Modal} from 'react-native';
import {ActionSheetStyles} from './styles';

interface Props {
  visible: boolean,
  closeModal: () => void
}

export class ActionSheet extends Component<Props> {

  render = () => {

    const {
      visible,
      closeModal
    } = this.props;

    const {
      ModalContainer,
      ModalView,
      ActionTitle,
      ActionList,
      ActionButton,
      ActionText,
      ActionCloseButton
    } = ActionSheetStyles;

    return (
      <Modal visible={visible} animationType={"slide"} transparent={true}>
        <ModalContainer activeOpacity={1} onPress={closeModal}>
          <ModalView activeOpacity={1} onPress={e => e.stopPropagation()}>
            <ActionList>
              <ActionButton activeOpacity={1}>
                <ActionTitle>Titulo</ActionTitle>
              </ActionButton>
              <ActionButton activeOpacity={0.9}>
                <ActionText>Test</ActionText>
              </ActionButton>
              <ActionButton activeOpacity={0.9}>
                <ActionText>Test</ActionText>
              </ActionButton>
              <ActionButton activeOpacity={0.9}>
                <ActionText>Test</ActionText>
              </ActionButton>
            </ActionList>
            <ActionCloseButton activeOpacity={0.9}>
              <ActionText>Test</ActionText>
            </ActionCloseButton>
          </ModalView>
        </ModalContainer>
      </Modal>
    )

  }


}
