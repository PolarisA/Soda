/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class App extends Component {
  constructor(props) {
    super(props)

  }

  downloadApk = () => {

    // 接收两个参数，第一个为安装包下载的url，第二个为保存在本地的文件命名
    NativeModules.DownloadApk.downloading('http://www.xxx.com/tes.apk', 'file.apk');
  }

  render() {
    console.log("==== App props >>> ", this.props)

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>

        <TouchableOpacity style={styles.DownloadBtn} onPress={this.downloadApk}>
          <Text>
            {'Download & Install'}
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  DownloadBtn: {
    width: 150,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#37c',
    marginTop: 30,
  }
});

export default App
