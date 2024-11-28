import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio04 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, {backgroundColor: 'blue'}]}/>
      <View style={[styles.box, {backgroundColor: 'red'}]}/>
      <View style={[styles.box, {backgroundColor: 'yellow'}]}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        width: 200,
        height: 200,
    }
})

export default Exercicio04