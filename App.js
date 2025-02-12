import React from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
// import { ApolloProvider } from '@apollo/client';
// import { client } from './apolloClient'; // Ensure this file is set up
import MainNavigation from './Navigation/MainNavigation';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
       
          <MainNavigation />
        
      </ApplicationProvider>
    </GestureHandlerRootView>
  );
};

export default App;
