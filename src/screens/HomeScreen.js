import React, { Component } from "react";
import { StyleSheet, View, AsyncStorage } from "react-native";
import { Button, Text, FAB } from "react-native-paper";

import Icon from "react-native-vector-icons/AntDesign";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Inicio",
    drawerIcon: <Icon name="home" size={25} />
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
        <FAB
          style={styles.fab}
          icon="add"
          backgroundColor="#00B0FF"
          color="#FFF"
          onPress={() => this.props.navigation.navigate("AddNoty")}
        />
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
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  }
});
