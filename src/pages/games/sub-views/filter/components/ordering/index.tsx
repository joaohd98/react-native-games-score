import React, {Component} from 'react';
import {FilterGamesOrderingComponentStyles} from './styles';
import {
  ActionSheetComponent,
  ActionSheetProps,
} from '../../../../../../components/action-sheet';

interface State {
  isActionSheetOpen: boolean
}

export class FilterGamesOrderingComponent extends Component<any, State> {

  state = {
    isActionSheetOpen: false
  };

  getActionSheetProps = (): ActionSheetProps => {

    const { isActionSheetOpen } = this.state;

    return {
      visible: isActionSheetOpen,
      title: "Ordering",
      options: [
        { text: "AAA", callback: () => {} },
        { text: "BBB", callback: () => {} },
        { text: "CCC", callback: () => {} },
      ],
      close: () => this.setState({ isActionSheetOpen: false })
    }

  };

  render = () => {

    const {
      View,
      Icon,
      Text
    } = FilterGamesOrderingComponentStyles;

    return (
      <>
        <View onPress={() => this.setState({ isActionSheetOpen: true })}>
          <Icon name={"arrow-up"}/>
          <Icon name={"arrow-down"}/>
          <Text>AAA</Text>
        </View>
        <ActionSheetComponent {...this.getActionSheetProps()} />
      </>
    );

  };

}
