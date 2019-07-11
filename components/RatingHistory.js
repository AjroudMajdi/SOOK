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
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Good Can be better",
    note: "4/5"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Always In Time ",
    note: "3/5"
  },
  {
    name: "Jouini Hamdi",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Good Job",
    note: "3/5"
  },
  {
    name: "Noor lachheb",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Not Bad ",
    note: "3/5"
  },
  {
    name: "Nizar Hamouda",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "the best ",
    note: "3/5"
  }
];

export default class RatingHistory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Content>
          <List containerStyle={{ marginBottom: 20 }}>
            {list.map(l => (
              <ListItem>
                <Image source={{ uri: l.avatar_url }} style={styles.photo} />
                <View>
                  <Text style={styles.text}>{l.name}</Text>
                  <Text style={styles.subtitle}>{l.subtitle}</Text>
                  <Text style={styles.note}>{l.note}</Text>
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
    flex: 1,
    flexWrap: "wrap",
    color: "#000000",
    marginLeft: 12,
    fontSize: 17,
    marginBottom: -50
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
    marginLeft: 70,
    flexWrap: "wrap",
    marginLeft: 240
  }
});
