import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';

function DisplayScreen() {
  const [data, setData] = useState([]);

  const getData = () => {
    try {
      var requestOptions = {
        method: 'POST',
        redirect: 'follow',
      };

      fetch(
        'http://182.76.237.238/~apitest/sme_link/api/post_listing?user_id=100',
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          setData(result);
        })
        .catch(error => console.log('error', error));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        style={{flex: 1, width: '100%'}}
        renderItem={({item, index}) => {
          return (
            item.user_id == 92 && (
              <View
                style={{
                  backgroundColor: '#add8ff',
                  width: '90%',
                  marginHorizontal: '5%',
                  marginVertical: 6,
                  padding: 15,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Text>{item.id}</Text>
                <Text>{item.user_id}</Text>
                <Text>{item.group}</Text>
                <Text>{item.name}</Text>
                <Text>{item.post_type}</Text>
                <Text>{item.discription}</Text>
                <Image
                  source={{uri: item.images}}
                  style={{height: 45, width: 45}}
                  resizeMode="cover"
                />
                <Text>{item.created_at}</Text>
                <Text>{item.updated_at}</Text>
                <Text>{item.designation}</Text>
                <Text>{item.group_name}</Text>
                <Text>{item.group_purpose}</Text>
                <Text>{item.group_image}</Text>
                <Image
                  source={{uri: item.profile_image}}
                  style={{height: 45, width: 45}}
                  resizeMode="cover"
                />
                <Text>{item.post_hour}</Text>
                <Text>{item.post_day}</Text>
                <Text>{item.like_status}</Text>
                <Text>{item.like_count}</Text>
                <Text>{item.comment_count}</Text>
                <Text>{item.is_follow}</Text>
              </View>
            )
          );
        }}
      />
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

export default DisplayScreen;
