import { View, Text, Image } from "react-native";
import React from "react";
import DiscountBadge from "@/components/DiscountBadge";

const RestaurantCard = ({
  title,
  image,
  rating,
  deliveryTime,
  totalRatings,
  distance,
}: any) => {
  return (
    <View
      style={{
        marginRight: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#344054",
      }}
    >
      <View>
        <Image
          source={image}
          style={{
            width: 150,
            height: 100,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          resizeMode="cover"
        />
        <View style={{ position: "absolute", top: 10, left: 10 }}>
          <DiscountBadge text="35% OFF" />
        </View>
      </View>
      <View style={{ padding: 10, gap: 5 }}>
        <Text
          style={{
            fontFamily: "Manrope-Medium",
            fontSize: 10,
            color: "#FFFFFF",
          }}
        >
          {distance}
          {" km."}
          {deliveryTime}
          {" min"}
        </Text>
        <View gap={5}>
          <Text
            style={{
              fontFamily: "Manrope-Bold",
              color: "#FFFFFF",
              fontSize: 12,
            }}
            numberOfLines={1}
          >
            {title}
          </Text>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Image
              source={require("@/assets/images/star.png")}
              style={{ width: 16, height: 16 }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontFamily: "Manrope-Medium",
                color: "#FFFFFF",
                fontSize: 10,
              }}
            >
              {rating}
            </Text>
            <Text
              style={{
                fontFamily: "Manrope-Medium",
                color: "#FFFFFF",
                fontSize: 10,
              }}
            >
              {totalRatings} Ratings
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RestaurantCard;
