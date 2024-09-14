import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../styles';

interface Props {
  isValid: boolean;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  handleReset: (e?: React.SyntheticEvent<any>) => void;
  resetPasswordState: () => void;
}

const FormButtons = (props: Props) => {
  const {isValid, handleSubmit, handleReset, resetPasswordState} = props;

  return (
    <View style={styles.formActions}>
      {/* Generate Password */}
      <TouchableOpacity
        disabled={!isValid}
        style={styles.primaryBtn}
        onPress={handleSubmit as any}>
        <Text style={styles.primaryBtnTxt}>Generate Password</Text>
      </TouchableOpacity>

      {/* Reset */}
      <TouchableOpacity
        style={styles.secondaryBtn}
        onPress={() => {
          handleReset();
          resetPasswordState();
        }}>
        <Text style={styles.secondaryBtnTxt}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormButtons;
