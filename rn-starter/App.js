import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColourScreen from "./src/screens/ColourScreen";
import SquareScreen from "./src/screens/SquareScreen";
import SquareScreens from "./src/screens/SquareScreens";
import CounterScreen_reducer from "./src/screens/CounterScreen_reducer";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import BoxScreenEx from "./src/screens/BoxScreenEx";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    //Counter: CounterScreen,
    Counter: CounterScreen_reducer,
    Colour: ColourScreen,
    //Square: SquareScreen
    Square: SquareScreens,
    Text: TextScreen,
    // Box: BoxScreen,
    Box: BoxScreenEx
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
