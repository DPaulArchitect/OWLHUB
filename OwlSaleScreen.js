import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';

const OwlSaleScreen = () => {
  const [owlImageURL, setOwlImageURL] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSubmit = () => {
    // Handle advertisement submission, e.g., send data to a server or update app state
    console.log('Advertisement submitted:', {owlImageURL, price, location, nickname});
    setOwlImageURL('');
    setPrice('');
    setLocation('');
    setNickname('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sell Your Owl</Text>
      <TextInput
        style={styles.input}
        placeholder="Owl Image URL"
        value={owlImageURL}
        onChangeText={setOwlImageURL}
      />
      {owlImageURL !== '' && (
        <Image source={{uri: owlImageURL}} style={styles.image} resizeMode="cover" />
      )}
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Nickname"
        value={nickname}
        onChangeText={setNickname}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Button title="Contact" onPress={() => alert('Contact the seller to buy the owl.')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default OwlSaleScreen;
