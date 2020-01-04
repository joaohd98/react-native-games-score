import React, {Component} from 'react';
import {GamesListComponent} from './components/list';
import {GamesHeaderComponent} from './components/header';
import {Container} from '../../../theme/components';
import {GamesListLoadingComponent} from './components/list-loading';
import {GameService} from '../../../services/games/service';
import {GameServiceRequestModel} from '../../../services/games/model';

export class GamesPage extends Component {

  static navigationOptions = GamesHeaderComponent;

  render() {

    return (
      <Container>
        <GamesListComponent/>
        <GamesListLoadingComponent/>
      </Container>
    )

  }

}
