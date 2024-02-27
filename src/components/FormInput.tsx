import React, { FC } from 'react';
import { StyleSheet, TextInput, ViewStyle } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

interface FormInputProps {
  labelValue: string;
  placeholderText: string;
}

const FormInput: FC<FormInputProps> = ({ labelValue, placeholderText, ...rest }) => {
  return (
    <TextInput
      value={labelValue}
      style={styles.input}
      numberOfLines={1}
      placeholder={placeholderText}
      placeholderTextColor='#666'
      color='#50535B'
      {...rest}
    />
  );
}

interface Styles {
  input: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  input: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    borderRadius: 8,
    borderWidth: 1
  }
});

export default FormInput;