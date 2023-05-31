import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const navigation = useNavigation();

  const handleSend = () => {

    Alert.alert('Success', 'Your message has been sent!', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Dashboard'),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Us</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <Button title="Send" onPress={handleSend} color="#8a0030" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color:'#8a0030',
  },
  input: {
    borderWidth: 1,
    borderColor: '#8a0030',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  messageInput: {
    height: 100,
  },
});

export default ContactUs;
