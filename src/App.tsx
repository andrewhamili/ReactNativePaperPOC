import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useColorScheme} from 'react-native';
import {
  adaptNavigationTheme,
  MD3LightTheme,
  MD3DarkTheme,
  PaperProvider,
  Text,
} from 'react-native-paper';

const App = () => {
  const scheme = useColorScheme();

  const {DarkTheme, LightTheme} = adaptNavigationTheme({
    reactNavigationLight: MD3LightTheme,
    reactNavigationDark: MD3DarkTheme,
  });

  const isDark = scheme === 'dark';

  const RootStack = createNativeStackNavigator();

  return (
    <PaperProvider theme={isDark ? DarkTheme : LightTheme}>
      <NavigationContainer theme={isDark ? DarkTheme : LightTheme}>
        <RootStack.Navigator>
          <RootStack.Screen
            name="test"
            component={() => <Text>Hello world</Text>}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
