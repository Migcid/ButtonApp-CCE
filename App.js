
import { StyleSheet, Text, View } from 'react-native';
import { Iglesia } from "./components/linkDirect copy";
import { ReloadButton } from './components/reOpen';



export default function App() {
  return (
    <View style={styles.container}>
      
      <Iglesia />
      <ReloadButton />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#84b6f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
