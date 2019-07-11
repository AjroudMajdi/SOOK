import React, { Component } from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import {
  Container,
  Header,
  Button,
  Content,
  Item,
  Input,
  Icon
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

export default class CleanInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cleanInfo: {
        name: "",
        phone: "",
        email: "",
        adresse: ""
      }
    };
  }

  render() {
    const { state } = this.props.navigation;
    return (
      <ScrollView style={styles.container} scrollEventThrottle={16}>
        <KeyboardAvoidingView>
          <Item style={styles.item}>
            <FontAwesomeIcon size={25} color="#0F6DBF" name={"user"} />
            <Input
              onChangeText={faculty1 => {
                const cleanInfo = Object.assign({}, this.state.cleanInfo, {
                  name: faculty1
                });
                this.setState({ cleanInfo }, () =>
                  console.log("test", this.state.cleanInfo.name)
                );
              }}
              textAlign={"center"}
              placeholder="Name"
            />
          </Item>

          <Item style={styles.item}>
            <FontAwesomeIcon size={25} color="#0F6DBF" name={"phone"} />
            <Input
              textAlign={"center"}
              placeholder="Phone number"
              onChangeText={faculty1 => {
                const cleanInfo = Object.assign({}, this.state.cleanInfo, {
                  phone: faculty1
                });
                this.setState({ cleanInfo }, () =>
                  console.log("test", this.state.cleanInfo.phone)
                );
              }}
            />
          </Item>
          <Item style={styles.item}>
            <FontAwesomeIcon size={25} color="#0F6DBF" name={"at"} />
            <Input
              textAlign={"center"}
              placeholder="Email"
              onChangeText={faculty1 => {
                const cleanInfo = Object.assign({}, this.state.cleanInfo, {
                  email: faculty1
                });
                this.setState({ cleanInfo }, () =>
                  console.log("test", this.state.cleanInfo.email)
                );
              }}
            />
          </Item>
          <Item style={styles.item}>
            <FontAwesomeIcon size={25} color="#0F6DBF" name={"map-marker"} />
            <Input
              textAlign={"center"}
              placeholder="adresse"
              onChangeText={faculty1 => {
                const cleanInfo = Object.assign({}, this.state.cleanInfo, {
                  adresse: faculty1
                });
                this.setState({ cleanInfo }, () =>
                  console.log("test", this.state.cleanInfo.adresse)
                );
              }}
            >
              {this.state.cleanInfo.adresse}
            </Input>
          </Item>

          <View style={{ flexDirection: "row" }}>
            <View
              style={{ flexDirection: "row", marginLeft: 20, marginBottom: 10 }}
            >
              <TouchableOpacity>
                <Button
                  onPress={() => {
                    console.log("cleanInfo", this.state.cleanInfo);
                  }}
                  style={styles.buttonContainer1}
                  rounded
                  primary
                >
                  <Icon
                    name="ios-arrow-back"
                    size={45}
                    style={{ color: "white" }}
                  />
                </Button>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginLeft: 110 }}>
              <TouchableOpacity>
                <Button
                  onPress={() => {
                    this.props.navigation.navigate("CleanSubmit", {
                      x: state.params.x,
                      y: this.state.cleanInfo
                    });
                    console.log("GoClean", this.state.cleanAdd);
                  }}
                  style={styles.buttonContainer2}
                  rounded
                  primary
                >
                  <Icon
                    name="ios-arrow-forward"
                    size={45}
                    style={{ color: "white" }}
                  />
                </Button>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20
  },
  view1: {
    flexDirection: "row",
    justifyContent: "center",
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 30
  },
  buttonContainer1: {
    height: 45,

    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 20,
    width: 80,
    height: 50,
    borderRadius: 30
  },
  item: {
    marginTop: 15
  },
  buttonContainer2: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 20,
    marginRight: 100,
    width: 80,
    height: 50,
    borderRadius: 30
  }
});
