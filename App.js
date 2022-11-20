import { NavigationContainer, Stack} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, StyleSheet } from "react-native";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'}
          }}
        >
          <Stack.Screen 
            name='MealsCategories' 
            component={CategoriesScreen} 
            options={{
              title: 'All Categories',
            }} 
          />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

})


