import * as React from "react";
import { Appbar } from "react-native-paper";
import CustomAvatar from "./CustomAvatar";

const CustomAppbar = () => (
  <Appbar.Header>
    <Appbar.Content title="Activity Tracker" subtitle={"Aurore Sifflet"} />

    <CustomAvatar />
  </Appbar.Header>
);

export default CustomAppbar;
