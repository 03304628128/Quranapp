import React, {useEffect, useState, useRef, useCallback} from 'react';
import {StyleSheet, ScrollView, View, Dimensions, Text ,Image} from 'react-native';
import {ActivityIndicator} from 'react-native';


const HomeCarousel = () => {
  const [dimension, setDimension] = useState(Dimensions.get('window'));
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollRef = useRef();
  let intervalId = null;

  const onChange = () => {
    setDimension(Dimensions.get('window'));
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
    //   Dimensions.removeEventListener('change', onChange);
    };
  });

  const onSlideChange = useCallback(() => {
    // Calculate newIndex here and use it to update your state and to scroll to the new slide
    const newIndex =
      selectedIndex === carouselImages.length - 1 ? 0 : selectedIndex + 1;

    setSelectedIndex(newIndex);

    scrollRef?.current?.scrollTo({
      animated: true,
      y: 0,
      x: dimension.width * newIndex,
    });
  }, [selectedIndex]);

  const startInterval = useCallback(() => {
    intervalId = setInterval(onSlideChange, 3000);
  }, [onSlideChange]);

  useEffect(() => {
    startInterval();

    return () => {
      // Clear the interval when component unmounts, otherwise you could have memory leaks
      clearInterval(intervalId);
    };
  }, [onSlideChange]);

  const onTouchStart = () => {
    // As soon as the user touches the slide, stop the automatic sliding
    clearInterval(intervalId);
  };

  const onTouchEnd = () => {
    // As soon as the user stops touching the slide, releases it, start the automatic sliding again
    startInterval();
  };

  const carouselImages = [
        require("../Images/img2.jpg") ,   
        require("../Images/img3.jpg") ,   
        require("../Images/img4.jpg") ,   
];

  const setIndex = event => {
    let viewSize = event.nativeEvent.layoutMeasurement.width;
    let contentOffset = event.nativeEvent.contentOffset.x;
    let carouselIndex = Math.floor(contentOffset / viewSize);
    setSelectedIndex(carouselIndex);
  };

  return (
    <View style={{width: dimension.width}}>
      <ScrollView
      style={{padding:0,margin:0}}
        horizontal
        ref={scrollRef}
        onMomentumScrollEnd={setIndex}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        pagingEnabled>
        {carouselImages.map((value, key) => (
          <Image
            source={value} key={key}
            style={{width: dimension?.width-10, height: 200, resizeMode: 'cover',marginRight:10,borderRadius:10}}
            PlaceholderContent={<ActivityIndicator />}
          />
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
        }}>
        {carouselImages.map((val, key) => (
          <Text
            key={key}
            style={key === selectedIndex ? {color: 'white'} : {color: '#888'}}>
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeCarousel;