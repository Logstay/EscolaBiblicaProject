import React from 'react';
import { Provider } from "mobx-react";
import { configure } from "mobx";
import Main from './views/Main'
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';


configure({ strict: "always" });


class App extends React.Component {

  render(){
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
      <Provider>
        <Main/>
      </Provider>
      </ApplicationProvider>


    )
  }

}

export default App