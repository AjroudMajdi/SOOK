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
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      displayName: "",
      phoneOne: "",
      errorMessage: null
    };
  }
  goHome = () => this.props.navigation.navigate("Home");
  componentDidMount() {
    // this.loadInitialState().done();
  }
  loadInitialState = async () => {
    var value = await AsyncStorage.getItem("user");
    if (value !== null) {
      this.goHome();
    }
  };

  signUpUser = (email, password) => {
    if (email == "" || password == "") {
      alert("Empty email address or password");
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)

      .catch(error => {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("This email address is already taken");
            break;
          case "auth/invalid-email":
            alert("Invalid e-mail address format");
            break;
          case "auth/weak-password":
            alert("Password is too weak");
            break;
          default:
            alert("Check your internet connection");
        }
      });
  };

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
            <Item floatingLabel rounded>
              <Input
                style={styles.inputs}
                placeholder="Password"
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
            </Item>

            <Item floatingLabel rounded>
              <Input
                style={styles.inputs}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Full Name "
                onChangeText={displayName => this.setState({ displayName })}
                value={this.state.displayName}
              />
            </Item>
            <Item floatingLabel rounded>
              <Input
                style={styles.inputs}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Phone Number"
                onChangeText={phoneOne => this.setState({ phoneOne })}
                value={this.state.phoneOne}
              />
            </Item>
            <Button
              full
              rounded
              style={styles.buttonsign}
              onPress={() =>
                this.signUpUser(this.state.email, this.state.password)
              }
            >
              <Text style={{ color: "white" }}>Sign Up</Text>
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
