import React from 'react';
import { Text, StyleSheet, View, TextStyle, StyleProp } from 'react-native';

interface HeaderBarProps {
  title: string;
  style?: StyleProp<TextStyle>;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title, style }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, style]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Add any container styles if needed
  },
  title: {
    // Default styles for the title
    fontSize: 20,
    fontWeight: 'bold',
    // Ensure no default color is set here if you want to override it
  },
});

export default HeaderBar; 