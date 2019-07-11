import React, { Component } from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Account from "./components/Account";
import CleanAdd from "./components/GoClean/CleanAdd";
import CleanInfo from "./components/GoClean/CleanInfo";
import CleanSubmit from "./components/GoClean/CleanSubmit";
import PaymentMethod from "./components/PaymentMethod";
import RatingHistory from "./components/RatingHistory";
import ListUserProvieder from "./components/ListUserProvieder";
import UserProfil from "./components/UserProfil";
import { YellowBox } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

const Application = createStackNavigator({
  Login: { screen: Login, navigationOptions: { header: null } },
  ListUserProvieder: {
    screen: ListUserProvieder,
    navigationOptions: { title: "List SO-Clean" }
  },

  Home: {
    screen: Home,
    navigationOptions: { header: null }
  },

  PaymentMethod: {
    screen: PaymentMethod,
    navigationOptions: { title: "So-Pay" }
  },

  Signup: { screen: Signup, navigationOptions: { title: "Sign Up" } },

  Account: { screen: Account, navigationOptions: { title: "Profile" } },
  UserProfil: { screen: UserProfil, navigationOptions: { header: null } },
  CleanAdd: {
    screen: CleanAdd,
    navigationOptions: {
      title: "Go-Clean",

      headerStyle: {
        backgroundColor: "#0F6DBF"
      },
      headerTintColor: "#fff"
    }
  },

  CleanSubmit: {
    screen: CleanSubmit,
    navigationOptions: {
      title: "Details",
      headerStyle: {
        backgroundColor: "#0F6DBF"
      },
      headerTintColor: "#fff"
    }
  },

  Signup: { screen: Signup, navigationOptions: { title: "Sign Up" } },

  CleanInfo: {
    screen: CleanInfo,
    navigationOptions: {
      title: "Details",

      headerStyle: {
        backgroundColor: "#0F6DBF"
      },
      headerTintColor: "#fff"
    }
  },

  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: { title: "Forgot Password" }
  },
  CleanInfo: {
    screen: CleanInfo,
    navigationOptions: {
      title: "Details",
      headerStyle: {
        backgroundColor: "#0F6DBF"
      },
      headerTintColor: "#fff"
    }
  }
});

const App = createAppContainer(Application);

export default App;
