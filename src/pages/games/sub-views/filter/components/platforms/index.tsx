import React, {Component} from 'react';
import {FilterGamesPlatformsComponentStyles} from './styles';
import {SelectComponent} from '../../../../../../components/select';

interface State {
  isShowingSelect: boolean;
}

export class FilterGamesPlatformsComponent extends Component<any, State> {

  state = {
    isShowingSelect: true
  };

  render = () => {

    const {
      View,
      Icon,
      Text
    } = FilterGamesPlatformsComponentStyles;

    return (
      <>
        <View>
          <Icon name={"chevron-down"}/>
          <Text>AAA</Text>
          <SelectComponent visible={this.state.isShowingSelect} close={() => this.setState({isShowingSelect: false})} />
        </View>
      </>
    )

  }


}
