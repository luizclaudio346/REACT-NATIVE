import { View, Text } from 'react-native'
import React from 'react'

const DetailsScreen = ({ route, navigation }) => {
    // Extraindo os parâmetros passados para essa rota a partir do objeto "route"
    const { itemId, otherParam } = route.params

    // Agora pode usar `itemID` e `otherParam` dentro do componente

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId} </Text>
      <Text>Other Param: {otherParam}</Text>
    </View>
  )
}

export default DetailsScreen