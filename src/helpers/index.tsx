import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

export class Helpers {

  static getIcon = (iconName: string, size: number, tintColor: string | undefined) => {
    return <Icon name={iconName} size={size} color={tintColor} />;
  };

  static getTextSeparatedByComma = (list: any[], errorText: string, index: string = "", subIndex: string = ""): string => {

    try {

      let text = "";

      const length = list.length;

      for(let i = 0; i < length - 1; i++) {

        if(subIndex)
          text += `${list[i][subIndex][index]}, `;

        else if(index)
          text += `${list[i][index]}, `;

        else
          text += `${list[i]}, `;

      }

      const last = list.length - 1;

      if(subIndex)
        text += `${list[last][subIndex][index]}.`;

      else if(index)
        text += `${list[last][index]}.`;

      else
        text += `${list[last]}.`;

      return text;

    } catch (e) {

      return errorText;

    }

  }

}
