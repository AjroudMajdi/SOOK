import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage,
  SafeAreaView,
  ScrollView,
  Image
} from "react-native";

export default class Services extends Component {
  render() {
    return (
      <View
        style={{
          height: 130,
          width: 130,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: "#ddddd",
          borderRadius: 10
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "contain",
              paddingTop: 16
            }}
          />
        </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 16 }}>
          <Text style={{ fontSize: 18, color: "#000000" }}>
            {this.props.name}
          </Text>
        </View>
      </View>
    );
  }
}
