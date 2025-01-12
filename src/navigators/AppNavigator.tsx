import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TableManagementScreen from '../screens/TableManagementScreen';
import InventoryManagementScreen from '../screens/InventoryManagementScreen';
import StaffManagementScreen from '../screens/StaffManagementScreen';
import CustomerManagementScreen from '../screens/CustomerManagementScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen 
        name="TableManagementScreen" 
        component={TableManagementScreen}
        options={{ title: 'Quản lý bàn' }}
      />
      <Stack.Screen 
        name="InventoryManagementScreen" 
        component={InventoryManagementScreen}
        options={{ title: 'Quản lý kho' }}
      />
      <Stack.Screen 
        name="StaffManagementScreen" 
        component={StaffManagementScreen}
        options={{ title: 'Quản lý nhân viên' }}
      />
      <Stack.Screen 
        name="CustomerManagementScreen" 
        component={CustomerManagementScreen}
        options={{ title: 'Quản lý khách hàng' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;