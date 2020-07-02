import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import InicioRoutes from './src/routes/inicio.routes';

export default function App() {
  return (
    <NavigationContainer>
      <InicioRoutes />
    </NavigationContainer>
  );
}
