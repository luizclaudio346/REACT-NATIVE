import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio03 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { width: 50, backgroundColor: 'powderblue'}]}/>
      <View style={[styles.flexBox, {backgroundColor: 'blue'}]}/>
      <View style={[styles.box, {backgroundColor: 'red', width: 50}]}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 100,
    },
    box: {
        height: '100%'
    },
    flexBox: {
        flex: 1
    }
})

export default Exercicio03