import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onTap: Function;
}

export const Button: React.FC<ButtonProps> = ({ title, onTap }) => {
  return (
    <TouchableOpacity style={styles.btnLogin} onPress={() => onTap()}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnLogin: {
    height: 60,
    backgroundColor: '#295FED',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 30,
  },
  btnText: {
    fontSize: 20,
    color: '#FFF',
  },
});
