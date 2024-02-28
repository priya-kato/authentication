import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import {AuthContext} from '../navigation/AuthProvider';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export default function LoginScreen({navigation}: {navigation: any}) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {login} = useContext(AuthContext);
  const handleLogin = async (email: string, password: string) => {
    try {
      const loggedUser = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      console.log('authenticated user', loggedUser);
      navigation.navigate('Dashboard');
    } catch (error) {
      console.log('unauthorized user', error);

      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Login screen</Text>
      {/* <Text style={styles.text}>CI/CD</Text> */}

      <FormInput
        value={email}
        placeholderText="Email"
        onChangeText={(userEmail: string) => setEmail(userEmail)}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
      />
      <FormInput
        value={password}
        placeholderText="Password"
        onChangeText={(userPassword: string) => setPassword(userPassword)}
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Login"
        onPress={() => handleLogin(email, password)}
      />
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>New user? Join here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
    color: 'red',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 20,
    color: '#6646ee',
  },
});
