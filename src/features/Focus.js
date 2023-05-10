import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.textInput}
            onChangeText={setSubject}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <RoundedButton 
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  inputContainer: {
    //paddingTop: Platform.OS === "android" ? 40 : 50,
    //paddingBottom: 50,
    padding: spacing.lg,
    paddingHorizontal: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  inputWrapper: {
    flex: 1,
    marginRight: spacing.sm,
  },
  buttonWrapper: {
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    width: '110%',
    right: 20
  },
});
