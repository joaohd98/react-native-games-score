import React, {Component} from 'react';
import { WarningMessageComponentStyle } from './styles';

interface Props {
  image?: number;
  title?: string;
  message?: string;
  button?: string
  onButtonPress?: () => {};
}

export class WarningMessageComponent extends Component<Props> {

  render = () => {

    const {
      View,
      Image,
      Title,
      Message,
      Button
    } = WarningMessageComponentStyle;

    const {
      image,
      title,
      message,
      button,
      onButtonPress
    } = this.props;

    return (
      <View>
        { image ? <Image source={image} /> : null }
        { title ? <Title>{ title }</Title> : null }
        { message ? <Message>{ message }</Message> : null }
        { button && onButtonPress ?  <Button onPress={onButtonPress} title={button} /> : null }
      </View>
    )

  }

}
