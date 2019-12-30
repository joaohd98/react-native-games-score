import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Helpers} from '../../../../../helpers';
import {Colors} from '../../../../../theme/colors';
import {SearchInputComponent} from '../../../../../components/search-input';

export const GamesHeaderComponent = () => {

  const bars = Helpers.getIcon('bars', 30, Colors.blue);

  return ({
    headerTitle: <SearchInputComponent />,
    headerRight: (
      <TouchableOpacity>
        { bars }
      </TouchableOpacity>
    ),
    headerTitleContainerStyle: {
      left: 15,
    },
  });

};
