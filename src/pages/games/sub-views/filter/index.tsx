import React, {Component} from 'react';
import {FilterGamesPageStyles} from './styles';
import {FilterGamesOrderingComponent} from './components/ordering';
import {FilterGamesGenresComponent} from './components/genres';
import {FilterGamesPlatformsComponent} from './components/platforms';

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
        <Item>
          <FilterGamesGenresComponent/>
        </Item>
        <Item>
          <FilterGamesPlatformsComponent/>
        </Item>
      </Container>
    )

  }

}
