import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

interface TableItem {
  id: string;
  status: 'empty' | 'occupied';
}

const TableManagementScreen = () => {
  const [tables, setTables] = useState<TableItem[]>([
    { id: '1', status: 'empty' },
    { id: '2', status: 'occupied' },
    // Thêm các bàn khác nếu cần
  ]);

  const addTable = () => {
    const newTableId = (tables.length + 1).toString();
    setTables([...tables, { id: newTableId, status: 'empty' }]);
  };

  const renderTable = ({ item }: { item: TableItem }) => (
    <View style={styles.table}>
      <Text style={styles.tableText}>Bàn {item.id} - {item.status === 'empty' ? 'Trống' : 'Đang đặt'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quản lí bàn</Text>
      <FlatList
        data={tables}
        renderItem={renderTable}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTable}>
        <Text style={styles.addButtonText}>Thêm bàn</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  table: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
  },
  tableText: {
    fontSize: 18,
  },
  addButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TableManagementScreen; 