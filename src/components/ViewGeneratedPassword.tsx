import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../styles';

interface Props {
  password: string;
  isPassGenerated: boolean;
}

const ViewGeneratedPassword = ({password, isPassGenerated}: Props) => {
  return (
    <>
      {isPassGenerated ? (
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.subTitle}>Result:</Text>
          <Text style={styles.description}>Long Press to copy</Text>
          <Text selectable={true} style={styles.generatedPassword}>
            {password}
          </Text>
        </View>
      ) : null}
    </>
  );
};

export default ViewGeneratedPassword;
