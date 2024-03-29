import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="dark"/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
