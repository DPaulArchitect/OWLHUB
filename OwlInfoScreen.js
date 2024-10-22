import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OwlInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Owl Fun Facts and Care</Text>
      <Text style={styles.infoText}>
        - Owls are found on every continent except Antarctica.
      </Text>
      <Text style={styles.infoText}>
        - Owls have specialized feathers that enable silent flight.
      </Text>
      <Text style={styles.infoText}>
        - To care for an owl, provide a spacious enclosure and a balanced diet.
      </Text>
      {/* Add more fun facts and care information */}
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
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default OwlInfoScreen;
