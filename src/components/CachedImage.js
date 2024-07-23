import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import { Image } from "react-native";
import { Asset } from "expo-asset";
const CachedImage = ({ uri }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const loadAsset = () => {
      const asset = Asset.fromURI(uri);
      asset.downloadAsync();
      setImage(asset);
    };

    loadAsset();
  }, [uri]);

  return image ? (
    <Image
      source={{ uri: image.localUri || image.uri }}
      style={{ width: 100, height: 100 }}
    />
  ) : null;
};

export default CachedImage;
