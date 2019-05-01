import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#91B493",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  input: {
    borderColor: "#d6d7da",
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "#FFFFFB",
    fontSize: 20,
    height: 45,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingTop: 5,
    width: 250
  },
  button: {
    alignItems: "center",
    backgroundColor: "#406E9F",
    borderRadius: 9,
    height: 50,
    justifyContent: "center",
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    width: 250
  },
  buttonText: {
    color: "#EFBB24",
    fontSize: 25,
    fontWeight: "bold"
  }
});

const placeHolderColor = "#268785";

export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <TextInput
            onChangeText={text => this.setState({ text })}
            placeholder="Username"
            placeholderTextColor={placeHolderColor}
            style={styles.input}
            textContentType="username"
          />
          <TextInput
            onChangeText={text => this.setState({ vv: text })}
            placeholder="Password"
            placeholderTextColor={placeHolderColor}
            secureTextEntry={true}
            style={styles.input}
            textContentType="password"
          />
          <TouchableOpacity
            onPress={() => navigate("Article", { name: "VV" })}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
