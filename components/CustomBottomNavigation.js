import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
//importation du fichier json
import data from "../data.json";
import CustomCardTitle from "./CustomCardTitle";

const HomeRoute = () => {
  return data.map((val, key) => (
    <CustomCardTitle
      date={val.date}
      title={val.title}
      distance={val.distance}
      duree={val.duree}
      image={val.sport}
      key={key}
    />
  ));
};

const HistoryRoute = () => <Text>HISTORY</Text>;

const AddRoute = () => <Text>ADD</Text>;
const SettingsRoute = () => <Text>SETTINGS</Text>;

const CustomBottomNavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "history", title: "History", icon: "history" },
    { key: "add", title: "Ajouter", icon: "plus" },
    { key: "settings", title: "Paramètre", icon: "cog" },
  ]);

  // gestion des icons ios/android
  /*   let iconName;
  let PlatformIos;
  Platform.OS === "ios" ? (PlatformIos = "ios-") : (PlatformIos = "");
  if (routes[0].key === "home") {
    iconName = PlatformIos + "home";
  } else if (routes[1].key === "history") {
    iconName = PlatformIos + "history";
  } */

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    history: HistoryRoute,
    add: AddRoute,
    settings: SettingsRoute,
  });
  //console.log(routes[0].key);
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default CustomBottomNavigation;
