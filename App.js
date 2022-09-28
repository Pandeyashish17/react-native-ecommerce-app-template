import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "expo-vector-icons";
import Navigator from "./src/Routes/Navigator";
import AboutMe from "./src/screens/AboutMe";
import { StateContext } from "./context/StateContext";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StateContext>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name == "Home") {
                  iconName = "md-home";
                } else if (route.name == "about") {
                  iconName = "md-people";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: "#FC5252",
              inactiveTintColor: "#898989",
            }}
          >
            <Tab.Screen
              name="Home"
              component={Navigator}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="about"
              component={AboutMe}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        </StateContext>
      </NavigationContainer>
    </>
  );
}
