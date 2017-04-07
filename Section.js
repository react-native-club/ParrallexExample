import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contentSectionHeader: {
    fontSize: 24,
    color: 'white',
    marginBottom: 19,
  },
  dividerStyle: {
    marginTop: 64,
  },
});


const Section = () => {

  const items = [{title: 'item1'},{title: 'item2'}]

  return (
    <View>
      <Text style={styles.contentSectionHeader}>Header</Text>
      {items.map((item, index) => (
      <View>
        <Text>{item.title}</Text>
      </View>))
      }
    </View>
  );
};

export default Section;
