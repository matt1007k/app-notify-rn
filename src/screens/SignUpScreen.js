import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, TextInput, Title, Text } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  logo: {
    alignSelf: "center",
    height: 150,
    width: 150
  },
  title: {
    marginBottom: 40,
    textAlign: "center"
  },
  inputText: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white"
  }
});

class SignUpScreen extends Component {
  static navigationOptions = {
    title: "Crear una cuenta"
  };

  state = {
    user: {
      email: "",
      password: ""
    }
  };

  render() {
    const { email, password } = this.state.user;
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/logo/logo.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
        <Title style={styles.title}> Crear una cuenta </Title>
        <TextInput
          style={styles.inputText}
          label="Correo Electronico"
          value={email}
          onChangeText={email => this.setState({ user: { email } })}
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.inputText}
          label="Contrasena"
          value={password}
          onChangeText={password => this.setState({ user: { password } })}
          textContentType="password"
        />
        <Button
          mode="contained"
          color="red"
          onPress={() => this.props.navigation.navigate("Login")}
        >
          Registrarse
        </Button>
        <Text>Email: {this.state.user.email}</Text>
        <Text>Password: {this.state.user.password}</Text>
        <Button
          mode="contained"
          onPress={() => this.props.navigation.navigate("Login")}
        >
          Home
        </Button>
      </View>
    );
  }
}

export default SignUpScreen;
