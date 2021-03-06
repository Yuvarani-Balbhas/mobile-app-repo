import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import Colors from 'App/Theme/Colors'

const TextInput = ({ errorText, ...props }) => (
  <View style={styles.container}>
    <Input
      style={styles.input}
      selectionColor={Colors.primary}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginVertical: 6,
  },
  input: {
    backgroundColor: Colors.surface,
  },
  error: {
    fontSize: 14,
    color: Colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default memo(TextInput);
