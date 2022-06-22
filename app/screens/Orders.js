import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";

import theme from "../config/theme";
import { getFontSize, Label12 } from "../components/AppText";
import Divider from "./../components/Divider";
import ImageWithDescription from "../components/ImageWithDescription";
import ScreenHeader from "../components/ScreenHeader";
import Button from "./../components/Button";
import routes from "../navigation/routes";
import OrderRow from "../components/OrderRow";

const items = [
  { name: "Beef Burger", quantity: "1", price: "$16" },
  { name: "Classic Burger", quantity: "3", price: "$11" },
  { name: "Cheese Chicken Burger", quantity: "1", price: "$19" },
  { name: "Chicken Legs Basket", quantity: "2", price: "$23" },
  { name: "French Fries Large", quantity: "4", price: "$08" },
];

function Orders({ navigation }) {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <StatusBar barStyle={"dark-content"} />
        <View style={{ paddingHorizontal: wp(4) }}>
          <ScreenHeader
            title="My Orders"
            navIcon={true}
            onNavIconPress={handleBack}
          />
          <ImageWithDescription
            image={require("./../assets/burger.jpg")}
            address="No 03, 4th Lane, Newyork"
          />
        </View>
        <View style={styles.orderDetails}>
          {items.map((i, index) => (
            <View key={i.price + index} style={{ paddingHorizontal: wp(4) }}>
              <View style={styles.orderItemContainer}>
                <Label12>{`${i.name} x${i.quantity}`}</Label12>
                <Label12 style={{ fontWeight: "bold" }}>{`${i.price}`}</Label12>
              </View>
              {items.length !== index + 1 && (
                <Divider styles={styles.divider} />
              )}
            </View>
          ))}
        </View>
        <View style={{ paddingHorizontal: wp(4) }}>
          <OrderRow
            leftItem="Delivery Instructions"
            leftItemStyles={{ fontWeight: "bold" }}
            rightItem="Add Notes"
            rightItemStyles={{
              fontWeight: "bold",
              color: theme.custom.orange,
            }}
            Icon={
              <Entypo
                style={{ fontWeight: "bold", marginRight: wp(1) }}
                name="plus"
                size={14}
                color={theme.custom.orange}
              />
            }
          />
          <Divider styles={styles.divider} />
          <OrderRow
            leftItem="Sub Total"
            rightItem="$68"
            rightItemStyles={{ color: theme.custom.orange }}
          />
          <View style={{ marginVertical: wp(1.5) }}></View>
          <OrderRow
            leftItem="Delivery Cost"
            rightItem="$2"
            rightItemStyles={{ color: theme.custom.orange }}
          />
          <Divider styles={styles.divider} />
          <OrderRow
            leftItem="Total"
            rightItem="$70"
            rightItemStyles={{ fontSize: wp(5), color: theme.custom.orange }}
          />
          <View style={{ marginVertical: wp(3) }}>
            <Button
              title="Checkout"
              fontSize={getFontSize(16)}
              bgColor={theme.custom.orange}
              onPress={() => navigation.navigate(routes.CHECKOUT)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Orders;

const styles = StyleSheet.create({
  container: {
    marginTop: wp(4),
    flex: 1,
  },
  orderItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  divider: {
    marginVertical: wp(4),
    backgroundColor: "#a6a6a6",
    borderWidth: 0.2,
  },
  orderDetails: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingVertical: wp(5),
    marginVertical: wp(5),
  },
});
