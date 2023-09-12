import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, View } from 'react-native';

import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import Cadastrar from './src/screens/Cadastrar/Cadastrar';
import User from './src/screens/User/User';
import EditChat from './src/screens/EditChat/EditChat';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerBlurEffect: 'light',
  headerStyle: {
    backgroundColor: '#05161A'
  },
  headerTintColor: '#9CE5C9',
  
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
        <Stack.Screen
          name='Home'
          options={({ navigation }) => ({
            title: 'CodAI',
            headerRight: () => (
              <View style={{ marginRight: '15px' }}>
                <Button
                  title='Entrar'
                  onPress={() => navigation.push('Login')}
                  color='transparent'

                />
              </View>
            )
          })}
          component={Home}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#131519',
              shadowColor: 'transparent',
              elevation: 0
            },
          }}
        />
        <Stack.Screen
          name='Cadastrar'
          component={Cadastrar}
          options={{
            title: 'Cadastrar',
            headerStyle: {
              backgroundColor: '#131519',
              shadowColor: 'transparent',
              elevation: 0
            },
          }}
        />
        <Stack.Screen
          name='User'
          component={User}
          options={{
            title: 'User',
            headerShown: false
          }}
        />
        <Stack.Screen
          name='EditChat'
          component={EditChat}
          options={{
            title: 'Edição de Chats',
            headerStyle: {
              backgroundColor: '#131519',
              shadowColor: 'transparent',
              elevation: 0
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
