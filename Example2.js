
import React, {Component} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CachedImage from 'react-native-cached-image';
export default class Example2 extends Component {

  constructor(props) {
  super(props);

  this.state = {
    scrollY: new Animated.Value(0),
  };
}

  _renderScrollViewContent() {
    const data = Array.from({length: 30});
    return (
      <View style={styles.scrollViewContent}>
        {data.map((_, i) =>
          <View key={i} style={styles.row}>
            <Text>{i}</Text>
          </View>
        )}
      </View>
    );
  }

  // handleScroll = (e) => {
  //   console.log(event.nativeEvent.contentOffset.y);
  //   // this.scrollview.scrollTo({x: 0; y: 0; animated: true})
  //   Animated.event(
  //     [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
  //   )
  // }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [300, 0],
    extrapolate: 'clamp',
  });
  console.log('scrolly', this.state.scrollY);
  // const headerHight2 = this.state.scrollY({y: 0})
    return (
      <View style={styles.fill}>
        <ScrollView
           ref={(scrollView) => { this._scrollView = scrollView; }}
          style={styles.fill}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )}
        >
          {this._renderScrollViewContent()}
        </ScrollView>
        <Animated.View style={[styles.header, {height: headerHeight}]}>

            <CachedImage
              style={styles.backgroundImage}
              source={{ uri: `https://placekitten.com/414/350` }}
              blurRadius={33}
            >
              <CachedImage
                style={styles.coverImage}
                source={{ uri: `https://placekitten.com/414/350` }}
              >
              </CachedImage>
            </CachedImage>


        </Animated.View>
      </View>
    );
  }
}
const HEADER_MAX_HEIGHT = 400;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverContainer: {
    // position: 'relative',
    height: 331,
    zIndex: 0,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'black',
    // overflow: 'hidden',

  },
  backgroundImage: {
    // zIndex: 0,
    // position: 'absolute',
    // opacity: 0.8,
    // top: 0,
    // left: 0,
    // right: 0,
    // // height: 1000,
    // overflow: 'hidden',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // width: null,
    height: 1000,
    resizeMode: 'cover'
  },
  coverImage: {
    alignSelf: 'center',
    zIndex: 1,
    width: 203,
    height: 203,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
  },
  bar: {
    marginTop: 28,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT,
  },
});
