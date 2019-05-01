import { createStackNavigator, createAppContainer } from "react-navigation";
import Article from "./components/Article";
import Home from "./components/Home";

export default createAppContainer(
  createStackNavigator(
    {
      Article,
      Home
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#8B81C3"
        },
        headerTintColor: "#EFBB24",
        title: `Welcome to my Blog App`
      },
      initialRouteName: "Article"
    }
  )
);
