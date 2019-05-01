import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#91B493",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  welcome: {
    fontSize: 20,
    flex: 10,
    textAlign: "center",
    margin: 10,
    width: "100%"
  },
  buttonView: {
    flex: 1,
    flexDirection: "row"
  },
  button: {
    backgroundColor: "#406E9F",
    borderRadius: 9,
    height: 50,
    justifyContent: "space-around",
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    width: 150
  },
  buttonText: {
    color: "#EFBB24",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default class Article extends Component {
  static navigationOptions = {
    title: "Article List"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={() => navigate("Article", { name: "VV" })}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Publish</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("Article", { name: "VV" })}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Postpone</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.welcome}>This is Article Page!</Text>
      </View>
    );
  }
}
