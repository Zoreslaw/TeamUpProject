import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { useGetMatch } from '@/hooks/useGetMatch';
import { useAuth } from '@/hooks/useAuth';
// Example placeholders for icons
function TopLeftIcon() {
  return <Text style={{ color: '#fff', fontSize: 20 }}>≡</Text>;
}
function TopRightIcon() {
  return <Text style={{ color: '#fff', fontSize: 20 }}>•••</Text>;
}
function GameControllerIcon() {
  return <Text style={{ color: '#A100FF', fontSize: 28 }}>🎮</Text>;
}
function DislikeIcon() {
  return <Text style={{ color: '#FF5E51', fontSize: 20 }}>✕</Text>;
}
function SuperLikeIcon() {
  return <Text style={{ color: '#07A6FF', fontSize: 20 }}>★</Text>;
}
function LikeIcon() {
  return <Text style={{ color: '#00D387', fontSize: 20 }}>✔</Text>;
}

// Example user data
// const SAMPLE_CARDS = [
//   {
//     id: '1',
//     name: 'z0r1k',
//     bio: 'User BIO',
//     favoriteGames: 'CS 2\nRust\nBattlefield 1',
//     image: require('@/assets/sample1.webp'), // replace with your local image
//   },
//   {
//     id: '2',
//     name: 'Kompot',
//     bio: 'Loves mobile gaming',
//     favoriteGames: 'Clash Royale\nPUBG\nGenshin Impact',
//     image: require('@/assets/sample2.jpg'),
//   },
//   {
//     id: '3',
//     name: 'Alice',
//     bio: 'Casual gamer',
//     favoriteGames: 'Stardew Valley\nOvercooked\nMinecraft',
//     image: require('@/assets/sample3.webp'),
//   },
// ];



export default function SwipeScreen() {
  const { user } = useAuth();
  const { cards } = useGetMatch(user?.uid ?? '');


  const handleSwipedLeft = (cardIndex: number) => {
    console.log('Swiped left (dislike):', cards?.[cardIndex].user.displayName);
  };
  const handleSwipedRight = (cardIndex: number) => {
    console.log('Swiped right (like):', cards?.[cardIndex].user.displayName);
  };
  const handleSwipedTop = (cardIndex: number) => {
    console.log('Swiped top (super-like):', cards?.[cardIndex].user.displayName);
  };


  const renderCard = (card: any) => {
    if (!card?.user) return <View />;
    return (
      <View style={styles.cardContainer}>
        {/* Background image with gradient overlay */}
        <ImageBackground
          source={{ uri: card.user.photoURL }}
          style={styles.cardImage}
          imageStyle={{ borderRadius: 24 }}
        >
          {/* Dark gradient overlay or blur could go here if you want */}
          <View style={styles.overlay} />

          {/* Card text content */}
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{card.user.displayName}</Text>

            {/* "User BIO" pill in top-right corner */}
            <View style={styles.bioBadge}>
              <Text style={styles.bioBadgeText}>{card.user.bio}</Text>
              <View style={styles.infoIcon} />
            </View>

            <Text style={styles.favGamesLabel}>Favorite games:</Text>
            <Text style={styles.favGamesValue}>{card.user.favoriteGames}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Status bar area is omitted for brevity */}
      
      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.topLeftBtn}>
          <TopLeftIcon />
        </TouchableOpacity>
        <View style={styles.topCenterSpace}>
          <GameControllerIcon />
        </View>
        <TouchableOpacity style={styles.topRightBtn}>
          <TopRightIcon />
        </TouchableOpacity>
      </View>

      {/* The deck swiper area */}
      <View style={styles.swiperContainer}>
        <Swiper
          cards={cards ?? []}
          renderCard={renderCard}
          onSwipedLeft={handleSwipedLeft}
          onSwipedRight={handleSwipedRight}
          onSwipedTop={handleSwipedTop}
          backgroundColor="transparent"
          cardVerticalMargin={0}
          cardHorizontalMargin={0}
          stackSize={2}
          useViewOverflow={false}
          horizontalSwipe={true}
          verticalSwipe={false}
        />
      </View>

      {/* Bottom bar with 3 icons */}
      <View style={styles.bottomBar}>
        {/* Dislike */}
        <TouchableOpacity style={[styles.circleButton, { borderColor: '#FF5E51' }]}>
          <DislikeIcon />
        </TouchableOpacity>

        {/* Super Like */}
        <TouchableOpacity style={[styles.smallCircleButton, { borderColor: '#07A6FF' }]}>
          <SuperLikeIcon />
        </TouchableOpacity>

        {/* Like */}
        <TouchableOpacity style={[styles.circleButton, { borderColor: '#00D387' }]}>
          <LikeIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // main background
  },
  topBar: {
    flexDirection: 'row',
    height: 52,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  topLeftBtn: {
    width: 32,
    height: 32,
    borderWidth: 1.5,
    borderColor: '#E6E6E6',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topCenterSpace: {
    // center for the game controller
  },
  topRightBtn: {
    width: 32,
    height: 32,
    borderWidth: 1.5,
    borderColor: '#E6E6E6',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swiperContainer: {
    flex: 1,
    paddingTop: 8,
    // marginBottom: 100, // leave space for bottom bar
  },
  cardContainer: {
    flex: 1,
    borderRadius: 24,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 24,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    // optional gradient overlay
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  textContainer: {
    padding: 16,
  },
  nameText: {
    fontSize: 32,
    fontWeight: '900',
    color: '#F7F7F7',
    marginBottom: 4,
  },
  bioBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(85, 0, 255, 0.4)',
    borderRadius: 40,
    paddingHorizontal: 10,
    paddingVertical: 4,
    width: 90,
    marginBottom: 10,
  },
  bioBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#F7F7F7',
  },
  infoIcon: {
    width: 19,
    height: 19,
    marginLeft: 4,
    borderRadius: 9,
    backgroundColor: 'rgba(51, 0, 153, 0.5)',
  },
  favGamesLabel: {
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontSize: 24,
    color: '#fff',
    marginTop: 8,
  },
  favGamesValue: {
    fontFamily: 'Righteous',
    fontSize: 16,
    lineHeight: 24,
    color: '#fff',
    marginTop: 4,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  circleButton: {
    width: 62,
    height: 62,
    borderWidth: 2,
    borderRadius: 31,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallCircleButton: {
    width: 42,
    height: 42,
    borderWidth: 2,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
