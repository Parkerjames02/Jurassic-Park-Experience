// This imports React varaible from the react library
import * as React from 'react';
// This imports Text, View, ImageBackground, Image, TouchableOpacity, StyleSheet, SafeAreaView from react-native library
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
// Imports the NavigationContainer variable from the react-navigation/native library
import { NavigationContainer } from '@react-navigation/native';
// Imports the createStackNavigator variable from the react-navigation/stack library
import { createStackNavigator } from '@react-navigation/stack';
// This imports the Audio component from the expo-av library
import { Audio } from 'expo-av';

// Make a variable to hold a username
username = '';
// Make a variable to hold a password
password = '';

function OnLogin() {
  Alert.alert('Thank You', 'You are now logged in as: \n' + username);
}

// This creates a function for the Herbivore sound effect
function HerboAudio() {
  (async () => {
    try {
      await Audio.setIsEnabledAsync(true);
      const sound = new Audio.Sound();
      await sound.loadAsync(require('./assets/triceratops.mp3'));
      await sound.setVolumeAsync(1);
      await sound.playAsync(true);
    } catch (error) {
      console.error(error);
    }
  })();
}

// This creates a function for the Carnivore sound effect
function CarnoAudio() {
  (async () => {
    try {
      await Audio.setIsEnabledAsync(true);
      const sound = new Audio.Sound();
      await sound.loadAsync(require('./assets/tyrannosaurus.mp3'));
      await sound.setVolumeAsync(1);
      await sound.playAsync(true);
    } catch (error) {
      console.error(error);
    }
  })();
}

// This creates a function for the Pteranodon sound effect
function PteroAudio() {
  (async () => {
    try {
      await Audio.setIsEnabledAsync(true);
      const sound = new Audio.Sound();
      await sound.loadAsync(require('./assets/pteranodon.mp3'));
      await sound.setVolumeAsync(1);
      await sound.playAsync(true);
    } catch (error) {
      console.error(error);
    }
  })();
}

// This creates a function for the Spinosaurus sound effect
function SpinoAudio() {
  (async () => {
    try {
      await Audio.setIsEnabledAsync(true);
      const sound = new Audio.Sound();
      await sound.loadAsync(require('./assets/spinosaurus.mp3'));
      await sound.setVolumeAsync(1);
      await sound.playAsync(true);
    } catch (error) {
      console.error(error);
    }
  })();
}

// This creates a function for the Gallimimus sound effect
function GalloAudio() {
  (async () => {
    try {
      await Audio.setIsEnabledAsync(true);
      const sound = new Audio.Sound();
      await sound.loadAsync(require('./assets/gallimimus.mp3'));
      await sound.setVolumeAsync(1);
      await sound.playAsync(true);
    } catch (error) {
      console.error(error);
    }
  })();
}

// This function contains what is displayed for the Login Screen
function LoginScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('./assets/concrete-background.jpg')}
      style={{ width: '100%', height: '100%' }}>
      <SafeAreaView>
        <View>
          <Image
            source={require('./assets/Jurassic-Park-logo.png')}
            style={{
              width: 320,
              height: 320,
              position: 'absolute',
              top: 10,
              left: 34,
              right: 0,
              bottom: 0,
            }}
          />
          <TextInput
            onChangeText={(text) => (username = text)}
            onEndEditing={() => OnLogin}
            placeholder={'Username'}
            placeholderTextColor="black"
            style={styles.usernameinput}
          />
          <TextInput
            onChangeText={(text) => (password = text)}
            onEndEditing={() => OnLogin}
            placeholder={'Password'}
            placeholderTextColor="black"
            secureTextEntry={true}
            style={styles.passwordinput}
          />
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={() => OnLogin()}
            onPressOut={() => navigation.navigate('Main Screen')}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                position: 'absolute',
                top: 10,
                left: 97,
                right: 0,
                bottom: 0,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

// This function contains what is displayed for the MainScreen
function MainScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('./assets/Leaf.png')}
      style={{ width: 390, height: 845 }}>
      <SafeAreaView>
        <Image
          source={require('./assets/user.png')}
          style={{
            width: 70,
            height: 70,
            position: 'absolute',
            top: 53,
            left: 160,
            right: 0,
            bottom: 0,
          }}
        />
        <View style={styles.rectangle}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Damascus',
              fontSize: 34,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Dino Enclosure{'\n'}Exploration
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 290,
            left: 25,
            right: 30,
            bottom: 0,
            alignItems: 'left',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Enclosure One')}
            style={{
              width: 150,
              height: 70,
              borderRadius: 10,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: '',
                fontSize: 52,
                fontWeight: 'bold',
                textAlign: 'center',
                justifyContent: 'center',
              }}>
              E1
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 290,
            left: 210,
            right: 30,
            bottom: 0,
            alignItems: 'right',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Enclosure Two')}
            style={{
              width: 150,
              height: 70,
              borderRadius: 10,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: '',
                fontSize: 52,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              E2
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 420,
            left: 25,
            right: 30,
            bottom: 0,
            alignItems: 'left',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Enclosure Three')}
            style={{
              width: 150,
              height: 70,
              borderRadius: 10,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: '',
                fontSize: 52,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              E3
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 420,
            left: 210,
            right: 30,
            bottom: 0,
            alignItems: 'right',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Enclosure Four')}
            style={{
              width: 150,
              height: 70,
              borderRadius: 10,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: '',
                fontSize: 52,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              E4
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 540,
            left: 120,
            right: 0,
            bottom: 0,
            alignItems: 'left',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Enclosure Five')}
            style={{
              width: 150,
              height: 70,
              borderRadius: 10,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: '',
                fontSize: 52,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              E5
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rectangle2}>
          <Text
            style={{
              color: 'black',
              fontFamily: '',
              fontSize: 21,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Tap any of the five buttons
            {'\n'}
            above to be taken to a dinosaur
            {'\n'}
            enclosure
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

// This function contains what is displayed for Enclosure One
function EnclosureOne({ navigation }) {
  return (
    <ImageBackground
      source={require('./assets/Herbo.jpg')}
      style={{ width: 390, height: 845 }}>
      <SafeAreaView>
        <View style={styles.rectangle3}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Damascus',
              fontSize: 34,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Enclosure One
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 735,
            left: 257,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => HerboAudio()}
            style={{
              width: 60,
              height: 60,
              borderRadius: 10,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: '',
                fontSize: 43,
                fontWeight: 'bold',
              }}>
              🔊
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 735,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Main Screen')}
            style={{
              width: 120,
              height: 60,
              borderRadius: 10,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: '',
                fontSize: 43,
                fontWeight: 'bold',
                textAlign: 'center',
                transform: [{ rotate: '180deg' }],
              }}>
              ⏏
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

// This function contains what is displayed for Enclosure Two
function EnclosureTwo({ navigation }) {
  return (
    <ImageBackground
      source={require('./assets/Carno.jpg')}
      style={{ width: 390, height: 845 }}>
      <SafeAreaView>
        <View style={styles.rectangle3}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Damascus',
              fontSize: 34,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Enclosure Two
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 735,
            left: 257,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => CarnoAudio()}
            style={{
              width: 60,
              height: 60,
              borderRadius: 10,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: '',
                fontSize: 43,
                fontWeight: 'bold',
              }}>
              🔊
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 735,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Main Screen')}
            style={{
              width: 120,
              height: 60,
              borderRadius: 10,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: '',
                fontSize: 43,
                fontWeight: 'bold',
                textAlign: 'center',
                transform: [{ rotate: '180deg' }],
              }}>
              ⏏
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

// This function contains what is displayed for Enclosure Three
function EnclosureThree({ navigation }) {
  return (
    <ImageBackground
      source={require('./assets/Ptero.jpg')}
      style={{ width: 390, height: 845 }}>
      <SafeAreaView>
        <View style={styles.rectangle3}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Damascus',
              fontSize: 34,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Enclosure Three
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 735,
            left: 257,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => PteroAudio()}
            style={{
              width: 60,
              height: 60,
              borderRadius: 10,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: '',
                fontSize: 43,
                fontWeight: 'bold',
              }}>
              🔊
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 735,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Main Screen')}
            style={{
              width: 120,
              height: 60,
              borderRadius: 10,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: '',
                fontSize: 43,
                fontWeight: 'bold',
                textAlign: 'center',
                transform: [{ rotate: '180deg' }],
              }}>
              ⏏
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

// This function contains what is displayed for Enclosure Four
function EnclosureFour({ navigation }) {
  return (
    <ImageBackground
      source={require('./assets/Spino.jpg')}
      style={{ width: 390, height: 845 }}>
      <SafeAreaView>
        <View style={styles.rectangle3}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Damascus',
              fontSize: 34,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Enclosure Four
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 735,
            left: 257,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => SpinoAudio()}
            style={{
              width: 60,
              height: 60,
              borderRadius: 10,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: '',
                fontSize: 43,
                fontWeight: 'bold',
              }}>
              🔊
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 735,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Main Screen')}
            style={{
              width: 120,
              height: 60,
              borderRadius: 10,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: '',
                fontSize: 43,
                fontWeight: 'bold',
                textAlign: 'center',
                transform: [{ rotate: '180deg' }],
              }}>
              ⏏
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

// This function contains what is displayed for Enclosure Five
function EnclosureFive({ navigation }) {
  return (
    <ImageBackground
      source={require('./assets/Gallo.jpg')}
      style={{ width: 390, height: 845 }}>
      <SafeAreaView>
        <View style={styles.rectangle3}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Damascus',
              fontSize: 34,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Enclosure Five
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 735,
            left: 257,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => GalloAudio()}
            style={{
              width: 60,
              height: 60,
              borderRadius: 10,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: '',
                fontSize: 43,
                fontWeight: 'bold',
              }}>
              🔊
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 735,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Main Screen')}
            style={{
              width: 120,
              height: 60,
              borderRadius: 10,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: '',
                fontSize: 43,
                fontWeight: 'bold',
                textAlign: 'center',
                transform: [{ rotate: '180deg' }],
              }}>
              ⏏
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

// This const variable named styles contains all of the different style specifications for the rectangles that are behind the text
const styles = StyleSheet.create({
  rectangle: {
    width: 270,
    height: 86,
    borderRadius: 10,
    backgroundColor: 'white',
    position: 'absolute',
    top: 140,
    left: 60,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  rectangle2: {
    width: 332,
    height: 76,
    borderRadius: 10,
    backgroundColor: 'white',
    position: 'absolute',
    top: 670,
    left: 28,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  rectangle3: {
    width: 332,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    position: 'absolute',
    top: 80,
    left: 28,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  usernameinput: {
    width: 240,
    height: 44,
    padding: 10,
    backgroundColor: 'white',
    position: 'absolute',
    top: 390,
    left: 76,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  passwordinput: {
    width: 240,
    height: 44,
    padding: 10,
    backgroundColor: 'white',
    position: 'absolute',
    top: 450,
    left: 76,
    right: 0,
    bottom: 0,
  },
  loginbutton: {
    width: 240,
    height: 44,
    padding: 14,
    backgroundColor: 'white',
    position: 'absolute',
    top: 530,
    left: 76,
    right: 0,
    bottom: 0,
  },
});

// This creates the nav component
const Stack = createStackNavigator();

// This App function displays the stack naviagation container that will first show the initial route
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login Screen">
        <Stack.Screen name="Login Screen" component={LoginScreen} />
        <Stack.Screen name="Main Screen" component={MainScreen} />
        <Stack.Screen name="Enclosure One" component={EnclosureOne} />
        <Stack.Screen name="Enclosure Two" component={EnclosureTwo} />
        <Stack.Screen name="Enclosure Three" component={EnclosureThree} />
        <Stack.Screen name="Enclosure Four" component={EnclosureFour} />
        <Stack.Screen name="Enclosure Five" component={EnclosureFive} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// This exports the App function
export default App;
