import React, {Component} from 'react';
import {GamesListComponent} from './components/list';
import {GamesHeaderComponent} from './components/header';
import {Container} from '../../../theme/components';
import {GamesPageModel} from './providers/games-page-model';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {GamesPageInitialState} from './redux/games-page-reducer';
import {StatesReducers} from '../../../redux/reducers';

class Games extends Component<GamesPageModel.Props> {

  static navigationOptions = GamesHeaderComponent;

  componentDidMount = () => {

    const {functions, filters} = this.props;

    functions?.searchGames(filters!);

  };

  render() {

    return (
      <Container>
        <GamesListComponent/>
      </Container>
    )

  }

}

const mapStateToProps = (state: StatesReducers) => {
  return state.gamesPageReducer;
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  functions: bindActionCreators(GamesPageInitialState.functions!, dispatch)
});

export const GamesPage = connect(mapStateToProps, mapDispatchToProps)(Games);
