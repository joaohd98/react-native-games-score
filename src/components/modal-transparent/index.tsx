import React, {Component} from 'react';
import {
  Modal,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableWithoutFeedback,
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
      ModalOuter,
      ModalContent,
    } = ModalTransparentComponentStyles;

    const {
      style,
      visible,
      close
    } = this.props;

    return (
      <Modal visible={visible} animationType={"fade"} transparent={true}>
        <TouchableWithoutFeedback onPress={close}>
          <ModalOuter>
            <TouchableWithoutFeedback onPress={e => e.stopPropagation()}>
              <ModalContent style={style}>
                { this.props.children }
              </ModalContent>
            </TouchableWithoutFeedback>
          </ModalOuter>
        </TouchableWithoutFeedback>
      </Modal>
    )
  };

}
