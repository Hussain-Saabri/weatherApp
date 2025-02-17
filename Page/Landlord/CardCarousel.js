import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Animated, Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.75;
const CARD_HEIGHT = 220;
const SPACING = 15;
const ITEM_SIZE = CARD_WIDTH + SPACING * 2;

const cards = [
  { id: '1', title: 'Pending Verification', bg: require('../../Pubic/LandlordImage/photo.jpg'), screen: 'PendingVerificationScreen' },
  { id: '2', title: 'Total Tenant', bg: require('../../Pubic/LandlordImage/photo2.jpg'), screen: 'TenantStatusScreen' },
  { id: '3', title: 'Completed Verification', bg: require('../../Pubic/LandlordImage/photo3.jpg'), screen: 'VerifiedTenantsScreen' },
];

// Create Infinite Array
const infiniteCards = [...cards, ...cards, ...cards];

const CardCarousel = () => {
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const middleIndex = cards.length;

  const handleScroll = (event) => {
    const position = event.nativeEvent.contentOffset.x;
    const totalWidth = ITEM_SIZE * cards.length;

    if (position >= totalWidth * 2) {
      flatListRef.current.scrollToOffset({ offset: totalWidth, animated: false });
    } else if (position <= 0) {
      flatListRef.current.scrollToOffset({ offset: totalWidth, animated: false });
    }
  };

  const onCardPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.carouselContainer}>
      <Animated.FlatList
        ref={flatListRef}
        data={infiniteCards}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_SIZE}
        decelerationRate="fast"
        bounces={false}
        initialScrollIndex={middleIndex}
        getItemLayout={(data, index) => ({
          length: ITEM_SIZE,
          offset: ITEM_SIZE * index,
          index,
        })}
        contentContainerStyle={{ paddingHorizontal: (width - CARD_WIDTH) / 2 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true, listener: handleScroll }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE,
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.85, 1, 0.85],
          });

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [20, -10, 20],
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6],
          });

          return (
            <TouchableOpacity onPress={() => onCardPress(item.screen)} activeOpacity={0.8}>
              <Animated.View
                style={[
                  styles.card,
                  {
                    transform: [{ scale }, { translateY }],
                    opacity,
                  },
                ]}
              >
                <ImageBackground
                  source={item.bg}
                  style={styles.cardBackground}
                  imageStyle={{ borderRadius: 20 }}
                >
                  <View style={styles.overlay}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                  </View>
                </ImageBackground>
              </Animated.View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: CARD_HEIGHT + 50,
    alignItems: "center",
    marginTop: 20,
    // marginBottom: 20,
    
  
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginHorizontal: SPACING,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
   
  },
  cardBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CardCarousel;


// import React, { useRef } from 'react';
// import { Animated, Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = width * 0.75;
// const CARD_HEIGHT = 220;
// const SPACING = 15;
// const ITEM_SIZE = CARD_WIDTH + SPACING * 2;

// const cards = [
//   { id: '1', title: 'Pending Verification', bg: require('../../Pubic/LandlordImage/photo.jpg') },
//   { id: '2', title: 'Total Tenant', bg: require('../../Pubic/LandlordImage/photo2.jpg') },
//   { id: '3', title: 'Completed Verification', bg: require('../../Pubic/LandlordImage/photo3.jpg') },
// ];

// // Create Infinite Array
// const infiniteCards = [...cards, ...cards, ...cards];

// const CardCarousel = () => {
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const flatListRef = useRef(null);

//   // Calculate middle position for infinite loop effect
//   const middleIndex = cards.length;

//   const handleScroll = (event) => {
//     const position = event.nativeEvent.contentOffset.x;
//     const totalWidth = ITEM_SIZE * cards.length;

//     // Check if we reached the start or end, then jump to the middle set
//     if (position >= totalWidth * 2) {
//       flatListRef.current.scrollToOffset({ offset: totalWidth, animated: false });
//     } else if (position <= 0) {
//       flatListRef.current.scrollToOffset({ offset: totalWidth, animated: false });
//     }
//   };

//   // Handle Card Press
//   const onCardPress = (title) => {
//     alert(`You pressed on ${title}`);
//   };

//   return (
//     <View style={styles.carouselContainer}>
//       <Animated.FlatList
//         ref={flatListRef}
//         data={infiniteCards}
//         keyExtractor={(item, index) => index.toString()}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         snapToInterval={ITEM_SIZE}
//         decelerationRate="fast"
//         bounces={false}
//         initialScrollIndex={middleIndex}
//         getItemLayout={(data, index) => ({
//           length: ITEM_SIZE,
//           offset: ITEM_SIZE * index,
//           index,
//         })}
//         contentContainerStyle={{ paddingHorizontal: (width - CARD_WIDTH) / 2 }}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: true, listener: handleScroll }
//         )}
//         renderItem={({ item, index }) => {
//           const inputRange = [
//             (index - 1) * ITEM_SIZE,
//             index * ITEM_SIZE,
//             (index + 1) * ITEM_SIZE,
//           ];

//           const scale = scrollX.interpolate({
//             inputRange,
//             outputRange: [0.85, 1, 0.85],
//           });

//           const translateY = scrollX.interpolate({
//             inputRange,
//             outputRange: [20, -10, 20],
//           });

//           const opacity = scrollX.interpolate({
//             inputRange,
//             outputRange: [0.6, 1, 0.6],
//           });

//           return (
//             <TouchableOpacity onPress={() => onCardPress(item.title)} activeOpacity={0.8}>
//               <Animated.View
//                 style={[
//                   styles.card,
//                   {
//                     transform: [{ scale }, { translateY }],
//                     opacity,
//                   },
//                 ]}
//               >
//                 <ImageBackground
//                   source={item.bg}
//                   style={styles.cardBackground}
//                   imageStyle={{ borderRadius: 20 }}
//                 >
//                   <View style={styles.overlay}>
//                     <Text style={styles.cardTitle}>{item.title}</Text>
//                   </View>
//                 </ImageBackground>
//               </Animated.View>
//             </TouchableOpacity>
//           );
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   carouselContainer: {
//     height: CARD_HEIGHT + 50,
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 260,
//   },
//   card: {
//     width: CARD_WIDTH,
//     height: CARD_HEIGHT,
//     marginHorizontal: SPACING,
//     borderRadius: 20,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 20,
//     shadowOffset: { width: 0, height: 10 },
//   },
//   cardBackground: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 20,
//     overflow: 'hidden',
//     justifyContent: 'flex-end',
//   },
//   overlay: {
//     backgroundColor: 'rgba(0, 0, 0, 0.4)',
//     padding: 15,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//   },
//   cardTitle: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default CardCarousel;

// import React, { useRef } from 'react';
// import { Animated, Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = width * 0.75;
// const CARD_HEIGHT = 220;
// const SPACING = 15;
// const ITEM_SIZE = CARD_WIDTH + SPACING * 2;

// const cards = [
//   { id: '1', title: 'Pending Verification', bg: require('../../Pubic/LandlordImage/photo.jpg') },
//   { id: '2', title: 'Total Tenant', bg: require('../../Pubic/LandlordImage/photo2.jpg') },
//   { id: '3', title: 'Completed Verification', bg: require('../../Pubic/LandlordImage/photo3.jpg') },
// ];

// // Create Infinite Array
// const infiniteCards = [...cards, ...cards, ...cards];

// const CardCarousel = () => {
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const flatListRef = useRef(null);

//   // Calculate middle position for infinite loop effect
//   const middleIndex = cards.length;

//   const handleScroll = (event) => {
//     const position = event.nativeEvent.contentOffset.x;
//     const totalWidth = ITEM_SIZE * cards.length;

//     // Check if we reached the start or end, then jump to the middle set
//     if (position >= totalWidth * 2) {
//       flatListRef.current.scrollToOffset({ offset: totalWidth, animated: false });
//     } else if (position <= 0) {
//       flatListRef.current.scrollToOffset({ offset: totalWidth, animated: false });
//     }
//   };

//   return (
//     <View style={styles.carouselContainer}>
//       <Animated.FlatList
//         ref={flatListRef}
//         data={infiniteCards}
//         keyExtractor={(item, index) => index.toString()}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         snapToInterval={ITEM_SIZE}
//         decelerationRate="fast"
//         bounces={false}
//         initialScrollIndex={middleIndex}
//         getItemLayout={(data, index) => ({
//           length: ITEM_SIZE,
//           offset: ITEM_SIZE * index,
//           index,
//         })}
//         contentContainerStyle={{ paddingHorizontal: (width - CARD_WIDTH) / 2 }}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: true, listener: handleScroll }
//         )}
//         renderItem={({ item, index }) => {
//           const inputRange = [
//             (index - 1) * ITEM_SIZE,
//             index * ITEM_SIZE,
//             (index + 1) * ITEM_SIZE,
//           ];

//           const scale = scrollX.interpolate({
//             inputRange,
//             outputRange: [0.85, 1, 0.85],
//           });

//           const translateY = scrollX.interpolate({
//             inputRange,
//             outputRange: [20, -10, 20],
//           });

//           const opacity = scrollX.interpolate({
//             inputRange,
//             outputRange: [0.6, 1, 0.6],
//           });

//           return (
//             <Animated.View
//               style={[
//                 styles.card,
//                 {
//                   transform: [{ scale }, { translateY }],
//                   opacity,
//                 },
//               ]}
//             >
//               <ImageBackground
//                 source={item.bg}
//                 style={styles.cardBackground}
//                 imageStyle={{ borderRadius: 20 }}
//               >
//                 <View style={styles.overlay}>
//                   <Text style={styles.cardTitle}>{item.title}</Text>
//                 </View>
//               </ImageBackground>
//             </Animated.View>
//           );
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   carouselContainer: {
//     height: CARD_HEIGHT + 50,
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 260,
//   },
//   card: {
//     width: CARD_WIDTH,
//     height: CARD_HEIGHT,
//     marginHorizontal: SPACING,
//     borderRadius: 20,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 20,
//     shadowOffset: { width: 0, height: 10 },
//   },
//   cardBackground: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 20,
//     overflow: 'hidden',
//     justifyContent: 'flex-end',
//   },
//   overlay: {
//     backgroundColor: 'rgba(0, 0, 0, 0.4)',
//     padding: 15,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//   },
//   cardTitle: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default CardCarousel;


