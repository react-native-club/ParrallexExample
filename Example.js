import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import CachedImage from 'react-native-cached-image';
import VolumeDrawerSection from './Section';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(61, 28, 96)',
  },
  coverContainer: {
    position: 'relative',
    height: 331,
    zIndex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    overflow: 'hidden',
  },
  backgroundImage: {
    zIndex: 0,
    position: 'absolute',
    opacity: 0.3,
    borderWidth: 1,
    top: 0,
    left: 0,
    right: 0,
    height: 1000,
  },
  coverImage: {
    zIndex: 1,
    width: 203,
    height: 203,
  },
  content: {
    paddingTop: 31,
    paddingLeft: 64,
    paddingRight: 44,
  },
  contentSectionHeader: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 24,
    color: 'white',
    marginBottom: 19,
  },
  title: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 38,
    lineHeight: 44,
    color: 'white',
    alignSelf: 'flex-start',
  },
  composer: {
    fontFamily: 'AvenirNext-Medium',
    fontSize: 24,
    lineHeight: 28,
    color: 'white',
    alignSelf: 'flex-start',
  },
  dividerStyle: {
    marginTop: 64,
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  gotToVolumeButton: {
    flex: 1,
    height: 28,
    marginTop: 16,
  },
});


const Example = () => {

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.coverContainer} >
          <CachedImage
            style={styles.backgroundImage}
            source={{ uri: `https://placekitten.com/414/350` }}
            blurRadius={33}
          />
          <CachedImage
            style={styles.coverImage}
            source={{ uri: `https://placekitten.com/414/350` }}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.composer}>Composer</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Button onPress={() => {}} title="GO TO VOLUME PAGE" />
            </View>
          </View>
          <VolumeDrawerSection
            header="Masterclasses"
          />
          <VolumeDrawerSection
            header="Pieces"
          />
          <VolumeDrawerSection
            header="Further readings"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Example;
