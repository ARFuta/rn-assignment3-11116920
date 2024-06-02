import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,Image} from 'react-native';
import Greeting from './components/Greeting';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import OngoingTask from './components/OngoingTask';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Greeting />
      <ScrollView>
      <View style={styles.searchContainer}>
        <View style={styles.search}>
        <SearchBar  />
        </View>
      <View style={styles.settings}>
      <Image style={styles.settingsImage} source={require('./images/settings.jpeg')}  />
      </View>
      </View>
      <Categories />
      <OngoingTask />
      <StatusBar style="auto" />
    
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
    
  },
  searchContainer:{
    display:'flex',
    flexDirection:'row',
    columnGap:15,
  }
  ,search:{
    flex:4
  },
  settings:{
    flex:1,
    borderRadius:10
  },
  settingsImage:{
    resizeMode:'contain',
    height:50,
    marginTop:30,
    borderRadius:10,
    marginLeft: -30
   
    
  }
});
