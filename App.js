import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Splachscreen from './screens/Splachscreen';
import LoginScreen from './screens/LoginScreen';
import AuthNav from './navigations/AuthNav';
export default function App() {
  return (
    <NavigationContainer>
      <AuthNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
