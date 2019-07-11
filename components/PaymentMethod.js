import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Container, Button, Header, Content, Item, Input } from "native-base";
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions
} from "react-native";
import { Card } from "react-native-elements";

export default class PaymentMethod extends Component {
  render() {
    return (
      <ScrollView scrollEventThrottle={16} backgroundColor="#D5EDF2">
        <Text
          style={{ fontSize: 24, fontWeight: "600", paddingHorizontal: 20 }}
        >
          Select Your Payment Method ?
        </Text>
        <TouchableOpacity style={styles.TouchableOpacityStyle}>
          <Image
            style={styles.ImageStyle}
            source={require("../images/paypal.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacityStyle}>
          <Image
            style={styles.ImageStyle}
            source={require("../images/bitcoin.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacityStyle}>
          <Image
            style={styles.ImageStyle}
            source={require("../images/visa.png")}
          />
        </TouchableOpacity>
        <Button
          full
          rounded
          style={styles.buttonContainer}
          onPress={() => {
            this.loginUser(this.state.email, this.state.password);
          }}
        >
          <Text style={{ color: "white" }}>Continue</Text>
        </Button>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  TouchableOpacityStyle: {
    width: 300,
    height: 70,
    marginTop: 20,
    marginLeft: 30,
    borderWidth: 0.5,
    borderRadius: 10
  },
  ImageStyle: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "contain",
    borderColor: "#dddddd"
  },
  buttonContainer: {
    height: 65,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 50,
    width: 300,
    borderRadius: 15,
    color: "#EFCBBC",
    marginLeft: 30
  }
});
