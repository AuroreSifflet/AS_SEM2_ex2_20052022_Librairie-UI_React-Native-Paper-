import * as React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import CustomAppbar from "./components/CustomAppbar";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import CustomCardTitle from "./components/CustomCardTitle";
import CustomBottomNavigation from "./components/CustomBottomNavigation";

//importation du fichier json
import data from "./data.json";
import { ScrollView, View } from "react-native-web";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomAppbar />

      <CustomBottomNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
});
//changer theme  <PaperProvider>
