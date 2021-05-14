import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Mainpage from './main_page';
import Crew from './crew';
import Mypage from './mypage_user';
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function Main({ navigation}) {
  return(
    <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarLabel: ({focused}) => {
                    return null
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Mainpage') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Crew') {
                        iconName = focused ? 'people' : 'people-outline';
                    } else if (route.name === "Mypage") {
                        iconName = focused ? "person-circle" : "person-circle-outline"
                    }

                    return <Ionicons name={iconName} size={24} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: '#000000',
            }}
        >
            <Tab.Screen name="Mainpage" component={Mainpage} />
            <Tab.Screen name="Crew" component={Crew} />
            <Tab.Screen name="Mypage" component={Mypage} />
        </Tab.Navigator>
  );
}

