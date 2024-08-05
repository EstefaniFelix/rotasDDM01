import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function ContactScreen() {
    const router = useRouter();
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Screen</Text>
      <Text style={styles.description}>
        This is the About Screen with some interesting facts and details about the app.
      </Text>
      <Button title="Home" onPress={() => router.push('/home')} color="#000" />
        <br></br>
      <Button title="Voltar" onPress={() => router.push('/about')} color="#000" />

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#836FFF', // Verde escuro
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#4B0082', // Verde neon
    marginBottom: 20,
    fontFamily: 'Inter', // Fonte 'Inter'
  },
  description: {
    fontSize: 16,
    color: '#FFF', // Branco
    textAlign: 'center',
    fontFamily: 'Love Light', // Fonte 'Love Light',
    paddingBottom: 10,
  },
});