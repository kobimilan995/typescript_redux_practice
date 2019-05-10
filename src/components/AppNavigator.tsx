import { createStackNavigator, createAppContainer } from "react-navigation";

import BootstrapPage from "./pages/BootstrapPage";

const AppNavigator = createStackNavigator({
  Bootstrap: {
    screen: BootstrapPage
  }
});

export default createAppContainer(AppNavigator);
