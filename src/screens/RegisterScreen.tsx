import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { COLORS, SPACING, FONTSIZE } from '../theme/theme';

const RegisterScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    // Handle registration logic here
    console.log('Registering:', { username, email, password });
    // Navigate to another screen after successful registration
    navigation.navigate('Home'); // Change 'Home' to the screen you want to navigate to
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        placeholderTextColor={COLORS.primaryLightGreyHex}
        value={username}
        onChangeText={setUsername}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor={COLORS.primaryLightGreyHex}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor={COLORS.primaryLightGreyHex}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: SPACING.space_30,
    backgroundColor: COLORS.primaryBlackHex,
  },
  title: {
    fontSize: FONTSIZE.size_30,
    color: COLORS.primaryWhiteHex,
    textAlign: 'center',
    marginBottom: SPACING.space_30,
  },
  label: {
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_10,
  },
  input: {
    backgroundColor: COLORS.primaryDarkGreyHex,
    borderRadius: SPACING.space_15,
    padding: SPACING.space_16,
    marginBottom: SPACING.space_20,
    color: COLORS.primaryWhiteHex,
  },
  registerButton: {
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
});

export default RegisterScreen;
