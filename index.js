import { AppRegistry } from "react-native";
import HomeScreen from "./src/home-screen/HomeScreen";
import MultiOffersScreen from "./src/multi-offers-screen/MultiOffersScren";
import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
AppRegistry.registerComponent('main', () => App);
AppRegistry.registerComponent("HomeScreen", () => HomeScreen);
AppRegistry.registerComponent("MultiOffersScreen", () => MultiOffersScreen);
