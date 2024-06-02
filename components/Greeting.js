import { Image, StyleSheet, Text, View } from 'react-native';

export default function Greeting() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
      <Text style={styles.topText}>Hello, Futa</Text>
      <Text style={styles.bottomText}>14 tasks today</Text>
      </View>
      
      <View style={styles.right}>
        <Image source={require('../images/dp.png')} style={styles.dp} />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
    columnGap:20,
    marginTop:50,
    marginLeft:20,
    marginRight:20,
    
  },
  left:{
    flex:3,
    display:'flex',
  
  },
  topText:{
  
    fontSize:32,
    fontStyle:'bold'
  },
  bottomText:{
    fontSize:12, 
   
  },
  right:{
    flex:1,
    backgroundColor:'white',
    borderRadius:60,
    
  },
  dp:{
     flex:1,
     height:50,
     width:50,
    resizeMode:'contain',
    marginLeft:17,
    marginBottom:5
  }
});
