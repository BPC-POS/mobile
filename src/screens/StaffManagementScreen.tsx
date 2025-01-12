import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StaffManagementScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Quản lí nhân viên</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default StaffManagementScreen; 