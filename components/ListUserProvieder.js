import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import {
  Container,
  Button,
  Header,
  Content,
  Item,
  Input,
  List,
  ListItem
} from "native-base";
import StarRating from "react-native-star-rating";
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

const list = [
  {
    name: "Susan Cherif",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Good Can be better",
    note: "4/5"
  }
];

export default class ListUserProvieder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Content>
          <List containerStyle={{ marginBottom: 20 }}>
            {list.map(l => (
              <ListItem
                onPress={() => {
                  this.props.navigation.navigate("Account");
                }}
              >
                <Image source={{ uri: l.avatar_url }} style={styles.photo} />
                <View>
                  <Text style={styles.text}>{l.name}</Text>
                  <Button
                    onPress={() => {
                      this.props.navigation.navigate("PaymentMethod");
                    }}
                    style={{
                      backgroundColor: "#0F6DBF",
                      marginLeft: 230,
                      borderRadius: 7
                    }}
                  >
                    <Text
                      style={{
                        color: "#ffffff"
                      }}
                    >
                      Command
                    </Text>
                  </Button>
                </View>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    marginBottom: -25,
    flex: 1,
    flexWrap: "wrap",
    color: "#000000",
    marginLeft: 12,
    fontSize: 17
  },
  subtitle: {
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 12,
    fontSize: 13
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  note: {
    flex: 1,
    marginLeft: -100,
    flexWrap: "wrap",
    marginLeft: 40
  }
});
