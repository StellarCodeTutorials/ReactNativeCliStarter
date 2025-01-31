import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import HomeScreen from '../screens/Home/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutScreen from '../screens/About/AboutScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faHouseChimney} from '@fortawesome/free-solid-svg-icons/faHouseChimney';
import {faUserAlt} from '@fortawesome/free-solid-svg-icons/faUserAlt';
import {faUserAltSlash} from '@fortawesome/free-solid-svg-icons/faUserAltSlash';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import DrawerContent from './DrawerContent';

const bottomTabConfig = [
  {
    name: 'Home',
    component: HomeScreen,
    focusedIcon: faHome,
    unFocusedIcon: faHouseChimney,
  },
  {
    name: 'About',
    component: AboutScreen,
    focusedIcon: faUserAlt,
    unFocusedIcon: faUserAltSlash,
  },
];

const tabScreenOptions = ({route}: any): BottomTabNavigationOptions => ({
  tabBarIcon: ({focused}) => {
    const routeConfig = bottomTabConfig.find(
      config => config.name === route.name,
    );
    const iconName = focused
      ? routeConfig?.focusedIcon ?? faHome
      : routeConfig?.unFocusedIcon ?? faHome;
    return (
      <FontAwesomeIcon icon={iconName} color={focused ? '#0163d2' : 'black'} />
    );
  },
  headerShown: true,
  tabBarLabelStyle: {
    fontSize: 14,
    paddingBottom: 5,
    fontWeight: '600' as const,
  },
  tabBarActiveTintColor: '#0163d2',
  tabBarInactiveTintColor: 'black',
  tabBarStyle: {
    height: 60,
  },
  headerStyle: {
    backgroundColor: '#0163d2',
  },
  headerTitleStyle: {
    color: '#fff',
  },
  headerLeft: () => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <FontAwesomeIcon icon={faBars} color="#fff" />
      </TouchableOpacity>
    );
  },
});

// Stack Navigation
export const StackNavigation = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#0163d2',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerLeft: () => {
          return (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <FontAwesomeIcon icon={faBars} color="#fff" />
            </TouchableOpacity>
          );
        },
      }}>
      <Stack.Screen name={Routes.Home} component={HomeScreen} />
      <Stack.Screen name={Routes.About} component={AboutScreen} />
    </Stack.Navigator>
  );
};

// Drawer Navigation
export const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#0163d2',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
      <Drawer.Screen name={Routes.Home} component={BottomTabNavigation} />
      {/* <Drawer.Screen name={Routes.Home} component={StackNavigation} /> */}
    </Drawer.Navigator>
  );
};

// Bottom Tab Navigation (Static Tabs)
export const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      {bottomTabConfig.map(routeConfig => (
        <Tab.Screen
          key={routeConfig.name}
          name={routeConfig.name}
          component={routeConfig.component}
        />
      ))}
    </Tab.Navigator>
  );
};

// Main Navigation
export const MainNavigation = () => {
  return <DrawerNavigation />;
};

export default {MainNavigation};
