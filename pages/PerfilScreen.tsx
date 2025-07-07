import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/Config';


export const PerfilScreen = () => {
  const [uid, setUid] = useState("NONE")
  useEffect(() => {
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    setUid(uid)
    // ...
  } else {
    // User is signed out
    // ...
  }
});
}, [])
  return (
    <View>
      <Text>PerfilScreen</Text>
      <Text style={{fontSize:30}}>{uid}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})