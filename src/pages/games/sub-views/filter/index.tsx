import React, {Component} from 'react';
import {FilterGamesPageStyles} from './styles';
import {FilterGamesOrderingComponent} from './components/ordering';

export class FilterGamesPage extends Component {

  render = () => {

    const {
      Container,
      Item,
     // Footer
    } = FilterGamesPageStyles;

    return (
      <Container>
        <Item>
          <FilterGamesOrderingComponent/>
        </Item>
      </Container>
    )

  }

}
