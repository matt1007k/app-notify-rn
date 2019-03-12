import React, { Component } from "react";
import { StyleSheet, Animated, ScrollView } from "react-native";

import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView
} from "react-navigation";

import { Provider as ProviderPaper } from "react-native-paper";
import Icon from "react-native-vector-icons/SimpleLineIcons";

import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

export default class App extends Component {
  render() {
    return (
      <ProviderPaper>
        <AppContainer />
      </ProviderPaper>
    );
  }
}

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

const CustomDrawerContentComponent = props => {
  const translateX = props.drawerOpenProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0]
  });

  return (
    <ScrollView>
      <SafeAreaView
        style={{ flex: 1 }}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
};

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen
  },
  {
    contentComponent: CustomDrawerContentComponent
  }
);

const AppStack = createStackNavigator(
  {
    Dashboard: AppDrawerNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerLeft: (
          <Icon.Button
            name="menu"
            size={30}
            backgroundColor="#fff"
            color="#000"
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
          />
        ),
        title: routeName
      };
    }
  }
);

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen
});

const AppSwitchNavigator = createSwitchNavigator(
  {
    Welcome: WelcomeScreen,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: "Welcome"
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);
