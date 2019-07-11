import React, { Component } from "react";
import { createBottomTabNavigator, StackNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import Services from "./Home/Services";
import UserProfil from "./UserProfil";
import CleanAdd from "./GoClean/CleanAdd";
import { Header } from "react-native-elements";
import firebase from "../config/Firebase";
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
  Dimensions,
  Button
} from "react-native";

const { height, width } = Dimensions.get("window");
class Home extends Component {
  render() {
    const { state } = this.props.navigation;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          containerStyle={{
            height: 60,
            backgroundColor: "#0F6DBF",
            justifyContent: "space-around"
          }}
          leftComponent={{
            icon: "menu",
            color: "#fff",
            underlayColor: "#0F6DBF",

            onPress: () => this.props.navigation.navigate("PaymentMethod")
          }}
          centerComponent={{
            text: "So-Ok",

            style: {
              color: "#fff",
              fontWeight: "bold",

              fontSize: 20
            }
          }}
          rightComponent={{
            underlayColor: "#0F6DBF",
            icon: "credit-card",
            onPress: () => this.props.navigation.navigate("PaymentMethod"),
            color: "#fff"
          }}
        />
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: 80,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd"
            }}
          />
        </View>
        <ScrollView scrollEventThrottle={16}>
          <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
            <Text
              style={{ fontSize: 24, fontWeight: "700", paddingHorizontal: 20 }}
            >
              What service you want to use?
            </Text>
            <View style={{ height: 130, marginTop: 20 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("CleanAdd")}
                >
                  <Services
                    imageUri={require("../images/clean.png")}
                    name="So-Clean"
                  />
                </TouchableOpacity>
                <Services
                  imageUri={require("../images/fix.png")}
                  name="So-Fix"
                />
                <Services
                  imageUri={require("../images/glam.jpg")}
                  name="So-Glam"
                />
              </ScrollView>
            </View>
            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: "700" }}>
                So-Ok-News
              </Text>
              <Text style={{ fontWeight: "100", marginTop: 10 }}>
                You can find promo and So-Ok News in this section
              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                <Image
                  style={{
                    flex: 1,
                    height: null,
                    width: null,
                    resizeMode: "contain",
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: "#dddddd"
                  }}
                  source={require("../images/logo.jpg")}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" color={tintColor} size={24} />
        )
      }
    },
    UserProfil: {
      screen: UserProfil,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#0F6DBF",
      inactiveTintColor: "grey",
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
);
