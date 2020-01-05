import React, {Component} from 'react';
import {FilterGamesOrderingComponent} from './ components/ordering';
import {FilterGamesPageStyles} from './styles';

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
