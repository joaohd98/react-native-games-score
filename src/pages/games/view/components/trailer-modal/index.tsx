import React, {Component} from 'react';
import {
  Text,
} from 'react-native';
import {GamesTrailerModalComponentStyles} from './styles';
import {ModalTransparentComponent} from '../../../../../components/modal-transparent';

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
      Modal,
      CloseIconContainer,
      CloseIcon,
    } = GamesTrailerModalComponentStyles;

    return (
      <Modal visible={visible} close={closeModal}>
        <CloseIconContainer onPress={closeModal}>
          <CloseIcon name={"close"} />
        </CloseIconContainer>
        <Text>AAAAA</Text>
        <Text>AAAAA</Text>
        <Text>AAAAA</Text>
        <Text>AAAAA</Text>
        <Text>AAAAA</Text>
      </Modal>
    );

  };

}
