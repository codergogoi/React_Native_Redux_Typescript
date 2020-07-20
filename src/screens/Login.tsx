import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { TextField } from '../components/TextField';
import { Button } from '../components/Button';

import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState, onLogin } from '../redux';
import { useNavigation } from '../utils';

export const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { navigate } = useNavigation();

  const { user, error } = useSelector(
    (state: ApplicationState) => state.userReducer
  );

  const { token } = user;

  useEffect(() => {
    if (token !== undefined) {
      navigate('Home');
    }
    //do nothing
  }, [user]);

  const onTapLogin = () => {
    dispatch(onLogin(email, password));
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigation}></View>
      <View style={styles.body}>
        <View style={styles.loginView}>
          <TextField placeholder="Email Id" onTextChange={setEmail} />
          <TextField
            placeholder="Password"
            onTextChange={setPassword}
            isSecure={true}
          />
          <Button title="Login" onTap={onTapLogin} />

          {token !== undefined && (
            <Text style={{ marginLeft: 20, marginRight: 20 }}>
              {JSON.stringify(user)}
            </Text>
          )}
        </View>
      </View>

      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
  },
  loginView: {
    marginTop: 200,
    marginLeft: 20,
    marginRight: 20,
    height: 400,
  },
  footer: {
    flex: 1,
  },
});
