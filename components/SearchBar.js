import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Octicons name="search" size={24} color="black" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="gray"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
  },
  searchBar: {
    flex: 1,
    height: 49,
    color: 'black',
    paddingLeft: 40, // Add padding to make space for the icon
  },
  searchIcon: {
    position: 'absolute',
    left: 15,
    zIndex: 1,
  },
});
