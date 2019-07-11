import React, { Component } from "react";
import StarRating from "react-native-star-rating";
import Icon from "react-native-vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView
} from "react-native";
export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={[styles.notification]}>
            <TouchableHighlight
              style={[styles.button1, styles.buttonnot]}
              onPress={() => {
                this.props.navigation.navigate("RatingHistory");
              }}
            >
              <Image
                style={styles.icon1}
                source={{
                  uri: "https://img.icons8.com/windows/32/000000/rating.png"
                }}
              />
            </TouchableHighlight>
          </View>
          <View style={styles.box}>
            <Image
              style={styles.profileImage}
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
              }}
            />
            <Text style={styles.name}>Susan Cherif</Text>
            <StarRating
              disabled={false}
              emptyStar={"ios-star-outline"}
              fullStar={"ios-star"}
              halfStar={"ios-star-half"}
              iconSet={"Ionicons"}
              maxStars={5}
              rating={this.state.starCount}
              selectedStar={rating => this.onStarRatingPress(rating)}
              fullStarColor={"red"}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableHighlight
              style={[styles.button, styles.buttonFacebook]}
              onPress={() => this.onClickListener("message")}
            >
              <Image
                style={styles.icon}
                source={{
                  uri: "https://png.icons8.com/Facebook/win8/100/ffffff"
                }}
              />
            </TouchableHighlight>

            <TouchableHighlight
              style={[styles.button, styles.buttonLike]}
              onPress={() => this.onClickListener("like")}
            >
              <Image
                style={styles.icon}
                source={{
                  uri: "https://png.icons8.com/Bulle/androidL/100/ffffff"
                }}
              />
            </TouchableHighlight>

            <TouchableHighlight
              style={[styles.button, styles.buttonCall]}
              onPress={() => this.onClickListener("phone")}
            >
              <Image
                style={styles.icon}
                source={{ uri: "https://png.icons8.com/phone/win8/100/ffffff" }}
              />
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1
  },
  notification: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row"
  },
  container: {
    padding: 5
  },
  box: {
    marginTop: 5,
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.2
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 200 / 2
  },
  name: {
    fontSize: 25,
    marginBottom: 20,

    color: "black"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },

  button: {
    width: 60,
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 30,
    margin: 10,
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 2,
      width: -2
    },
    elevation: 4
  },
  button1: {
    width: 35,
    height: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 30,
    margin: 10,
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 2,
      width: -2
    },
    elevation: 4
  },
  buttonFacebook: {
    backgroundColor: "#2f55a4"
  },
  buttonnot: {
    backgroundColor: "#1E90FF"
  },
  buttonLike: {
    backgroundColor: "#228B22"
  },
  buttonLove: {
    backgroundColor: "#FF1493"
  },
  buttonCall: {
    backgroundColor: "#40E0D0"
  },
  icon: {
    width: 35,
    height: 35
  },
  icon1: {
    width: 18,
    height: 18
  }
});
