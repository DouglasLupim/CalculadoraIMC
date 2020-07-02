import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';

import Inicio from '../pages/inicio';
import Duvidas from '../pages/duvidas';

const Stack = createStackNavigator();

export default function InicioRoutes() {
  return (
    <Stack.Navigator
    screenOptions={{
        cardOverlayEnabled: true,
    }}
    mode='modal'
    headerMode='none'
    
    >
      <Stack.Screen 
      name="Inico" 
      component={Inicio} 
      />
      <Stack.Screen 
      name="Duvida"
      component={Duvidas}
      options={{
            cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
            ...TransitionPresets.ModalPresentationIOS
        }}
      />
    </Stack.Navigator>
  );
}