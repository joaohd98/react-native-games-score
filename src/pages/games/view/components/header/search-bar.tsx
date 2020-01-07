import {
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import {GamesPageModel} from '../../providers/games-page-model';
import {GameServiceRequestModel} from '../../../../../services/games/model';
import React, {Component} from 'react';
import {GamesHeaderComponentStyle} from './header-styles';
import {TouchableOpacity} from 'react-native';

interface State {
  text: string,
  timeoutTyping: any,
}

interface Props {
  navigation: NavigationScreenProp<NavigationState, GamesPageModel.Props>,
  filters: GameServiceRequestModel,
  startTyping: () => void,
  finishedTyping: (filters: GameServiceRequestModel) => void,
}

export class HeaderSearchBar extends Component<Props, State> {

  state = {
    text: this.props.filters.search,
    timeoutTyping: 0,
  };

  changeText = (search: string) => {

    this.setState({ text: search });

    const {timeoutTyping} = this.state;
    const {startTyping, finishedTyping, filters} = this.props;

    startTyping();

    if (timeoutTyping)
      clearTimeout(timeoutTyping);

    this.setState({
      timeoutTyping: setTimeout(() => {
        finishedTyping({...filters, search});
      }, 500)
    });

  };

  getCloseIcon = () => {

    const { CloseIcon } = GamesHeaderComponentStyle;
    const { text } = this.state;

    if(text !== "") {
      return (
        <TouchableOpacity onPress={() => this.changeText("")}>
          <CloseIcon name="times-circle" />
        </TouchableOpacity>
      )
    }

    else
      return <></>;

  };

  render = () => {

    const { Input, SearchIcon } = GamesHeaderComponentStyle;
    const { text } = this.state;

    return (
      <>
        <SearchIcon name="search" />
        <Input value={text} autoCorrect={false} onChangeText={search => this.changeText(search)}  />
        { this.getCloseIcon() }
      </>
    );

  }

}
