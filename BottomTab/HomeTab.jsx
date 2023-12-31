import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons';

const HomeScreen = props => {
  return (
    <View style={styles.content}>
      <Text style={styles.txt1}>Translator</Text>
      <TextInput style={styles.txtin}>Tamil</TextInput>
      <TextInput style={styles.txtin}>English</TextInput>

      <View style={styles.touch}>
        <TouchableOpacity
          activeOpacity={80}
          onPress={() => props.navigation.navigate('Write')}>
          <Text style={styles.btn1}>✏️Write</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={() => props.navigation.navigate('Record')}>
            {/* <Icon name="rocket" size={30} color="#900" /> */}
            <Text style={styles.btn1}>⏺️ Record</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => props.navigation.navigate('Scan')}>
          <Text style={styles.btn1}> 🔍Scan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'gold',
  },
  txt1: {
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: 40,
    color: 'black',
    marginBottom: 40,
  },
  txtin: {
    backgroundColor: 'white',
    padding: 50,
    borderRadius: 30,
    margin: 10,
    marginHorizontal: 20,
    paddingVertical: 60,
    marginBottom: 20,
  },
  btn1: {
    backgroundColor:"gray",
    backfaceVisibility:"hidden",
    color:"white",
    width:110,
    height:100,
    alignContent:"stretch",
    margin:10,
    flexDirection:"row",
    paddingTop:40,
    alignItems:"center",
    alignSelf:"center",
    paddingLeft:20,
    borderRadius:20,
    marginTop:60,
    // tintColor:{focused ? 'black' : 'gray'},
    
  },
  // btn2: {
  //   backgroundColor: 'gray',
  //   color: 'white',
  //   textAlign: 'center',
  //   // alignContent: 'center',
  //   // alignItems: 'center',
  //   padding: 'auto',
  //   width: 110,
  //   height: 100,
  //   marginRight: 20,
  //   marginLeft: 20,
  //   flexDirection: 'row',
  //   justifyContent:"space-between"
  // },
  // btn3: {
  //   backgroundColor: 'gray',
  //   color: 'white',
  //   textAlign: 'center',
  //   // alignContent: 'center',
  //   // alignItems: 'center',
  //   padding: 'auto',
  //   width: 110,
  //   height: 100,
  //   justifyContent:"space-between",

  //   marginLeft: 10,
  //   flexDirection: 'row',
  // },
  touch: {
    flexDirection: 'row',
  },
});
