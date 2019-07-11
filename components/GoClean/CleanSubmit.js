import React, { Component } from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import UIStepper from "react-native-ui-stepper";
import DateTimePicker from "react-native-modal-datetime-picker";
import { CheckBox } from "react-native-elements";
import {
  Container,
  Header,
  Button,
  Content,
  Item,
  Input,
  Icon,
  Card
} from "native-base";
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  TextInput,
  Image,
  Text,
  KeyboardAvoidingView
} from "react-native";

export default class CleanSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { state } = this.props.navigation;

    return (
      <ScrollView style={styles.container} scrollEventThrottle={16}>
        <View
          style={{
            marginTop: 25,
            paddingLeft: 10,
            paddingRight: 20
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{ fontSize: 18, color: "black", alignSelf: "stretch" }}
            >
              Name
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 220,

                alignSelf: "stretch"
              }}
            >
              {state.params.y.name}
            </Text>
          </View>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <Text
              style={{ fontSize: 18, color: "black", alignSelf: "stretch" }}
            >
              Phone Number
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 130,
                alignSelf: "stretch"
              }}
            >
              {state.params.y.phone}
            </Text>
          </View>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <Text
              style={{ fontSize: 18, color: "black", alignSelf: "stretch" }}
            >
              Email
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 85,

                alignSelf: "stretch"
              }}
            >
              {state.params.y.email}
            </Text>
          </View>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <Text
              style={{ fontSize: 18, color: "black", alignSelf: "stretch" }}
            >
              Addresse
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 150,

                alignSelf: "stretch"
              }}
            >
              {state.params.y.adresse}
            </Text>
          </View>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <Text
              style={{ fontSize: 18, color: "black", alignSelf: "stretch" }}
            >
              Type
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 220,

                alignSelf: "stretch"
              }}
            >
              {state.params.x.type}
            </Text>
          </View>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <Text
              style={{ fontSize: 18, color: "black", alignSelf: "stretch" }}
            >
              Rooms
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 230,

                alignSelf: "stretch"
              }}
            >
              {state.params.x.nbr}
            </Text>
          </View>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <Text
              style={{ fontSize: 18, color: "black", alignSelf: "stretch" }}
            >
              Bathrooms
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 195,

                alignSelf: "stretch"
              }}
            >
              {state.params.x.nbr1}
            </Text>
          </View>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <Text
              style={{ fontSize: 18, color: "black", alignSelf: "stretch" }}
            >
              Kitchen
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 215,

                alignSelf: "stretch"
              }}
            >
              {state.params.x.Kitchen.toString()}
            </Text>
          </View>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <Text
              style={{ fontSize: 18, color: "black", alignSelf: "stretch" }}
            >
              Garage
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 220,

                alignSelf: "stretch"
              }}
            >
              {state.params.x.Garage.toString()}
            </Text>
          </View>
        </View>
        <Card
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 15,
            height: 200,
            width: 340,
            marginLeft: 10,
            borderWidth: 5,
            borderColor: "white",
            borderRadius: 10,
            elevation: 30
          }}
        >
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{
                fontSize: 18,
                color: "black",
                marginLeft: 5,
                alignSelf: "stretch"
              }}
            >
              Price
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 215,

                alignSelf: "stretch"
              }}
            >
              100 dt
            </Text>
          </View>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <Text
              style={{
                fontSize: 18,
                color: "black",
                marginLeft: 5,
                alignSelf: "stretch"
              }}
            >
              Date and time
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 50,

                alignSelf: "stretch"
              }}
            >
              {state.params.x.date1}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{ flexDirection: "row", marginLeft: 12, marginBottom: 50 }}
            >
              <Button style={styles.buttonContainer1} onPress={() => {}}>
                <Text style={{ color: "white" }}>Cencel</Text>
              </Button>
            </View>
            <View style={{ flexDirection: "row", marginLeft: 50 }}>
              <Button
                style={styles.buttonContainer1}
                onPress={() => {
                  this.props.navigation.navigate("ListUserProvieder");
                }}
              >
                <Text style={{ color: "white" }}>Send</Text>
              </Button>
            </View>
          </View>
        </Card>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  buttonContainer1: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 45,
    width: 130,
    height: 55,
    borderRadius: 30
  }
});
