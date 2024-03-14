import React from "react";
import { Button, View, StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';

export function ReloadButton() {
  return (
    <View style={styles.container}>
     
      <Button
        title="Volver a abrir Pagina Web"
        onPress={() => WebBrowser.openBrowserAsync('https://www.iglesiacce.org')}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginVertical: 10,
  },
});