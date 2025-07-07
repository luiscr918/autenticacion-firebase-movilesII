import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Config";
import { CommonActions, useNavigation } from "@react-navigation/native";

export const RegistroScreen = () => {
  const navigation = useNavigation();
  const [correo, setCorreo] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const registro = () => {
    createUserWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        Alert.alert("exito", "te registraste correctamente");
        navigation.dispatch(CommonActions.navigate({ name: "Login" }));
        // ...
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);

        if (errorCode == "auth/weak-password") {
          errorCode = "Contrasenia muy debil";
          errorMessage =
            "Se necesita por lo menis 6 digitos para la contrasenia";
        } else if (errorCode == "auth/email-already-in-use") {
          errorCode = "Correo en uso";
          errorMessage = "Este correo ya se encuentra en uso";
        } else {
          errorCode = "Error";
          errorMessage = "Error en credenciales";
        }
        Alert.alert(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <View>
      <Text>RegistroScreen</Text>
      <TextInput
        placeholder="Ingresar su correo"
        onChangeText={(text) => setCorreo(text)}
        value={correo}
      />
      <TextInput
        placeholder="Ingresar su constraseña"
        onChangeText={(text) => setContrasenia(text)}
        value={contrasenia}
      />
      <Button title="Registro" onPress={registro} />
    </View>
  );
};

const styles = StyleSheet.create({});
