import React, { Component, useState } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';

import CalendarioScreen from './CalendarioScreen'

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [date, selectDate, setDate] = React.useState(null);

  const handleDate = date => {
    setDate(date)
    setVisible(false)
  }

  return (
    <View style={{ marginTop: 22 }}>
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{ marginTop: 100, backgroundColor: 'lightgreen', height: 400 }}>
          <View>
            <CalendarioScreen />

            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
            <View>
              <Text>SELECTED DATE: { startDate }</Text>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
}