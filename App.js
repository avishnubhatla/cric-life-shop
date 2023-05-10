import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { Cart } from "./components/Cart/Cart";
import { Profile } from "./components/Profile/Profile";
import {SignIn} from './components/Authentication/SignIn'
import {SignUp} from './components/Authentication/SignUp'
import {ConfirmEmail} from './components/Authentication/Confirm'
import {ResetPassword} from './components/Authentication/ResetPassword'
import {NewPassword} from './components/Authentication/NewPassword'
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const PRODUCTS = [{ uri: "https://m.media-amazon.com/images/I/51IwaYzGLCL._AC_SX679_.jpg", name: "White Ball", price: "$7", numOf: 0, tPrice: "$7"},
    {uri:'https://images.squarespace-cdn.com/content/v1/5fd20db1750b345d8b151572/1607681222132-OIU32C99X3V195ZDG5AE/Red+Premier+Side.jpg?format=750w', name: "Red Ball", price: "$7", numOf: 0, tPrice: "$7"},
    {uri: 'https://m.media-amazon.com/images/I/81bxuZCpdpL._AC_SY879_.jpg', name: 'Kookaburra Bat', price: "$100", numOf: 0, tPrice: "$100"},
    {uri: 'https://bestcricketstore.com/wp-content/uploads/2022/01/e3e916c8-b859-46b3-b197-2c9c7d7c1f69.jpeg', name: "Cricket Stumps", price: "$70", numOf: 0, tPrice: "$70"},
    {uri: 'https://cdn.shopify.com/s/files/1/0020/7477/1565/products/first-pitch-bowler-pro-2-wheel-cricket-bowling-machine-16140464029805_1024x1024.jpg?v=1612371229', name: "Bowling Machine", price: "$600", numOf: 0, tPrice: "$600"},
    {uri: 'https://i.ebayimg.com/images/g/9SQAAOSwvGRh4CAH/s-l500.jpg', name: "Rope Ball", price: "$15", numOf: 0, tPrice: "$15"},
    {uri: 'https://cdn.shopify.com/s/files/1/0614/7149/0275/products/dsc-neon_750x.jpg?v=1651675829', name: "Cricket Shoes", price: "$80", numOf: 0, tPrice: "$80"},
    {uri: 'https://m.media-amazon.com/images/I/916LckrjstS._AC_SX679_.jpg', name: "Cricket Pitch", price: "$300", numOf: 0, tPrice: "$300"},
    {uri: 'https://m.media-amazon.com/images/I/51GJDjJGHLL._AC_.jpg', name: "Cricket Kit", price: "$250", numOf: 0, tPrice: "$250"},
    {uri: 'https://m.media-amazon.com/images/I/51mI2UYeHGL._AC_SX466_.jpg', name: "Cricket Helmet", price: "$40", numOf: 0, tPrice: "$40"}]


export const ProductContext = React.createContext();
export const SetProductContext = React.createContext();

export const UseProductContext = () => React.useContext(ProductContext)
export const UseSetProductContext = () => React.useContext(SetProductContext)

const ProductProvider = ( {value, children} ) => {
  const [product, setProduct] = React.useState(value)
  return (
    <ProductContext.Provider value={product}>
      <SetProductContext.Provider value={setProduct}>
        {children}
      </SetProductContext.Provider>
    </ProductContext.Provider>
  )
}


function Home() {
  return (
    <ProductProvider value = {PRODUCTS}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </ProductProvider>
  )
}
export default function App() {
  return (
    <View style={styles.layout}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignIn" component={SignIn}/>
          <Stack.Screen name="SignUp" component={SignUp}/>
          <Stack.Screen name="Confirm" component={ConfirmEmail}/>
          <Stack.Screen name="ResetPassword" component={ResetPassword}/>
          <Stack.Screen name="NewPassword" component={NewPassword}/>
          <Stack.Screen name="Main" component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1, 
  }
});
