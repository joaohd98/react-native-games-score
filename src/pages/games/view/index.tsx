import React, {Component} from 'react';
import {GamesListComponent} from './components/list';
import {GamesHeaderComponent} from './components/header/header';
import {Container} from '../../../theme/components';
import {GamesPageModel} from './providers/games-page-model';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {GamesPageInitialState} from './redux/games-page-reducer';
import {StatesReducers} from '../../../redux/reducers';
import {ServiceStatus} from '../../../services/model';
import {GamesListLoadingComponent} from './components/list-loading';
import {StyleSheet, View} from 'react-native';
import {
  WarningMessageComponent,
  WarningMessageComponentProps,
} from '../../../components/warning-message';
import {images} from '../../../assets';
import {GamePageConstants} from './providers/games-page-constants';
import Video from 'react-native-video';

class Games extends Component<GamesPageModel.Props> {

  static navigationOptions = GamesHeaderComponent;

  componentDidMount = () => {

    const {functions, filters, navigation} = this.props;

    functions?.getGames(filters!);

    navigation?.setParams({
     filters,
     functions
    });

  };

  getWarningMessage = (status: ServiceStatus): WarningMessageComponentProps => {

    const constants = GamePageConstants;

    const {functions, filters} = this.props;

    return {
      image: images.gameOver,
      title: constants.warningTitle,
      message: status === ServiceStatus.exception ? constants.warningStatusException : constants.warningStatusNoInternetConnection,
      buttonText: constants.warningButton,
      onButtonPress: () => functions?.getGames(filters!)
    }

  };

  render() {

    const { status, games, filters, functions } = this.props;

    const getElement = {
      [ServiceStatus.loading]:  <GamesListLoadingComponent/>,
      [ServiceStatus.noInternetConnection]: <WarningMessageComponent {...this.getWarningMessage(ServiceStatus.noInternetConnection)}/>,
      [ServiceStatus.exception]: <WarningMessageComponent {...this.getWarningMessage(ServiceStatus.exception!)} />,
      [ServiceStatus.success]: <GamesListComponent games={games!}
                                                   initialNumberRender={filters?.page_size!}
                                                   increaseListGames={() => functions!.increaseGameList(games!)}/>,
      [ServiceStatus.noAction]: <View/>,
    };

    return (
      <Container>
        { getElement[status!] }
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
