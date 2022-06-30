import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { multiply } from 'react-native-teads-sdk-module';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(1, 2).then(setResult);
  }, []);

  function onPress() {
    multiply(6, 6).then(setResult);
  };

  return (
    <View style={styles.container}>
      <Button title="Click to invoke your native module!" color="#841584" onPress={onPress} />
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
