import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // exportnado o useRouter da biblioteca -> 

export default function HomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Homssse Screen</Text>
            <Button title="Go to About" onPress={() => router.push('/about')} color="#1F511E" />
            <br></br>
            <Button title="Contato" onPress={() => router.push('/contact')} color="#000" />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000', // Fundo preto
    },
    title: {
        fontSize: 28,
        color: '#86FF84', // Verde neon
        marginBottom: 20,
        fontFamily: 'Inter', // Fonte 'Inter'
    },
});