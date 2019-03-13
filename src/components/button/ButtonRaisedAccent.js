import React, { Component } from "react";
import { Button, withTheme } from "react-native-paper";
import { colors } from "../../utils/colors";

const ButtonRaisedAccent = props => {
  // const { colors } = props.theme;
  const { title, OnAction } = props;
  return (
    <Button mode="contained" dark color={colors.Accent} onPress={OnAction}>
      {title}
    </Button>
  );
};

export default withTheme(ButtonRaisedAccent);
