import React from 'react';
import { StyleSheet, TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

interface FormButtonProps {
  buttonTitle: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const FormButton: React.FC<FormButtonProps> = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: windowWidth / 2,
    height: windowHeight / 15,
    backgroundColor: '#6646ee',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  buttonText: {
    fontSize: 28,
    color: '#ffffff'
  }
});


