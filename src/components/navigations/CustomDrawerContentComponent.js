import React from "react";
import { Animated, View, Image, ScrollView, StyleSheet } from "react-native";
import { DrawerItems, SafeAreaView } from "react-navigation";
import { Text } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";

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
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#00B0FF", "#303F9F"]}
          style={styles.drawerHeader}
        >
          <Image
            style={styles.drawerLogo}
            source={require("../../assets/logo/user.png")}
          />
          <Text style={styles.drawerName}>Max Meza</Text>
          <Text style={styles.drawerEmail}>max123@gmail.com</Text>
        </LinearGradient>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    flex: 1,
    justifyContent: "center",
    height: 150,
    padding: 10
  },
  drawerLogo: {
    height: 60,
    width: 60,
    borderRadius: 10
  },
  drawerName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  },
  drawerEmail: {
    fontSize: 15,
    color: "white"
  }
});

export default CustomDrawerContentComponent;
