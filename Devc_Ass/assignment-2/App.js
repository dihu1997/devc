import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatartWrapper}>
            <Image
              style={styles.avatar}
              source={require('./assets/tylor.jpg')}
            />
          </View>
          <View style={styles.userInfo}>
            <Text>Tan Bui</Text>
            <Text>Developer</Text>
            <View style={styles.btnWrapper}>
              <TouchableOpacity>
                <View style={[styles.btn, styles.followBtn]}>
                  <Text style={styles.btnLabel}>Follow</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={[styles.btn, styles.sendBtn]}>
                  <Feather
                    name="send"
                    size={27}
                    color="white"
                    backgroundColor="blue"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.countArea}>
          <View>
            <Text style={styles.countText}>210</Text>
            <Text style={styles.countLabelText}>Photos</Text>
          </View>
          <View>
            <Text style={styles.countText}>15K</Text>
            <Text style={styles.countLabelText}>Followers</Text>
          </View>
          <View>
            <Text style={styles.countText}>605</Text>
            <Text style={styles.countLazelText}>Following</Text>
          </View>
        </View>
        <View style={styles.imageArea}>
          <FlatList
            numColumns={2}
            data={imgData}
            renderItem={item => (
              <Image
                style={styles.image}
                source={item.imgSource}
                key={item.id}
              />
            )}
          />
        </View>
      </View>
    );
  }
}
const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
  { id: 1, imgSource: require('./assets/sologan.jpg') },
  { id: 2, imgSource: require('./assets/tylor.jpg') },
  { id: 3, imgSource: require('./assets/lyhien.jpg') },
  { id: 4, imgSource: require('./assets/sologan.jpg') },
  { id: 5, imgSource: require('./assets/tylor.jpg') },
  { id: 6, imgSource: require('./assets/lyhien.jpg') },
  { id: 7, imgSource: require('./assets/sologan.jpg') },
  { id: 8, imgSource: require('./assets/tylor.jpg') },
  { id: 9, imgSource: require('./assets/lyhien.jpg') },
  { id: 10, imgSource: require('./assets/sologan.jpg') },
];

const centerImgData = Math.floor(imgData.length / 2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 0.25,
    flexDirection: 'row',
  },
  avatartWrapper: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfo: {
    flex: 0.6,
    justifyContent: 'center',
  },
  btn: {
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnWrapper: {
    flexDirection: 'row',
    marginTop: 10,
  },
  followBtn: {
    width: 120,
    backgroundColor: FOLLOW_COLOR,
  },
  sendBtn: {
    width: 40,
    backgroundColor: SEND_MESSAGE_COLOR,
    marginLeft: 10,
  },
  btnLabel: {
    color: 'white',
  },
  countArea: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  countText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  countLabelText: {
    fontSize: 16,
    fontWeight: '200',
  },
  imageArea: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  image: {
    width: 150,
    height: 150,
  },
});
