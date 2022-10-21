// In App.js in a new project

import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';

function PostScreen() {
  const [name, setName] = useState('');
  const [discription, setDescription] = useState('');
  const [imageArray, setImageArray] = useState([]);
  const [video, setVideo] = useState('');
  const [video_thumbnail, set_video_thumbnail] = useState('');

  const submit = () => {
    try {
      const bodyFormData = new FormData();
      bodyFormData.append('name', name);
      bodyFormData.append('discription', discription);
      bodyFormData.append('user_id', 92);
      bodyFormData.append('post_type', 1);

      imageArray.forEach(item => {
        const filename = item.substring(item.lastIndexOf('/') + 1);
        bodyFormData.append('portfolio_images[]', {
          uri: item,
          type: 'image/jpeg',
          name: filename,
        });
      });

      fetch('http://182.76.237.238/~apitest/sme_link/api/create_post', {
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: bodyFormData,
      })
        .then(response => response.json())
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          // Alert.alert('Some error occured');
          console.log(err, 'error');
        });
    } catch (err) {
      console.log(err, 'errrrrr');
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'grey'}}>Post Data</Text>
      <TextInput
        onChangeText={setName}
        value={name}
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: '75%',
          borderRadius: 3,
          marginTop: 15,
        }}
      />
      <TextInput
        onChangeText={setDescription}
        value={discription}
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: '75%',
          borderRadius: 3,
          marginTop: 15,
        }}
      />
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: '75%',
          borderRadius: 3,
          marginTop: 15,
          padding: 5,
          alignItems: 'center',
        }}
        onPress={() => {
          ImageCropPicker.openPicker({
            multiple: true,
            mediaType: 'photo',
          })
            .then(images => {
              setImageArray(images);
              console.log(images);
            })
            .catch(err => console.log(err));
        }}>
        <Text>Pick Images</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: '75%',
          borderRadius: 3,
          marginTop: 15,
          padding: 5,
          alignItems: 'center',
        }}
        onPress={() => {
          ImageCropPicker.openPicker({
            mediaType: 'video',
          })
            .then(images => {
              console.log(images);
            })
            .catch(err => console.log(err));
        }}>
        <Text>Pick Video</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: '75%',
          borderRadius: 3,
          marginTop: 15,
          padding: 5,
          alignItems: 'center',
        }}
        onPress={() => {
          ImageCropPicker.openPicker({
            multiple: false,
            mediaType: 'photo',
          })
            .then(images => {
              console.log(images);
              set_video_thumbnail(images);
            })
            .catch(err => console.log(err));
        }}>
        <Text>Pick Thumbnail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: '75%',
          borderRadius: 3,
          marginTop: 15,
          padding: 5,
          alignItems: 'center',
        }}
        onPress={submit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  button: {
    backgroundColor: '#add8ff',
    padding: 12,
    paddingHorizontal: 18,
    margin: 12,
    borderRadius: 3,
  },
});

export default PostScreen;
