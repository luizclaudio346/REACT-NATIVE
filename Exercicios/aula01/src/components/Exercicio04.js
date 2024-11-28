import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const Exercicio04 = () => {

    const itens = ['Bola', 'Pato', 'Rato']

    return (
        <View style={sytles.container}>
            {itens.map((item, index) => (
                <Text style={sytles.text} key={index}>{item}</Text>
            ))}
        </View>
    )
}

const sytles = StyleSheet.create({
    container: { 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100
    },
    text: { 
        color: 'blue',
        fontSize: 20
    }
})

export default Exercicio04