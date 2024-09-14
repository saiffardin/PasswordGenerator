import {Text, TextInput, View} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import {FormikErrors, FormikTouched} from 'formik';

type FormType = {
  passwordLength: string;
};

interface Props {
  title: string;
  registerName: 'passwordLength';
  values: FormType;
  touched: FormikTouched<FormType>;
  errors: FormikErrors<FormType>;
  handleChange: (x: string) => any;
}

const InputNumber = (props: Props) => {
  const {title, registerName, values, touched, errors, handleChange} = props;

  return (
    <View style={styles.inputWrapper}>
      <View style={styles.inputColumn}>
        <Text style={styles.heading}>{title}</Text>
        {touched?.[registerName] && errors?.[registerName] && (
          <Text style={styles.errorText}>{errors?.[registerName]}</Text>
        )}
      </View>

      <TextInput
        style={styles.inputStyle}
        value={values?.[registerName]}
        onChangeText={handleChange(registerName)}
        placeholder="Ex. 8"
        keyboardType="numeric"
      />
    </View>
  );
};

export default InputNumber;
