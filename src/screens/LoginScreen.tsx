import React, { useState } from "react";
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

const LoginScreen = ({ navigation }: any) => {
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
        <Text style={styles.title}>Hệ thống quản lý Cà Phê</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={COLORS.primaryWhiteHex}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={COLORS.primaryWhiteHex}
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

        <TouchableOpacity 
          style={styles.homeButton}
          onPress={() => navigation.navigate('Tab')}
        >
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhiteHex,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: SPACING.space_30,
  },
  title: {
    fontSize: FONTSIZE.size_30,
    color: COLORS.primaryBlackHex,
    textAlign: 'center',
    marginBottom: SPACING.space_30,
  },
  input: {
    backgroundColor: COLORS.primaryLightGreyHex,
    borderRadius: SPACING.space_15,
    padding: SPACING.space_16,
    marginBottom: SPACING.space_20,
    color: COLORS.primaryBlackHex,
  },
  loginButton: {
    backgroundColor: COLORS.primaryOrangeHex,
    padding: SPACING.space_16,
    borderRadius: SPACING.space_15,
    marginTop: SPACING.space_10,
  },
  buttonText: {
    color: COLORS.primaryBlackHex,
    textAlign: 'center',
    fontSize: FONTSIZE.size_16,
    fontWeight: '600',
  },
  registerText: {
    color: COLORS.primaryBlackHex,
    textAlign: 'center',
    marginTop: SPACING.space_20,
  },
  homeButton: {
    backgroundColor: COLORS.primaryOrangeHex,
    padding: SPACING.space_16,
    borderRadius: SPACING.space_15,
    marginTop: SPACING.space_10,
  }
});

export default LoginScreen;