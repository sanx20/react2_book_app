import { Ionicons } from '@expo/vector-icons';
import BookDetailScreen from './src/screens/book_detail/book_detail_screen';
import HomeScreen from './src/screens/home/home_screen';
import BorrowedScreen from './src/screens/borrowed/borrowed_screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import store from './src/redux/store';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BookStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#121212' },
      headerTintColor: '#FFD700',
      headerTitleStyle: { fontWeight: 'bold' },
    }}
  >
    <Stack.Screen name="BookList" component={HomeScreen} options={{ title: 'Home' }} />
    <Stack.Screen name="BookDetail" component={BookDetailScreen} options={{ title: 'Details' }} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: '#121212' },
            tabBarActiveTintColor: '#FFD700',
            tabBarInactiveTintColor: '#888',
          }}
        >
          <Tab.Screen
            name="Home"
            component={BookStack}
            options={{
              tabBarIcon: ({ color, size }) => <Ionicons name="list" size={size} color={color} />,
            }}
          />
          <Tab.Screen
            name="Borrowed"
            component={BorrowedScreen}
            options={{
              tabBarIcon: ({ color, size }) => <Ionicons name="book" size={size} color={color} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
