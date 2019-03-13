import React, { Component } from "react";
import { View, StyleSheet, Image, AsyncStorage } from "react-native";
import { Button, TextInput, Title, Text } from "react-native-paper";
import ButtonRaisedAccent from "../components/button/ButtonRaisedAccent";

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

export class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    user: {
      email: "",
      password: ""
    }
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("App");
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
        <Title style={styles.title}> Iniciar sesion </Title>
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

        <ButtonRaisedAccent title="Ingresar" OnAction={this._signInAsync} />

        <Text>Email: {this.state.user.email}</Text>
        <Text>Password: {this.state.user.password}</Text>
        <Button
          mode="contained"
          color="red"
          onPress={() => this.props.navigation.navigate("SignUp")}
        >
          Registrarse
        </Button>
      </View>
    );
  }
}

export default LoginScreen;
