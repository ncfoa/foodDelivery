import { View, Text, Image } from "react-native";
import React from "react";
import DiscountBadge from "./DiscountBadge";

const PromoCard = ({ title, image, distance, rating }: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        borderBottomWidth: 1,
        borderColor: "#344054",
        paddingVertical: 10,
      }}
    >
      <Image
        source={image}
        style={{ width: 60, height: 60, borderRadius: 4 }}
      />
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 5,
          }}
        >
          <Text
            style={{
              color: "#EC9B3B",
              fontFamily: "Manrope-Bold",
              fontSize: 12,
            }}
          >
            Promo
          </Text>
          <DiscountBadge text="10% Off" />
        </View>
        <Text
          style={{ color: "#FFFFFF", fontFamily: "Manrope-Bold", fontSize: 16 }}
          numberOfLines={1}
        >
          {title}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: "Manrope-Medium",
              fontSize: 10,
            }}
          >
            {distance}
            {" km."}
          </Text>
          <Image
            source={require("@/assets/images/star.png")}
            resizeMode="contain"
            style={{ width: 12, height: 12 }}
          />
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: "Manrope-Medium",
              fontSize: 10,
            }}
          >
            {rating}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PromoCard;
