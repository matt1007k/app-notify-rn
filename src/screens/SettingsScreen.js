import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

import Icon from "react-native-vector-icons/AntDesign";

class SettingsScreen extends Component {
  static navigationOptions = {
    title: "Configuraciones",
    drawerIcon: <Icon name="setting" size={25} />
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Configuraciones screen</Text>
        <Button
          mode="outlined"
          onPress={() => this.props.navigation.navigate("Home")}
        >
          Go to Home
        </Button>
      </View>
    );
  }
}

export default SettingsScreen;

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
