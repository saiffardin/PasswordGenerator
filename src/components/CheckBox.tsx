import React from 'react';
import {Text, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {styles} from '../styles';

interface Props {
  title: string;
  state: boolean;
  setState: (x: boolean) => void;
  fillColor: string;
}

const CheckBox = ({title, state, setState, fillColor}: Props) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.heading}>{title}</Text>
      <View>
        <BouncyCheckbox
          // disableBuiltInState
          isChecked={state}
          onPress={() => setState(!state)}
          fillColor={fillColor}
        />
      </View>
    </View>
  );
};

export default CheckBox;
