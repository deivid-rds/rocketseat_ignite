//React é obrigatório para construirmos interfaces
//Fragment é como uma View, serve para agrupar (não tem impacto nenhum visualmente)
import React, { Fragment } from 'react';

//trazemos do React o que precisamos no contexto mobile
import { View, Text } from 'react-native';

export default function App() {
  return (

    <Fragment>
      <View style={{
        //tomará toda a tela
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>React Native</Text>
      </View>

      <Text style={{

        alignSelf: 'center',
        marginBottom: 20

      }}>Ignite</Text>
    </Fragment>

  )
}