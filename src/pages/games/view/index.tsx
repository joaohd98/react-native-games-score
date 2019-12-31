import React, {Component} from 'react';
import {GamesListComponent} from './components/list';
import {GamesHeaderComponent} from './components/header';
import {Container} from '../../../theme/components';

export class GamesPage extends Component {

  static navigationOptions = GamesHeaderComponent;

  render() {

    return (
      <Container>
        <GamesListComponent/>
      </Container>
    )

  }

}
