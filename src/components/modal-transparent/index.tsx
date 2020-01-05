import React, {Component} from 'react';
import {
  Modal, TouchableOpacity, TouchableOpacityProps,
} from 'react-native';
import {ModalTransparentComponentStyles} from './styles';

export interface Props {
  style?: TouchableOpacityProps,
  visible: boolean,
  close: () => void
}

export class ModalTransparentComponent extends Component<Props> {

  render = () => {

    const {
      ModalContainer
    } = ModalTransparentComponentStyles;

    const {
      style,
      visible,
      close
    } = this.props;

    return (
      <Modal visible={visible} animationType={"fade"} transparent={true}>
        <ModalContainer activeOpacity={1} onPress={close}>
          <TouchableOpacity style={style} activeOpacity={1} onPress={e => e.stopPropagation()}>
            { this.props.children }
          </TouchableOpacity>
        </ModalContainer>
      </Modal>
    )
  };

}
