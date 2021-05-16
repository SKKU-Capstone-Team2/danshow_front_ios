import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Mainpage from './main_page';
import Crew from './crew';
import Mypage from './mypage_user';
import Ionicons from "react-native-vector-icons/Ionicons";

import Lecture from "./lecture";
import Create_Crew from "./create_crew";
import Detail_Crew from "./detail_crew";
import Test_page from "./test_page";
import Tp_detail from "./tp_detail";
import Cover from "./cover";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="MainPage" component={Mainpage} options={{headerShown: false}} />
            <HomeStack.Screen name="Lecture" component={Lecture} options={{headerShown: false}}/>
            <HomeStack.Screen name="Cover" component={Cover} options={{headerShown: false}}/>
            <HomeStack.Screen name="test_page" component={Test_page} options={{headerShown: false}}/>
            <HomeStack.Screen name="tp_detail" component={Tp_detail} options={{headerShown: false}}/>
        </HomeStack.Navigator>
    )
}

const CrewStack = createStackNavigator();

function CrewStackScreen() {
    return (
        <CrewStack.Navigator>
            <CrewStack.Screen name="Crew" component={Crew}/>
            <CrewStack.Screen name="Create_Crew" component={Create_Crew} options={{headerShown: false}}/>
            <CrewStack.Screen name="Detail_Crew" component={Detail_Crew} options={{headerShown: false}}/>
        </CrewStack.Navigator>
    )
}

const MypageStack = createStackNavigator();

function MypageStackScreen() {
    return (
        <MypageStack.Navigator>
            <MypageStack.Screen name="Mypage" component={Mypage}/>
        </MypageStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export default function Main({ navigation }) {
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
            <Tab.Screen name="Mainpage" component={HomeStackScreen} />
            <Tab.Screen name="Crew" component={CrewStackScreen} />
            <Tab.Screen name="Mypage" component={MypageStackScreen} />
    </Tab.Navigator>
  );
}

