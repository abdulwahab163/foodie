import React from "react";
import { View, FlatList } from "react-native";


const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-311ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-11fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-11",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-11145571e29d72",
    title: "Third Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd1191aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-47111f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "3ac68afc-c605-48d311-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-11471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

function AppFlatList({ horizontal, Component }) {
  const renderItem = ({ item }) => Component;
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={DATA}
        horizontal={horizontal}
        renderItem={renderItem}
      />
    </View>
  );
}

export default AppFlatList;
