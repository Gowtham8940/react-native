import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';

const FavTab = () => {
  const url = 'https://jsonplaceholder.typicode.com/photos';
  const [name, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
    // .finally(() => setLoading(false));
  }, []);

  return (
    <FlatList
      data={name}
      renderItem={({item}) => (
        <View>
          <Text style={styles.title1}>{item.title}</Text>
          <Text style={styles.title3}>{item.thumbnailUrl}</Text>
          <Text style={styles.title2}>{item.url}</Text>
        </View>
      )}
    />
  );
};

export default FavTab;

const styles = StyleSheet.create({
  title: {},
  title1: {
    backgroundColor: 'gray',
    padding: 5,
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
  },
  title3: {
    backgroundColor: 'plum',
    textAlign: 'center',
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 150,
    borderRadius: 50,
  },
});