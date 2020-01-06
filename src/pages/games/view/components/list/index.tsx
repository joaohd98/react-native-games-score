import React, { Component } from 'react';
import {
  FlatList,
} from 'react-native';
import {GamesCardComponent} from '../card';
import {WarningMessageComponent} from '../../../../../components/warning-message';
import {images} from '../../../../../assets';
import {GameListLoadingFooterComponent} from '../list-loading-footer';
import {GamesServiceResponseModel} from '../../../../../services/games/model';

interface Props {
  games: GamesServiceResponseModel
}

export class GamesListComponent extends Component<Props> {

  renderListEmptyComponent = (): JSX.Element => {

    return <WarningMessageComponent
      image={images.gameOver}
      title={"No Games Found :("}
      message={"Verify the list of filter and the search text"}
      buttonText={"Try Again"}
      onButtonPress={() => {}}
    />

  };

  render = () => {

    const { games } = this.props;

    return (
      <FlatList
        data={games.results}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <GamesCardComponent content={item} />}
        ListEmptyComponent={this.renderListEmptyComponent}
        ListFooterComponent={<GameListLoadingFooterComponent/>}
        onRefresh={() => {}}
        refreshing={false}
      />
    )

  }

}
