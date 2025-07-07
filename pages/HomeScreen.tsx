import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CommonActions, useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="REGISTRO"
        onPress={() =>
          navigation.dispatch(CommonActions.navigate({ name: "Registro" }))
        }
      />
      <Button
        title="LOGIN"
        onPress={() =>
          navigation.dispatch(CommonActions.navigate({ name: "Login" }))
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});
