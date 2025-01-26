import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import HomeScreen from '../screens/Home/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutScreen from '../screens/About/AboutScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Drawer.Screen name={Routes.Home} component={HomeScreen} />
      <Drawer.Screen name={Routes.About} component={AboutScreen} />
    </Drawer.Navigator>
  );
};

export const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={() => ({
        headerShown: true,
        gestureEnabled: true,
      })}>
      <Stack.Screen name={'Drawer'} component={DrawerNavigation} />
      <Stack.Screen name={Routes.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default {MainNavigation};
