// In App.js in a new project

import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  createStaticNavigation,
  StaticParamList,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => {
          navigation.navigate('Sheet');
        }}
      >
        Home Screen
      </Text>
    </View>
  );
}

function SheetScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'green' }}>
      <View collapsable={false}>
        <Text>Sheet Header</Text>
      </View>
      <ScrollView>
        <View style={{ width: 200, height: 200, backgroundColor: 'red' }} />
      </ScrollView>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Sheet: {
      screen: SheetScreen,
      options: {
        presentation: 'formSheet',
        headerShown: false,
      },
    },
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
