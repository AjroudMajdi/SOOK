import React, { Component } from "react";
import firebase from "../config/Firebase";
import { SocialIcon } from "react-native-elements";
import { GoogleSignin } from "react-native-google-signin";
import { AccessToken, LoginManager } from "react-native-fbsdk";
GoogleSignin.configure();
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loding: false,
      user: ""
    };
    showLoader = () => {
      this.setState({ loding: true });
    };
  }
  componentDidMount() {}

  // Go to the signup page

  goHome = () => this.props.navigation.navigate("Home", { x: this.state.user });
  async signIn() {
    await GoogleSignin.configure();

    const data = await GoogleSignin.signIn();

    const credential = firebase.auth.GoogleAuthProvider.credential(
      data.idToken,
      data.accessToken
    );

    const currentUser = await firebase.auth().signInWithCredential(credential);

    console.info(JSON.stringify(currentUser));
  }
  async facebookLogin() {
    try {
      const result = await LoginManager.logInWithReadPermissions([
        "public_profile",
        "email"
      ]);

      if (result.isCancelled) {
        throw new Error("User cancelled request");
      }

      console.log(
        `Login success with permissions: ${result.grantedPermissions.toString()}`
      );

      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw new Error(
          "Something went wrong obtaining the users access token"
        );
      }

      const credential = firebase.auth.FacebookAuthProvider.credential(
        data.accessToken
      );

      const firebaseUserCredential = await firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential);

      console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
    } catch (e) {
      console.error(e);
    }
  }

  loginUser = (email, password) => {
    if (email == "" || password == "") {
      alert("Empty email address or password");
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)

        .then(this.goHome)
        .catch(error => {
          switch (error.code) {
            case "auth/invalid-email":
              alert("Invalid email address format.");
              break;
            case "auth/user-not-found":
            case "auth/wrong-password":
              alert("Invalid email address or password");
              break;
            default:
              alert("Check your internet connection" + error);
          }
        })
        .then(user => {});
    }
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: 30,
            height: 30,
            marginLeft: 75,
            padding: 70
          }}
          source={require("../images/logo1.png")}
        />

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
          <TouchableOpacity
            style={styles.signup}
            activeOpacity={0.7}
            onPress={() => {
              this.props.navigation.navigate("ForgotPassword");
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
          <Button
            full
            rounded
            style={styles.buttonContainer}
            success
            onPress={() => {
              this.loginUser(this.state.email, this.state.password);
            }}
          >
            <Text style={{ color: "white" }}>Sign In</Text>
          </Button>

          <View style={styles.social}>
            <SocialIcon
              style={styles.wrapper}
              title="Facebook"
              button
              type="facebook"
              onPress={() => {
                this.facebookLogin().then(() => this.goHome());
              }}
            />

            <SocialIcon
              style={styles.wrapper}
              button
              title="Google"
              type="google-plus-official"
              onPress={() => {
                this.signIn().then(() => this.goHome());
              }}
            />
          </View>
          <View style={styles.signup}>
            <Text style={styles.wrapper} style={{ fontSize: 15 }}>
              Don't have an account ?
            </Text>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                this.props.navigation.navigate("Signup");
              }}
            >
              <Text style={{ marginLeft: 5, fontSize: 15, fontWeight: "bold" }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </Form>
      </KeyboardAvoidingView>
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
  social: {
    flexDirection: "row"
  },
  signup: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5
  },
  wrapper: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 10,
    width: 135,
    borderRadius: 30
  },

  wrapper2: {
    height: 30,

    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 5,
    width: 90
  },
  wrapper3: {
    marginTop: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 20,
    width: 300,
    borderRadius: 30
  },
  loding: {
    backgroundColor: "#ffffff"
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
