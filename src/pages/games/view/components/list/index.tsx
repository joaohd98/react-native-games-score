import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {GamesCardComponent} from '../card';
import {WarningMessageComponent} from '../../../../../components/warning-message';
import {images} from '../../../../../assets';
import {GameListLoadingFooterComponent} from '../list-loading-footer';
import {GamesServiceResponseModel} from '../../../../../services/games/model';

interface Props {
  games: GamesServiceResponseModel,
  initialNumberRender: number,
  increaseListGames: () => void
}

interface State {
  isFooterRefreshing: boolean
}

export class GamesListComponent extends Component<Props, State> {

  state =  {
    isFooterRefreshing: false,
  };

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {

    if(this.state.isFooterRefreshing && prevProps.games.results.length < this.props.games.results.length)
      this.setState({ isFooterRefreshing: false });

  }

  increaseListGames = () => {

    if(!this.state.isFooterRefreshing) {
      this.setState({ isFooterRefreshing: true });
      this.props.increaseListGames();
    }

  };

  renderListEmptyComponent = (): JSX.Element => {

    return <WarningMessageComponent
      image={images.gameOver}
      title={"No Games Found :("}
      message={"Verify the list of filter and the search text"}
    />

  };

  render = () => {

    const { games, initialNumberRender } = this.props;

    return (
      <FlatList
        data={games.results}
        initialNumToRender={initialNumberRender}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <GamesCardComponent content={item} />}
        ListEmptyComponent={this.renderListEmptyComponent}
        ListFooterComponent={games.next ? <GameListLoadingFooterComponent/> : <></>}
        onEndReached={games.next ? this.increaseListGames : () => {}}
        onEndReachedThreshold={0.1}
      />
    )

  };

}
