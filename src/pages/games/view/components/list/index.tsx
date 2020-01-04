import React, { Component } from 'react';
import {
  Animated,
  FlatList,
} from 'react-native';
import {GamesHeaderComponent} from '../header';
import {GamesCardComponent} from '../card';
import {WarningMessageComponent} from '../../../../../components/warning-message';
import {images} from '../../../../../assets';
import {GameListLoadingFooterComponent} from '../list-loading-footer';

export class GamesListComponent extends Component {

  static navigationOptions = GamesHeaderComponent;

  renderListEmptyCompoent = (): JSX.Element => {

    return <WarningMessageComponent
      image={images.gameOver}
      title={"No Games Found :("}
      message={"Verify the list of filter and the search text"}
      buttonText={"Try Again"}
      onButtonPress={() => {}}
    />

  };

  render = () => {

    return (
      <FlatList
        data={[1, 2]}
        keyExtractor={item => item.toString()}
        renderItem={item => <GamesCardComponent />}
        ListEmptyComponent={this.renderListEmptyCompoent}
        ListFooterComponent={<GameListLoadingFooterComponent/>}
        onRefresh={() => {}}
        refreshing={false}
      />
    )

  }

}
