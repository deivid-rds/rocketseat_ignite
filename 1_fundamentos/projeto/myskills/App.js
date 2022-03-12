import React from 'react';                 //para construirmos interfaces
import { View, Text } from 'react-native'; //trazemos do React o que precisamos no contexto mobile

export default function App() {
  return (
    <View style={{
      flex: 1,  //tomará toda a tela
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>React Native</Text>
      <Text>Ignite</Text>
    </View>
  )
}