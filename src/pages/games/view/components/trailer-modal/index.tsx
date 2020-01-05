import React, {Component} from 'react';
import {
  Modal,
  Text,
} from 'react-native';
import {GamesTrailerModalComponentStyles} from './styles';

interface Props {
  visible: boolean,
  closeModal: () => void
}

export class GamesTrailerModalComponent extends Component<Props> {

  render = () => {

    const {
      visible,
      closeModal
    } = this.props;

    const {
      ModalContainer,
      ModalView,
      CloseIconContainer,
      CloseIcon,
    } = GamesTrailerModalComponentStyles;

    return (
      <Modal visible={visible} animationType={"slide"} transparent={true}>
        <ModalContainer activeOpacity={1} onPress={closeModal}>
          <ModalView activeOpacity={1} onPress={e => e.stopPropagation()}>
            <CloseIconContainer onPress={closeModal}>
              <CloseIcon name={"close"} />
            </CloseIconContainer>
            <Text>AAAAA</Text>
            <Text>AAAAA</Text>
            <Text>AAAAA</Text>
            <Text>AAAAA</Text>
            <Text>AAAAA</Text>
          </ModalView>
        </ModalContainer>
      </Modal>
    );

  };

}
