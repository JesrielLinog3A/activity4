import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image,StyleSheet } from 'react-native';
import { Avatar, Badge, Banner,Button  } from 'react-native-paper';

const CollapseComponent = () => {
  const [box1, setbox1] = useState(true);
  const [box2, setbox2] = useState(true);
  const [box3, setbox3] = useState(true);
  const [box4, setbox4] = useState(true);
  const [visible, setVisible] = React.useState(true);
  const box1Collapse = () => {
    setbox1(!box1);
  };
  

  const box2Collapse = () => {
    setbox2(!box2);
  };
  const box3Collapse = () => {
    setbox3(!box3);
  };
  const box4Collapse = () => {
    setbox4(!box4);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={box1Collapse}
      >
        <Text style={styles.buttonText}>
            Avatar
        </Text>
      </TouchableOpacity>
      {!box1 && (
        <View style={styles.content}>
          <Avatar.Icon size={54} icon="folder" />
          <Avatar.Image size={54} source={require('../assets/favicon.png')} />
          <Avatar.Text size={54} label="A" />
        </View>
      )}
       <TouchableOpacity
        style={styles.button}
        onPress={box2Collapse}
      >
        <Text style={styles.buttonText}>
         Badge
        </Text>
      </TouchableOpacity>
      {!box2 && (
        <View style={styles.content}>
            <Avatar.Icon size={54} icon="folder" />
         <Badge>3</Badge>
        </View>
      )}
       <TouchableOpacity
        style={styles.button}
        onPress={box3Collapse}
      >
        <Text style={styles.buttonText}>
     Banner
        </Text>
      </TouchableOpacity>
      {!box3 && (
        <View style={styles.contents}>
           <Banner
      visible={visible}
      actions={[
        {
          label: 'Fix it',
          onPress: () => setVisible(false),
        },
        {
          label: 'Learn more',
          onPress: () => setVisible(false),
        },
      ]}
      icon={({size}) => (
        <Image
          source={{
            uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
          }}
          style={{
            width: size,
            height: size,
          }}
        />
      )}>
      There was a problem processing a transaction on your credit card.
    </Banner>

        </View>
      )}
<TouchableOpacity
        style={styles.button}
        onPress={box1Collapse}
      >
        <Text style={styles.buttonText}>
            Avatar
        </Text>
      </TouchableOpacity>
      {!box1 && (
        <View style={styles.content}>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
  <Button icon="camera" mode="outlined" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
        </View>
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  content: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center'
  },
});

export default CollapseComponent;
