import * as React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const CustomCardTitle = (props) => {
  const { date, title, distance, duree, image } = props;
  let activity = image;
  const urlImg = {
    walk: require("../assets/marche.png"),
    velo: require("../assets/velo.png"),
  };
  //console.log(urlImg["walk"]); //3

  return (
    <Card style={styles.container}>
      <Card.Content style={styles.contentTitleImage}>
        {/* <Card.Title
        title="26 mai 2021"
        subtitle="Marche à pied"
        titleStyle={{ fontSize: 14 }}
        subtitleStyle={{ fontSize: 16 }}
        style={styles.cardTitle}
      /> */}
        <Card.Content style={styles.cardTitle}>
          <Paragraph style={{ fontSize: 18 }}>{date}</Paragraph>
          <Title style={{ fontSize: 20 }}>{title}</Title>
        </Card.Content>
        <Card.Cover source={urlImg[activity]} style={styles.cardImage} />
      </Card.Content>
      <Card.Content style={styles.contentInfo}>
        <Card.Title
          title="Distance"
          subtitle={distance}
          titleStyle={{ fontSize: 14 }}
          subtitleStyle={{ fontSize: 18 }}
          style={styles.cardTitle}
        />
        <Card.Title
          title="Durée"
          subtitle={duree}
          titleStyle={{ fontSize: 14 }}
          subtitleStyle={{ fontSize: 18 }}
          style={styles.cardTitle}
        />
      </Card.Content>
    </Card>
  );
};

export default CustomCardTitle;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    margin: 5,
    minHeight: 180,

    //backgroundColor: "green",
  },
  contentTitleImage: {
    flex: 2,
    flexDirection: "row",
  },
  contentInfo: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
    //backgroundColor: "orange",
  },

  cardImage: {
    width: 150,
    height: 100,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    flex: 1,
    //backgroundColor: "yellow",
    margin: 5,
  },
  cardTitle: {
    //backgroundColor: "red",
    flex: 1,
  },
});
