import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Image, Text, View } from "native-base";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
const WebStyle = () => {
  const route = useRoute();
  const { detail } = route.params;
  return (
    <View>
      <View style={{ flexDirection: "row", margin: 20 }}>
        <Image
          source={{ uri: detail.img }}
          alt="Alternate Text"
          size="full"
          style={{ width: "50%", height: height * 0.8, borderRadius: 15 }}
        />
        <View style={{ marginHorizontal: width * 0.01, width: "50%" }}>
          <Text style={{ fontSize: width * 0.04, color: "blue" }}>
            {detail.name}
          </Text>
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
              <View style={[styles.detailscont, { marginRight: "25%" }]}>
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
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <TouchableOpacity
              style={{
                paddingVertical: 18,
                width: "30%",
                backgroundColor: "blue",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
              }}
            >
              <Text style={{ color: "white" }}>Adopt Me</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 18,
                width: "10%",
                backgroundColor: "blue",
                marginLeft: "5%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
            >
              <Entypo name="paper-plane" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
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
  },
  icons: {},
});
export default WebStyle;
