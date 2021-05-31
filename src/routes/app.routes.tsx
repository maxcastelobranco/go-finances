import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";

import Dashboard from "../screens/Dashboard";
import RegisterTransaction from "../screens/RegisterTransaction";
import Summary from "../screens/Summary";

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.text,
        labelPosition: "beside-icon",
      }}
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons {...{ size, color }} name="format-list-bulleted" />
          ),
        }}
      />
      <Screen
        name="Register"
        component={RegisterTransaction}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons {...{ size, color }} name="attach-money" />
          ),
        }}
      />
      <Screen
        name="Summary"
        component={Summary}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons {...{ size, color }} name="pie-chart" />
          ),
        }}
      />
    </Navigator>
  );
};

export default AppRoutes;
