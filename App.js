import React from 'react';
import { ApplicationProvider, Layout, Button } from '@ui-kitten/components';
import { mapping, dark as darkTheme } from '@eva-design/eva';
import { default as appTheme } from './src/assets/custom-theme.json'; // <-- Import app theme

const theme = { ...darkTheme, ...appTheme };

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Button>HOME</Button>
  </Layout>
);

const App = () => (
  <ApplicationProvider mapping={mapping} theme={theme}>
    <HomeScreen/>
  </ApplicationProvider>
);

export default App;