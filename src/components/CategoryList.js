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
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
// } from "react-native";
// import React, { useState } from "react";
// import CategoryCard from "./CategoryCard";
// import { useQuery } from "@tanstack/react-query";
// import { getAllCategories } from "../apis/categories";

// const CategoryList = () => {
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const { data } = useQuery({
//     queryKey: ["categories"],
//     queryFn: () => getAllCategories(),
//   });

//   // Filter categories based on the selected category
//   const filteredData = data?.filter(
//     (category) =>
//       selectedCategory === "all" || category.name === selectedCategory
//   );

//   // Render category buttons
//   const renderCategoryButtons = () => {
//     return data?.map((category, index) => (
//       <TouchableOpacity
//         key={index}
//         onPress={() => setSelectedCategory(category.name)}
//         style={[
//           styles.categoryButton,
//           category.name === selectedCategory && styles.selectedCategoryButton,
//         ]}
//       >
//         <Text style={styles.categoryButtonText}>{category.name}</Text>
//       </TouchableOpacity>
//     ));
//   };

//   // Render category cards
//   const renderCategoryCards = () => {
//     return filteredData.map((category, index) => (
//       <CategoryCard
//         name={category.name}
//         index={index}
//         key={index}
//         link={category.image}
//       />
//     ));
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={styles.categoryButtonContainer}>
//         {renderCategoryButtons()}
//       </View>
//       <ScrollView
//         horizontal
//         pagingEnabled
//         contentContainerStyle={styles.scrollViewStyle}
//       >
//         {renderCategoryCards()}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   scrollViewStyle: {
//     height: 140,
//     flexDirection: "row",
//     gap: 20,
//     alignItems: "center",
//     paddingHorizontal: 5,
//   },
//   categoryButtonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingVertical: 10,
//   },
//   categoryButton: {
//     padding: 10,
//     backgroundColor: "#ddd",
//     borderRadius: 20,
//   },
//   selectedCategoryButton: {
//     backgroundColor: "#555",
//   },
//   categoryButtonText: {
//     color: "white",
//   },
// });

// export default CategoryList;
