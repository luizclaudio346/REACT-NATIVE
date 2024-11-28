import { View, Text, Button } from 'react-native'
import React from 'react'

// Esse navigation permite que, você navegue entre telas.
const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
          <Button 
              title='Go to Details'
              onPress={() => navigation.navigate('Details', {
                  itemId: 34,
                  otheParam: 'Pode ser qualquer coisa...'
              }) }
          />
      </View>
    )
  }
  
  export default HomeScreen