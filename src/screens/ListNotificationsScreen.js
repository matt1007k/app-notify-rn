import React, { Component } from "react";
import { StyleSheet, View, AsyncStorage } from "react-native";
import { Button, Text } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class ListNotificationsScreen extends Component {
  static navigationOptions = {
    title: "Lista de Notificaciones",
    drawerIcon: <Icon name="format-list-bulleted" size={25} />
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to List notifications screen</Text>
        <Button mode="contained">dsad</Button>
      </View>
    );
  }
}

export default ListNotificationsScreen;

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
