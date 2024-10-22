import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';

const PostScreen = () => {
  const [postText, setPostText] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = () => {
    // Handle post submission, e.g., send data to a server or update app state
    console.log('Post submitted:', {postText, imageURL});
    setPostText('');
    setImageURL('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a Post</Text>
      <TextInput
        style={styles.input}
        placeholder="What's on your mind?"
        value={postText}
        onChangeText={setPostText}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Enter image URL"
        value={imageURL}
        onChangeText={setImageURL}
      />
      {imageURL !== '' && (
        <Image source={{uri: imageURL}} style={styles.image} resizeMode="cover" />
      )}
      <Button title="Submit" onPress={handleSubmit} />
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
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
});

export default PostScreen;
