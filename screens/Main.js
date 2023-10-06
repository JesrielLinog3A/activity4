import { View, Text , Image, StyleSheet} from 'react-native'
import React, {useRef, useEffect} from 'react'
import LottieView from 'lottie-react-native';

export default function Main() {
  const animation = useRef(null);
  useEffect(() => {
   
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.head}>
      <Image
          style={styles.image}
          source={require("../src/menu.png")}
          resizeMode="stretch"
        />
        <View style={styles.space}></View>
          <Image
          style={styles.image}
          source={require("../src/prof.png")}
          resizeMode="stretch"
        />
      </View>

     <View style={styles.body}>
<Text style={styles.text}>Components</Text>
<Text style={styles.texts}>React Native</Text>
<LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
 
        source={require('../assets/anim.json')}
      />
     </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
   flex: 1,

  },
  image:{
    height: 40,
    width: 40
  },
  head:{
    flexDirection: 'row',
   alignItems: 'center',
   paddingHorizontal: 10,
   paddingVertical: 10
  },
  space:{
    flex: 1
  },
  body:{
    padding: 5
  },
  text:{
    fontWeight: 'bold',
    fontSize: 20
  },
  texts:{
    fontSize: 15
  }
});