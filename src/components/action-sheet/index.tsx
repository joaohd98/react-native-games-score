import React, {Component} from 'react';
import {ActionSheetComponentStyles} from './styles';

export interface ActionSheetProps {
  title: string,
  options: { text: string, callback: () => void }[],
  visible: boolean,
  close: () => void
}

export class ActionSheetComponent extends Component<ActionSheetProps> {

  renderOptions = (): JSX.Element[] => {

    const {
      ActionButton,
      ActionText,
    } = ActionSheetComponentStyles;

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
      close
    } = this.props;

    const {
      Modal,
      ActionTitle,
      ActionList,
      ActionButton,
      ActionText,
      ActionCloseButton
    } = ActionSheetComponentStyles;

    return (
      <Modal visible={visible} close={close}>
        <ActionList>
          <ActionButton activeOpacity={1}>
            <ActionTitle>{ title }</ActionTitle>
          </ActionButton>
          { this.renderOptions() }
        </ActionList>
        <ActionCloseButton activeOpacity={0.9} onPress={close}>
          <ActionText>Cancelar</ActionText>
        </ActionCloseButton>
      </Modal>
    )

  }


}
