import { Platform, TouchableOpacity } from "react-native";
import React from "react";
import { Box, Input, View, Text } from "native-base";

const Rescue = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ marginTop: 30 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontWeight: "600", color: "blue" }}>
            PRAR
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "yellow",
              textAlign: "center",
            }}
          >
            PROTECT || RESCUE || ADOPT || REPEAT
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "500",
              color: "rgba(0,0,0,0.3)",
              textAlign: "center",
            }}
          >
            Saving one Animal Won't Change the World,But it will change the
            world for that one animal
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Box
          alignItems="flex-start"
          flexDirection={Platform.OS == "web" ? "row" : "column"}
          mx="3"
        >
          <Input
            mx="3"
            placeholder="First Name"
            w="75%"
            maxWidth="300px"
            marginRight={"16"}
          />
          <Input
            mx="3"
            placeholder="Last Name"
            w="75%"
            maxWidth="300px"
            marginTop={Platform.OS != "web" ? 10 : 0}
          />
        </Box>
        <Box
          alignItems="flex-start"
          flexDirection={Platform.OS == "web" ? "row" : "column"}
          mx="3"
          marginTop={10}
        >
          <Input
            mx="3"
            placeholder="Address"
            w="75%"
            maxWidth="300px"
            marginRight={"16"}
          />
          <Input
            mx="3"
            placeholder="Phone Number"
            w="75%"
            maxWidth="300px"
            marginTop={Platform.OS != "web" ? 10 : 0}
          />
        </Box>
      </View>
      <TouchableOpacity
        style={{
          paddingVertical: 18,
          marginTop: 20,
          width: "20%",
          backgroundColor: "blue",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white" }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Rescue;
