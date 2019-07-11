import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import UIStepper from "react-native-ui-stepper";
import DateTimePicker from "react-native-modal-datetime-picker";
import { CheckBox } from "react-native-elements";
import {
  Container,
  Content,
  Header,
  Form,
  Input,
  Item,
  Button,
  Label,
  Picker
} from "native-base";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  TextInput,
  Image
} from "react-native";
import moment from "moment";

export default class CleanAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cleanAdd: {
        type: "House",
        date1: "",
        nbr: "",
        nbr1: "",
        isDateTimePickerVisible: false,
        Kitchen: false,
        Garage: false
      }
    };
  }
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.state.cleanAdd.date1 = moment(date).format("MMMM Do YYYY, h:mm");
    this._hideDateTimePicker();
  };
  render() {
    return (
      <ScrollView style={styles.container} scrollEventThrottle={16}>
        <View style={styles.view1}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Icon name="ios-home" color="#0F6DBF" size={24} />
          </View>

          <Picker
            selectedValue={this.state.cleanAdd.type}
            itemStyle={{ alignItems: "center", fontSize: 24 }}
            style={{
              height: 30,
              width: 190,
              marginRight: -20
            }}
            onValueChange={faculty => {
              const cleanAdd = Object.assign({}, this.state.cleanAdd, {
                type: faculty
              });
              this.setState({ cleanAdd });
            }}
          >
            <Picker.Item label="House" value="House" />
            <Picker.Item label="Apartment" value="Apartment" />
            <Picker.Item label="Comercial Space" value="Comercial Space" />
          </Picker>
        </View>
        <View style={styles.view1}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Image
              source={require("../../images/room.png")}
              style={{
                height: 24,
                width: 24,
                tintColor: "#0F6DBF",
                marginRight: 15
              }}
            />
            <TextInput
              editable={false}
              selectTextOnFocus={false}
              placeholderTextColor="#000"
              style={{
                fontSize: 15,
                paddingRight: 15,
                paddingTop: -8,
                paddingLeft: 30
              }}
              placeholder="Rooms"
            >
              {this.state.cleanAdd.nbr}
            </TextInput>
          </View>
          <UIStepper
            minimumValue={0}
            maximumValue={10}
            width={80}
            onValueChange={faculty => {
              const cleanAdd = Object.assign({}, this.state.cleanAdd, {
                nbr: faculty
              });
              this.setState({ cleanAdd }, () =>
                console.log("test", this.state.cleanAdd.nbr)
              );
            }}
          />
        </View>
        <View style={styles.view1}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Image
              source={require("../../images/bath.png")}
              style={{
                height: 24,
                width: 24,
                tintColor: "#0F6DBF",
                marginRight: 15
              }}
            />
            <TextInput
              placeholderTextColor="#000"
              editable={false}
              selectTextOnFocus={false}
              style={{
                fontSize: 15,
                paddingRight: 15,
                paddingTop: -8,
                paddingLeft: 30
              }}
              placeholder="Bathrooms"
            >
              {this.state.cleanAdd.nbr1}
            </TextInput>
          </View>
          <UIStepper
            minimumValue={0}
            maximumValue={10}
            tintColor="#0F6DBF"
            width={80}
            onValueChange={faculty1 => {
              const cleanAdd = Object.assign({}, this.state.cleanAdd, {
                nbr1: faculty1
              });
              this.setState({ cleanAdd }, () =>
                console.log("test", this.state.cleanAdd.nbr1)
              );
            }}
          />
        </View>
        <View style={styles.view1}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Icon
              name="ios-clock"
              color="#0F6DBF"
              size={24}
              style={{
                height: 24,
                width: 24,

                marginRight: 15
              }}
            />
            <TextInput
              placeholderTextColor="#000"
              editable={false}
              selectTextOnFocus={false}
              style={{
                fontSize: 15,
                paddingRight: 15,
                paddingTop: -8,
                paddingLeft: 30
              }}
              placeholder="Date and Time"
            >
              {this.state.cleanAdd.date1}
            </TextInput>
          </View>
          <TouchableOpacity onPress={this._showDateTimePicker}>
            <Image
              source={require("../../images/calendar.png")}
              style={{
                height: 24,
                width: 24,
                tintColor: "#0F6DBF",
                marginRight: 15
              }}
            />
          </TouchableOpacity>

          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            mode={"datetime"}
            is24Hour={true}
          />
        </View>

        <Text
          style={{
            paddingTop: 20,

            paddingLeft: 125,
            fontSize: 22
          }}
        >
          Extras
        </Text>
        <CheckBox
          center
          title="Kitchen set cleaning"
          checked={this.state.cleanAdd.Kitchen}
          onPress={faculty1 => {
            const cleanAdd = Object.assign({}, this.state.cleanAdd, {
              Kitchen: !this.state.cleanAdd.Kitchen
            });
            this.setState({ cleanAdd }, () =>
              console.log("test", this.state.cleanAdd.Kitchen)
            );
          }}
        />
        <CheckBox
          center
          title="Garage set cleaning"
          checked={this.state.cleanAdd.Garage}
          onPress={faculty1 => {
            const cleanAdd = Object.assign({}, this.state.cleanAdd, {
              Garage: !this.state.cleanAdd.Garage
            });
            this.setState({ cleanAdd }, () =>
              console.log("test1", this.state.cleanAdd.Garage)
            );
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <View
            style={{ flexDirection: "row", marginLeft: 20, marginBottom: 10 }}
          >
            <TouchableOpacity>
              <Button
                onPress={() => {
                  this.props.navigation.navigate("Home");
                }}
                style={styles.buttonContainer1}
                rounded
                primary
              >
                <Icon name="ios-home" size={45} style={{ color: "white" }} />
              </Button>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 110 }}>
            <TouchableOpacity>
              <Button
                onPress={() => {
                  this.props.navigation.navigate("CleanInfo", {
                    x: this.state.cleanAdd
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
