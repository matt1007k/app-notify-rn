import React, { Component } from "react";
import { StyleSheet, View, AsyncStorage } from "react-native";
import { Button, Text } from "react-native-paper";

import Icon from "react-native-vector-icons/AntDesign";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Inicio",
    headerRight: (
      <Icon.Button
        name="save"
        size={30}
        backgroundColor="#fff"
        color="#000"
        style={{ paddingRight: 10 }}
        onPress={this._signOutAsync}
      />
    )
  };

  static defaultNavigationOptions = {
    title: "Inicio"
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    alert("This is a button!");
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Home screen</Text>
        <Button mode="outlined" onPress={this._signOutAsync}>
          Go to Login
        </Button>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
