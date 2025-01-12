import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const MenuButton = ({ navigation }: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonPress = () => {
    setModalVisible(true);
  };

  const handleFunctionSelect = (functionName: string) => {
    console.log(`Selected function: ${functionName}`);
    setModalVisible(false);
    switch (functionName) {
      case 'Quản lý bàn':
        navigation.navigate('TableManagementScreen');
        break;
      case 'Quản lý kho':
        navigation.navigate('InventoryManagementScreen');
        break;
      case 'Quản lý nhân viên':
        navigation.navigate('StaffManagementScreen');
        break;
      case 'Quản lý khách hàng':
        navigation.navigate('CustomerManagementScreen');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <TouchableOpacity onPress={handleButtonPress} style={styles.IconButton}>
        <Text style={styles.IconButtonText}>Menu</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.ModalContainer}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <View style={styles.ModalContent}>
            {['Quản lý bàn', 'Quản lý kho', 'Quản lý nhân viên', 'Quản lý khách hàng'].map((func, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleFunctionSelect(func)}
                style={styles.FunctionButton}
              >
                <Text style={styles.FunctionText}>{func}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  IconButton: {
    position: 'absolute',
    top: 30,
    left: 30,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 10,
  },
  IconButtonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 12,
  },
  ModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  ModalContent: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  FunctionButton: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  FunctionText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default MenuButton; 