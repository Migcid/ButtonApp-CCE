import React from "react";
import { View, Text } from "react-native";
import { useEffect } from "react";
import * as WebBrowser from 'expo-web-browser';




export function Iglesia() {
    useEffect(() => {
        
        openWebPage();
      }, []);
    
      const openWebPage = async () => {
        await WebBrowser.openBrowserAsync('https://www.iglesiacce.org');
      };
    
 return 
};