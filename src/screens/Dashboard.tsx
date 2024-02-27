import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

const Dashboard: React.FC = () => {
  const {logout, user} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {user ? user.name : 'Guest'}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Dashboard;
