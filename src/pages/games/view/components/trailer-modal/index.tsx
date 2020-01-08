import React, {Component} from 'react';
import {GamesTrailerModalComponentStyles} from './styles';
import Video from 'react-native-video';

interface Props {
  video: string,
  visible: boolean,
  closeModal: () => void
}

export class GamesTrailerModalComponent extends Component<Props> {

  render = () => {

    const {
      visible,
      closeModal,
      video
    } = this.props;

    const {
      Modal,
      CloseIconContainer,
      CloseIcon,
      VideoContainer,
      Video,
    } = GamesTrailerModalComponentStyles;

    return (
      <Modal visible={visible} close={closeModal}>
        <CloseIconContainer onPress={closeModal}>
          <CloseIcon name={"close"} />
        </CloseIconContainer>
        <VideoContainer>
          <Video source={{uri: video}} resizeMode={"stretch"} controls={true}/>
        </VideoContainer>
      </Modal>
    );

  };

}
