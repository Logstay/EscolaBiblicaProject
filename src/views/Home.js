import React from "react"
import { View, Text } from "react-native"
import { Button } from '@ui-kitten/components';

const navigateDetails = () => {
  navigation.navigate('Step');
};

class Home extends React.Component {
  render(){
    return(
      <View>
        <Text>HOME</Text>
        <Button onpress={() => navigation.navigate('Step')}>Login with Facebook</Button>

      </View>
    )
  }
}

export default Home