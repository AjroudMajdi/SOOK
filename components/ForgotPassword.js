import React, { Component } from "react";
import firebase from "../config/Firebase";
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import {
  Container,
  Content,
  Header,
  Form,
  Input,
  Item,
  Button,
  Label
} from "native-base";

import { StackNavigator } from "react-navigation";
export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  goHome = () => this.props.navigation.navigate("Home");
  sendEmailWithPassword = email => {
    if (email == "") {
      alert("Empty email ");
    } else {
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(this.props.navigation.navigate("Login"))
        .catch(error => {
          switch (error.code) {
            case "auth/invalid-email":
              alert("Invalid email address format.");
              break;

            default:
              alert("Check your internet connection" + error);
          }
        });
    }
  };

  componentDidMount() {}

  render() {
    return (
      <Container style={styles.container}>
        <Image
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: 170,
            height: 170,
            marginLeft: 60,
            padding: 80
          }}
          source={require("../images/logo.jpg")}
        />
        <KeyboardAvoidingView>
          <Form>
            <Item floatingLabel rounded>
              <Input
                style={styles.inputs}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Email"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
            </Item>

            <Button
              full
              rounded
              style={styles.buttonsign}
              onPress={() => {
                this.sendEmailWithPassword(this.state.email);
              }}
            >
              <Text style={{ color: "white" }}>Send Email</Text>
            </Button>
          </Form>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 90,
    padding: 30,
    justifyContent: "center"
  },
  buttonsign: {
    marginTop: 15
  },
  wrapper: {
    flex: 1
  },
  inputs: {
    borderColor: "gray",
    fontSize: 15,
    color: "#000000",
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  }
});
