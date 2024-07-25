import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../apis/categories";
//import { ScrollView } from "react-native-gesture-handler";

const CategoryList = () => {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });
  console.log(data);
  //
  const dataList = data?.map((category, index) => {
    return (
      <CategoryCard
        name={category.name}
        index={index}
        key={index}
        link={category.image}
      />
    );
  });
  return (
    //insted of <view> there is <scrollView> to teach the category list here to be scroll,
    <ScrollView
      horizontal //by defult its vertical so i choose "Horizantal"
      pagingEnabled // to make categories list scroll throw pages
      contentContainerStyle={{
        height: 140,
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        paddingHorizontal: 5,
        //backgroundColor: "blue",
      }}
    >
      {dataList}
    </ScrollView>
  );
};

export default CategoryList;
