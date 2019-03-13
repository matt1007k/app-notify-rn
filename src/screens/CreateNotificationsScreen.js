import React, { Component } from "react";
import { StyleSheet, View, AsyncStorage } from "react-native";
import { Button, Text } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class CreateNotificationsScreen extends Component {
  static navigationOptions = {
    title: "Registrar notificacion",
    drawerIcon: <Icon name="bell-plus" size={25} />
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to create notifications screen
        </Text>
        <Button
          mode="outlined"
          onPress={() => this.props.navigation.navigate("ListN")}
        >
          Go to List
        </Button>
      </View>
    );
  }
}

export default CreateNotificationsScreen;

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
