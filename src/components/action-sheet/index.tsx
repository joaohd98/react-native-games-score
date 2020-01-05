import React, {Component} from 'react';
import {Modal} from 'react-native';
import {ActionSheetStyles} from './styles';

export interface ActionSheetProps {
  title: string,
  options: { text: string, callback: () => void }[],
  visible: boolean,
  closeModal: () => void
}

export class ActionSheet extends Component<ActionSheetProps> {

  renderOptions = (): JSX.Element[] => {

    const {
      ActionButton,
      ActionText,
    } = ActionSheetStyles;

    let elements: JSX.Element[] = [];

    this.props.options.forEach(option => {
      elements.push(
        <ActionButton key={option.text} activeOpacity={0.9} onPress={option.callback}>
          <ActionText>{ option.text }</ActionText>
        </ActionButton>
      );
    });

    return elements;

  };

  render = () => {

    const {
      title,
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
                <ActionTitle>{ title }</ActionTitle>
              </ActionButton>
              { this.renderOptions() }
            </ActionList>
            <ActionCloseButton activeOpacity={0.9} onPress={closeModal}>
              <ActionText>Cancelar</ActionText>
            </ActionCloseButton>
          </ModalView>
        </ModalContainer>
      </Modal>
    )

  }


}
