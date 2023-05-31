import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ConfirmOrder = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiration, setCardExpiration] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  const navigation = useNavigation();

  const handleCheckout = () => {
   
    if (!name || !address || !city || !state || !zip || !cardNumber || !cardExpiration || !cardCvv) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    Alert.alert('Success', 'Your order was successful. Thank you for your order!', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Dashboard'),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="home" size={32} color="#8a0030" onPress={() => navigation.navigate('Dashboard')} />
        <Text style={styles.heading}>Confirm Order</Text>
        <Ionicons name="mail" size={32} color="#8a0030" onPress={() => navigation.navigate('ContactForm')} />
      </View>
      
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="City"
          value={city}
          onChangeText={setCity}
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="State"
          value={state}
          onChangeText={setState}
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Zip"
          value={zip}
          onChangeText={setZip}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          value={cardNumber}
          onChangeText={setCardNumber}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Expiration Date (MM/YY)"
          value={cardExpiration}
          onChangeText={setCardExpiration}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="CVV"
          value={cardCvv}
          onChangeText={setCardCvv}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.formGroup}>
        <Button title="Checkout" onPress={handleCheckout} color="#800000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#8a0030',
  },
  formGroup: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#8a0030',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    color: '#333',
  },
});

export default ConfirmOrder;
