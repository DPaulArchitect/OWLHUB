import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';

const ProfileScreen = () => {
  const [nickname, setNickname] = useState('');
  const [profilePictureURL, setProfilePictureURL] = useState('');
  const [quote, setQuote] = useState('');

  const handleSubmit = () => {
    // Handle profile submission, e.g., send data to a server or update app state
    console.log('Profile submitted:', {nickname, profilePictureURL, quote});
    setNickname('');
    setProfilePictureURL('');
    setQuote('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Nickname"
        value={nickname}
        onChangeText={setNickname}
      />
      <TextInput
        style={styles.input}
        placeholder="Profile Picture URL"
        value={profilePictureURL}
        onChangeText={setProfilePictureURL}
      />
      {profilePictureURL !== '' && (
        <Image source={{uri: profilePictureURL}} style={styles.image} resizeMode="cover" />
      )}
      <TextInput
        style={styles.input}
        placeholder="Quote"
        value={quote}
        onChangeText={setQuote}
      />
      <Button title="Save" onPress={handleSubmit} />
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
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default ProfileScreen;
