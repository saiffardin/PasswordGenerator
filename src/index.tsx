import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import {styles} from './styles';
import {Formik} from 'formik';
import CheckBox from './components/CheckBox';
import InputNumber from './components/InputNumber';
import FormButtons from './components/FormButtons';
import {PasswordSchema} from './validations/password-schema';
import ViewGeneratedPassword from './components/ViewGeneratedPassword';
import {createPassword} from './utils/create-password';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  const handleFormSubmit = (values: any) => {
    console.log('form values:', values);
    generatePasswordString(+values.passwordLength);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>

          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={PasswordSchema}
            onSubmit={handleFormSubmit}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => {
              return (
                <>
                  {/* Password Length */}
                  <InputNumber
                    title="Password Length"
                    registerName="passwordLength"
                    values={values}
                    touched={touched}
                    handleChange={handleChange}
                    errors={errors}
                  />

                  {/* lower case check-box */}
                  <CheckBox
                    title="Include lowercase"
                    state={lowerCase}
                    setState={setLowerCase}
                    fillColor="#29AB87"
                  />

                  {/* Uppercase check-box */}
                  <CheckBox
                    title="Include Uppercase"
                    state={upperCase}
                    setState={setUpperCase}
                    fillColor="#FED85D"
                  />

                  {/* Include Numbers check-box */}
                  <CheckBox
                    title="Include Numbers"
                    state={numbers}
                    setState={setNumbers}
                    fillColor="#C9A0DC"
                  />

                  {/* Include Symbols check-box */}
                  <CheckBox
                    title="Include Symbols"
                    state={symbols}
                    setState={setSymbols}
                    fillColor="#FC80A5"
                  />

                  {/* btns */}
                  <FormButtons
                    isValid={isValid}
                    handleReset={handleReset}
                    handleSubmit={handleSubmit}
                    resetPasswordState={resetPasswordState}
                  />
                </>
              );
            }}
          </Formik>
        </View>

        <ViewGeneratedPassword
          password={password}
          isPassGenerated={isPassGenerated}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default PasswordGenerator;
