import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import * as Location from "expo-location";
import { Foundation, Ionicons, MaterialIcons } from "@expo/vector-icons";

import TextInput from "../components/TextInput";
import ScreenHeader from "../components/ScreenHeader";
import theme from "../config/theme";
import { Label13, Label14 } from "../components/AppText";

function Address({ navigation }) {
  const [location, setLocation] = useState({
    latitude: 33.6844,
    longitude: 73.0479,
    latitudeDelta: 0.0023,
    longitudeDelta: 0.0013,
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let region = await Location.getCurrentPositionAsync({});

      setLocation({
        ...location,
        latitude: region.coords.latitude,
        longitude: region.coords.longitude,
      });
    })();
  }, []);

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    (async () => {
      const obj = await Location.reverseGeocodeAsync({
        latitude: location.latitude,
        longitude: location.longitude,
      });
      console.log("loaction obj", obj);

      setTitle(obj[0].city), setDescription(obj[0].street);
    })();
  }, [location.longitude, location.latitude]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <StatusBar barStyle={"dark-content"} />

        <View style={{ paddingHorizontal: wp(4) }}>
          <ScreenHeader
            title="Change Address"
            navIcon={true}
            onNavIconPress={handleBack}
          />
        </View>

        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            region={{
              ...location,
            }}
            //onRegionChange={this.onRegionChange}
          >
            <Marker
              draggable
              coordinate={location}
              title={title}
              description={description}
              onDragEnd={(e) => {
                setLocation({
                  ...location,
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude,
                });
              }}
            >
              <Foundation name="marker" size={42} color={theme.custom.red} />
            </Marker>
          </MapView>
        </View>
        <View>
          <View style={styles.searchContainer}>
            <TextInput
              Icon={
                <Ionicons
                  name={"ios-search-sharp"}
                  size={wp(6)}
                  color={theme.custom.gray}
                  style={styles.searchIcon}
                />
              }
              autoCapitalize="none"
              name="search"
              placeholder="Search Address"
            />
            <TouchableOpacity style={styles.savedPlaces}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <MaterialIcons
                  name="stars"
                  size={24}
                  color={theme.custom.orange}
                  style={{ marginRight: wp(2) }}
                />
                <Label14 style={{ fontWeight: "bold" }}>
                  Choose a saved place
                </Label14>
              </View>
              <View>
                <Ionicons
                  name="chevron-forward"
                  size={24}
                  color={theme.custom.black}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Address;

const styles = StyleSheet.create({
  container: {
    marginTop: wp(4),

    flex: 1,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: wp("100%"),
    height: hp(60),
  },
  searchContainer: {
    marginTop: wp(3),
    paddingHorizontal: wp(6),
    marginBottom: wp(8),
  },
  savedPlaces: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: wp(1),
  },
});
