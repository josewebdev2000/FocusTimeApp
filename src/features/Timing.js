import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {
  const timingOptions = [10, 15, 20];
  return (
    <>
      {timingOptions.map(timing => {
        return (
        <View style={styles.timingButton} key={timing}>
          <RoundedButton
          size={75}
          title={timing.toString()}
          onPress={() => onChangeTime(timing)}/>
        </View>)
      })}
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
