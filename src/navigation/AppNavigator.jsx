import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import NewScreen from "./screens/NewScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator(){
    return(

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title:"Inicial"
                }}
                
                />
          <Stack.Screen 
          name="NewScreen"
          component={NewScreen}
          options={{
            title:"Notícias"
          }}
          >
          </Stack.Screen>

              
            </Stack.Navigator>
        </NavigationContainer>
    );
    
            }