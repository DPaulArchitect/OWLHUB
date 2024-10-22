import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import NavigationButton from './NavigationButton';

const HomeScreen = () => {
  const [owls, setOwls] = useState([]);

  const addOwl = () => {
    setOwls([...owls, {id: Date.now(), name: 'Owl ' + (owls.length + 1)}]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Social Owl App</Text>
      <Button title="Add Owl" onPress={addOwl} />
      {owls.map((owl) => (
        <View key={owl.id} style={styles.owlContainer}>
          <Text style={styles.owlName}>{owl.name}</Text>
        </View>
      ))}
      <NavigationButton screenName="Post" title="Create Post" />
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
  owlContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  owlName: {
    fontSize: 18,
  },
});

export default HomeScreen;
