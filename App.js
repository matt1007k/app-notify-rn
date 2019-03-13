import React, { Component } from "react";

import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";

import { Provider as ProviderPaper, DefaultTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/SimpleLineIcons";

import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

import CustomDrawerContentComponent from "./src/components/navigations/CustomDrawerContentComponent";
import CreateNotificationsScreen from "./src/screens/CreateNotificationsScreen";
import CustomHeaderComponent from "./src/components/navigations/CustomHeaderComponent";
import ListNotificationsScreen from "./src/screens/ListNotificationsScreen";

{
  /* <color name="colorPrimary">#3F51B5</color>
    <color name="colorPrimaryDark">#303F9F</color>
    <color name="colorAccent">#00B0FF</color>

    <color name="colorAccentDark">#0091EA</color> */
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3F51B5",
    accent: "#00B0FF",
    background: "#FFFFFF"
  }
};

export default class App extends Component {
  render() {
    return (
      <ProviderPaper theme={theme}>
        <AppContainer />
      </ProviderPaper>
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
    AddNoty: CreateNotificationsScreen,
    ListNoty: ListNotificationsScreen
  },
  {
    contentComponent: CustomDrawerContentComponent
  }
);

const titleCustom = titleDefault => {
  if (titleDefault === "Home") {
    return "Inicio";
  } else if (titleDefault === "Settings") {
    return "Configuraciones";
  } else if (titleDefault === "AddNoty") {
    return "Registrar notificacion";
  } else if (titleDefault === "ListNoty") {
    return "Lista de notificaciones";
  } else {
    return "Inicio";
  }
};

const AppStack = createStackNavigator(
  {
    Dashboard: AppDrawerNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerLeft: (
          <Icon
            name="menu"
            size={30}
            color="#fff"
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
        title: titleCustom(routeName),
        header: props => <CustomHeaderComponent {...props} />,
        headerStyle: {
          backgroundColor: "transparent"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#fff"
        },
        headerTintColor: "#fff",
        animationEnabled: true
      };
    },
    backgroundColor: "#FFF"
  }
);

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      header: props => <CustomHeaderComponent {...props} />,
      headerStyle: {
        backgroundColor: "transparent"
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#fff"
      },
      headerTintColor: "#fff",
      animationEnabled: true
    }
  }
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
