import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";
import SpaceSky from "../../../components/decorations/SpaceSky";
import { Text } from "react-native-paper";
import i18n from "i18n-js";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function TheSignsScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, paddingVertical: 20 }}>
      <SpaceSky />
      <View style={{ marginHorizontal: 20 }}>
        <Text>{i18n.t("th_si_1")}</Text>
      </View>
      <Image style={styles.image} source={require("./images/th_si_1.jpg")} />
      <View style={{ marginHorizontal: 20 }}>
        <Text>{i18n.t("th_si_2")}</Text>
      </View>
      <Image style={styles.image} source={require("./images/th_si_2.png")} />
      <View style={{ marginHorizontal: 20 }}>
        <Text>{i18n.t("th_si_3")}</Text>
      </View>
      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    height: 200,
    marginVertical: 20,
  },
});

export default TheSignsScreen;
