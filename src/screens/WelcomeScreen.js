import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f7f0ef" />

      <ImageBackground
        source={require('../assets/images/Vector-2.png')}
        resizeMode="contain"
        style={styles.image}>
        <View style={{flex: 0.6}}>
          <ImageBackground
            style={{flex: 1}}
            source={require('../assets/images/Vector-1.png')}
            resizeMode="cover">
            <Image
              resizeMode="contain"
              style={{
                width: 230,
                height: 350,
                position: 'absolute',
                top: 88,
                left: 58,
                transform: [{rotate: '2deg'}],
              }}
              source={require('../assets/images/grocerycustomer.png')}
            />
          </ImageBackground>
        </View>
        <View style={{flex: 0.4}}></View>
      </ImageBackground>
      <Image
        source={require('../assets/images/strawberryicon.png')}
        style={{position: 'absolute', top: 40, left: 45}}
      />
      <Image
        source={require('../assets/images/grapes.png')}
        style={{position: 'absolute', top: 350, left: 25}}
      />
      <Image
        source={require('../assets/images/banana.png')}
        style={{position: 'absolute', top: 450, left: 235}}
      />
      <View
        style={{
          // height: 100,
          width: 150,
          backgroundColor: '#eef0f1',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 5,
          borderRadius: 10,
          position: 'absolute',
          top: 300,
          left: 200,
        }}>
        <Image
          source={require('../assets/images/edumodal.png')}
          style={{
            width: 35,
            height: 35,
            borderRadius: 35 / 2,
            alignSelf: 'center',
          }}
        />
        <View>
          <Text style={{fontSize: 12, fontWeight: 'bold'}}>
            Delivery Complete
          </Text>
          <Text style={{fontSize: 9, fontWeight: 'normal'}}>
            Fastest Delivery at home
          </Text>
          <Image
            source={require('../assets/images/5stars.png')}
            style={{height: 20, width: 90}}
          />
        </View>
      </View>
      <View
        style={{
          // height: 100,
          width: 125,
          backgroundColor: '#eef0f1',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          borderRadius: 10,
          position: 'absolute',
          top: 60,
          left: 200,
        }}>
        <Image
          source={require('../assets/images/greenclock.png')}
          style={{
            width: 30,
            height: 30,
            borderRadius: 30 / 2,
            alignSelf: 'center',
          }}
        />
        <View>
          <Text style={{fontSize: 10, fontWeight: 'bold'}}>
            Delivery Complete
          </Text>
          <Text style={{fontSize: 10, fontWeight: 'bold', textAlign: 'center'}}>
            30 mins
          </Text>
        </View>
      </View>
      <View
        style={{
          // height: 100,
          width: 155,
          backgroundColor: '#eef0f1',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          borderRadius: 10,
          position: 'absolute',
          top: 220,
          left: 5,
        }}>
        <Image
          source={require('../assets/images/deliveryrightclick.png')}
          style={{
            width: 30,
            height: 30,
            borderRadius: 30 / 2,
            alignSelf: 'center',
          }}
        />
        <View style={{alignSelf: 'center'}}>
          <Text style={{fontSize: 12, fontWeight: 'bold'}}>
            Delivery Complete
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,

    // justifyContent: "center"
  },
});
