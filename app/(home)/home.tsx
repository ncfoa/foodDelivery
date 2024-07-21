import {
  SafeAreaView,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import Address from "@/components/Address";
import React from "react";
import Search from "@/components/Search";
import BetweenSectionSeparator from "@/components/BetweenSectionSeparator";
import Category from "@/components/Category";
import CustomButton from "@/components/CustomButton";
import RestaurantCard from "@/components/RestaurantCard";
import PromoCard from "@/components/PromoCard";

const home = () => {
  const restaurantData = [
    {
      title: "Vegan Fast Food",
      image: require("@/assets/images/restaurant.jpg"),
      distance: "2.5",
      deliveryTime: "25",
      totalRatings: "200",
      rating: "4.5",
    },
    {
      title: "Italian Fast Food",
      image: require("@/assets/images/restaurant.jpg"),
      distance: "2.5",
      deliveryTime: "25",
      totalRatings: "200",
      rating: "4.5",
    },
    {
      title: "Chinese Fast Food",
      image: require("@/assets/images/restaurant.jpg"),
      distance: "2.5",
      deliveryTime: "25",
      totalRatings: "200",
      rating: "4.5",
    },
    {
      title: "Mexican Fast Food",
      image: require("@/assets/images/restaurant.jpg"),
      distance: "2.5",
      deliveryTime: "25",
      totalRatings: "200",
      rating: "4.5",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1D2939" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 16, height: 200 }}>
          <View
            style={{
              paddingVertical: 16,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                gap: 12,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  fontFamily: "Manrope-Medium",
                }}
              >
                Your Location
              </Text>
              <Address />
            </View>
            <Image source={require("@/assets/images/notification.png")} />
          </View>
          <Search />
        </View>
        <View style={{ position: "relative", left: 16 }}>
          <Image source={require("@/assets/images/Wallet.png")} />
        </View>

        {/* Categories */}

        <View style={{ paddingVertical: 16 }}>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              fontFamily: "Manrope-Medium",
              paddingHorizontal: 16,
            }}
          >
            Categories
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 16,
              marginTop: 16,
            }}
          >
            <Category
              title="Nearest"
              image={require("@/assets/images/nearest.png")}
            />
            <Category
              title="Promo"
              image={require("@/assets/images/promo.png")}
            />
            <Category
              title="Best Seller"
              image={require("@/assets/images/bestseller.png")}
            />
            <Category title="New" image={require("@/assets/images/new.png")} />
          </View>
        </View>

        <BetweenSectionSeparator height={10} />

        {/* Top Rated */}

        <View style={{ padding: 16 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <View>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  fontFamily: "Manrope-Medium",
                }}
              >
                Top Rated
              </Text>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 12,
                  fontFamily: "Manrope-Medium",
                }}
              >
                We choose delicious and close to you
              </Text>
            </View>
            <CustomButton
              text="See All"
              onPress={() => {}}
              style={{
                backgroundColor: "#1D2939",
                color: "#EC9B3B",
                borderWidth: 1,
                borderColor: "#EC9B3B",
                paddingVertical: 4,
                paddingHorizontal: 16,
              }}
            />
          </View>

          <FlatList
            horizontal
            data={restaurantData}
            renderItem={({ item }) => <RestaurantCard {...item} />}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 16 }}
            keyExtractor={(item) => item.title}
          />
        </View>

        <BetweenSectionSeparator height={10} />

        {/* Promo */}
        <View style={{ padding: 16 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <View>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  fontFamily: "Manrope-Medium",
                }}
              >
                Payday Promo 12:00 - 21:00
              </Text>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 12,
                  fontFamily: "Manrope-Medium",
                }}
              >
                Order with fudlet and treat yourself
              </Text>
            </View>
            <CustomButton
              text="See All"
              onPress={() => {}}
              style={{
                backgroundColor: "#1D2939",
                color: "#EC9B3B",
                borderWidth: 1,
                borderColor: "#EC9B3B",
                paddingVertical: 4,
                paddingHorizontal: 16,
              }}
            />
          </View>

          <PromoCard
            title="krasty krab, Bikini Bottom"
            image={require("@/assets/images/restaurant.jpg")}
            distance="2.5"
            rating="4.5"
          />
          <PromoCard
            title="Warteg Mak Erok, Malang Salatan"
            image={require("@/assets/images/restaurant.jpg")}
            distance="2.5"
            rating="4.5"
          />
          <PromoCard
            title="Amisterdam, Joyo Agung"
            image={require("@/assets/images/restaurant.jpg")}
            distance="2.5"
            rating="4.5"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
