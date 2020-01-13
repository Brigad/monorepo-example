import React from 'react';
import {title} from '@monorepo-example/utils/stringUtils';
import {Text, View} from 'react-native';
import {add} from '@monorepo-example/utils/mathUtils';
import {Provider as PaperProvider, Button} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text style={{fontSize: 24}}>{title}</Text>
        <Text style={{fontSize: 16, marginVertical: 16}}>
          {'1 + 1 = '}
          {add(1, 1)}
        </Text>
        <Button mode="contained">Hello</Button>
      </View>
    </PaperProvider>
  );
};

export default App;
