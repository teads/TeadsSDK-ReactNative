import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StrictMode } from 'react';
import type {
  ArticlePageProps,
  HelloPageProps,
  ConfigScreenProps,
  RootStackParamList,
} from './types';
import ArticleScreen from './Article';
import ConfigScreen from './ConfigScreen';

function HelloPage({ navigation }: HelloPageProps) {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Button
        title="Go back to Article page"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

function ArticlePage({ navigation, route }: ArticlePageProps) {
  return (
    <View style={styles.container}>
      <ArticleScreen navigation={navigation} route={route} />
    </View>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <StrictMode>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ConfigScreen">
          <Stack.Screen
            name="ConfigScreen"
            component={ConfigScreen}
            options={{ title: 'QA Configuration' }}
          />
          <Stack.Screen
            name="ArticlePage"
            component={ArticlePage}
            options={{ title: 'Article' }}
          />
          <Stack.Screen name="HelloPage" component={HelloPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
