import React from "react";
import { View, StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import { PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";

export function ReloadButton() {
  return (
    <PaperProvider>
        <View  style={styles.container}>
     
            <Button 
                icon="send" mode="elevated" onPress={() => WebBrowser.openBrowserAsync('https://www.iglesiacce.org')}> Volver a Abrir Pagina
            </Button>
        </View>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    
  },
});