import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { Image, ScrollView, Text, View } from "native-base";
const { width, height } = Dimensions.get("window");
const MobStyle = () => {
  const route = useRoute();
  const { detail } = route.params;
  return (
    <ScrollView style={{ flex: 1 }}>
      <Image
        source={{ uri: detail.img }}
        alt="Alternate Text"
        size="full"
        style={{
          width: "100%",
          height: height * 0.5,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      />
      <View style={{ margin: width * 0.05, paddingTop: 10 }}>
        <Text style={{ fontSize: width * 0.06, color: "blue" }}>
          {detail.name}
        </Text>
      </View>
      <View style={{ width: "90%", paddingBottom: 10 }}>
        <Text style={{ fontSize: 18 }}>{detail.description}</Text>
      </View>
      <View style={{}}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <View style={styles.detailscont}>
            <Foundation
              name="male-female"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
            <View style={{ marginHorizontal: 20 }}>
              <Text>Age</Text>
              <Text>{detail.age}</Text>
            </View>
          </View>
          <View style={[styles.detailscont, { marginRight: "25%" }]}>
            <FontAwesome5
              name="dog"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
            <View style={{ marginHorizontal: 20 }}>
              <Text>Breed</Text>
              <Text>{detail.breed}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.detailscont}>
            <Foundation
              name={detail.sex == "Male" ? "male-symbol" : "female-symbol"}
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
            <View style={{ marginHorizontal: 20 }}>
              <Text>Gender</Text>
              <Text>{detail.sex}</Text>
            </View>
          </View>
          <View style={[styles.detailscont]}>
            <FontAwesome5
              name="weight"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
            <View style={{ marginHorizontal: 20 }}>
              <Text>Weight</Text>
              <Text>{detail.Weight}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  detailscont: {
    elevation: 1,
    borderWidth: 0.1,
    borderColor: "rgba(0,0,0,0.1)",
    width: "30%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default MobStyle;
