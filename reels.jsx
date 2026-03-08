import React, { useRef, useState } from "react";
import { View, FlatList, Dimensions } from "react-native";
// import Video from "react-native-video";

const { height } = Dimensions.get("window");

const reelsData = [
  { id: "1", videoUrl: "https://path-to-video1.mp4" },
  { id: "2", videoUrl: "https://path-to-video2.mp4" },
  { id: "3", videoUrl: "https://path-to-video3.mp4" },
];

const Reels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const onViewRef = useRef(({ viewableItems:any}) => {
  //   if (viewableItems.length > 0) setCurrentIndex(viewableItems[0].index);
  // });

  // const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 80 });

  return (
    <></>
    // <FlatList
    //   data={reelsData}
    //   keyExtractor={(item) => item.id}
    //   pagingEnabled
    //   showsVerticalScrollIndicator={false}
    //   onViewableItemsChanged={onViewRef.current}
    //   viewabilityConfig={viewConfigRef.current}
    //   renderItem={({ item, index }) => (
    //     <View style={{ height }}>
    //       <Video
    //         source={{ uri: item.videoUrl }}
    //         style={{ height, width: "100%" }}
    //         resizeMode="cover"
    //         repeat
    //         paused={index !== currentIndex} // only play the current video
    //       />
    //     </View>
    //   )}
    // />
  );
};

export default Reels;
