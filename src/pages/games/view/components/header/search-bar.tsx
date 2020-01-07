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
  text: string
}

interface Props {
  navigation: NavigationScreenProp<NavigationState, GamesPageModel.Props>,
  filters: GameServiceRequestModel,
  changeText: (filters: GameServiceRequestModel) => void,
}

export class HeaderSearchBar extends Component<Props, State> {

  state = {
    text: this.props.filters.search,
  };

  changeText = (search: string) => {

    const {changeText, filters} = this.props;

    this.setState({text: search});
    changeText({...filters, search});

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
