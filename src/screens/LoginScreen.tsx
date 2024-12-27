import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert
} from 'react-native';
import { COLORS, SPACING, FONTSIZE } from '../theme/theme';
import { useState } from 'react';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    // Add your login logic here
    // For demo, just navigate to Home
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      
      <View style={styles.formContainer}>
        <Text style={styles.title}>Welcome Back</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={COLORS.primaryLightGreyHex}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={COLORS.primaryLightGreyHex}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity 
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.registerText}>
            Don't have an account? Register here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: SPACING.space_30,
  },
  title: {
    fontSize: FONTSIZE.size_30,
    color: COLORS.primaryWhiteHex,
    textAlign: 'center',
    marginBottom: SPACING.space_30,
  },
  input: {
    backgroundColor: COLORS.primaryDarkGreyHex,
    borderRadius: SPACING.space_15,
    padding: SPACING.space_16,
    marginBottom: SPACING.space_20,
    color: COLORS.primaryWhiteHex,
  },
  loginButton: {
    backgroundColor: COLORS.primaryOrangeHex,
    padding: SPACING.space_16,
    borderRadius: SPACING.space_15,
    marginTop: SPACING.space_10,
  },
  buttonText: {
    color: COLORS.primaryWhiteHex,
    textAlign: 'center',
    fontSize: FONTSIZE.size_16,
    fontWeight: '600',
  },
  registerText: {
    color: COLORS.primaryLightGreyHex,
    textAlign: 'center',
    marginTop: SPACING.space_20,
  }
});

export default LoginScreen;

