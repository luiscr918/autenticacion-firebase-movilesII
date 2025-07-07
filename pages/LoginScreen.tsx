import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Config";
import { CommonActions, useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [correo, setCorreo] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const login = () => {
    signInWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        /* console.log(user); */
        navigation.dispatch(CommonActions.navigate({ name: "Perfil" }));
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Error","Credenciales incorrectas")
        /* console.log(errorCode);
        console.log(errorMessage); */
      });
  };
  const recuperarContrasenia = () => {
    sendPasswordResetEmail(auth, correo)
      .then(() => {
        // Password reset email sent!
        // ..
        Alert.alert("revisar","Verificar correo electrónico")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <View>
      <Text>LoginScreen</Text>
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
      <Text
        style={{ fontSize: 25, color: "blue" }}
        onPress={recuperarContrasenia}
      >
        Ovidaste la contraseña?
      </Text>
      <Button title="Login" onPress={login} />
    </View>
  );
};

const styles = StyleSheet.create({});
