/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  Alert,
} from 'react-native';
import {
  CarFront,
  CarBack,
  UserIcon,
  EmailIcon,
  PasswordIcon,
  HidePassword,
  ShowPassword,
  CheckedBox,
  UncheckedBox,
  FacebookIcon,
  GoogleIcon,
  TwitterIcon,
  BackIcon,
  ErrorIcon,
} from './assets/svgs';
import Colors from './assets/colors';

const App = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.main}>
        <UpperView />
        <Card />
      </SafeAreaView>
    </ScrollView>
  );
};

const UpperView = () => {
  return (
    <View style={styles.upperView}>
      <View style={styles.carBack}>
        <CarBack />
      </View>
      <View style={styles.carFront}>
        <CarFront />
      </View>
    </View>
  );
};

const Card = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [secureEntry1, setSecureEntry1] = useState(false);
  const [secureEntry2, setSecureEntry2] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isNameValue, setNameValue] = useState('');
  const [isEmailValue, setEmailValue] = useState('');
  const [isPasswordValue, setPasswordValue] = useState('');
  const [isConfirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState('');
  const [passwordValid, setPasswordValid] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false);
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  function handlePress() {
    if (
      !isNameValue ||
      !isEmailValue ||
      !isPasswordValue ||
      !isConfirmPassword
    ) {
      Alert.alert('Please fill all fields!');
    } else if (!isChecked) {
      Alert.alert(`Please accpet the \n Terms & Conditions`);
    } else if (!emailValid) {
      Alert.alert('Please enter a valid email!');
    } else if (!passwordValid) {
      Alert.alert(`
        Password must contain: \n
        -At least an Uppercase Alphabet \n
        -At least one Numerical Value \n
        -At least one Special Character \n
        -Should be at least 8 characters long.`);
    } else if (!passwordMatch) {
      Alert.alert('Passwords do not match!');
    } else {
      setModalVisible(!modalVisible);
    }
  }
  return (
    <View style={styles.cardMain}>
      <ScrollView>
        <Text style={styles.cardHeading}>SignUp</Text>
        <Text style={styles.cardSubHeading}>Get Your Car Sparkling Clean</Text>
        <View style={styles.inputView}>
          <UserIcon />
          <TextInput
            style={styles.inputBox}
            placeholder="First Name"
            onChangeText={value => setNameValue(value)}
          />
        </View>
        <View style={styles.inputView}>
          <EmailIcon />
          <TextInput
            style={styles.inputBox}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={value => {
              setEmailValue(value);
              setEmailValid(value.match(emailRegex));
            }}
          />
        </View>
        <View style={styles.inputView}>
          <PasswordIcon />
          <TextInput
            style={styles.inputBox}
            placeholder="Password"
            onChangeText={value => {
              setPasswordValue(value);
              setPasswordValid(value.match(passwordRegex));
            }}
            secureTextEntry={!secureEntry1}
          />
          <TouchableOpacity
            onPress={() => setSecureEntry1(!secureEntry1)}
            activeOpacity={1}>
            {secureEntry1 && <ShowPassword />}
            {!secureEntry1 && <HidePassword />}
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <PasswordIcon />
          <TextInput
            style={styles.inputBox}
            placeholder="Confirm Password"
            onChangeText={value => {
              setPasswordMatch(false);
              setConfirmPassword(value);
              if (value === passwordValid[0]) {
                setPasswordMatch(true);
              }
            }}
            secureTextEntry={!secureEntry2}
          />
          <TouchableOpacity
            onPress={() => setSecureEntry2(!secureEntry2)}
            activeOpacity={1}>
            {secureEntry2 && <ShowPassword />}
            {!secureEntry2 && <HidePassword />}
          </TouchableOpacity>
        </View>
        <View style={styles.disclaimerContainer}>
          <TouchableOpacity
            onPress={() => setIsChecked(!isChecked)}
            activeOpacity={1}>
            {isChecked && <CheckedBox />}
            {!isChecked && <UncheckedBox />}
          </TouchableOpacity>
          <Text style={styles.disclaimer}>
            I Agree to the Terms and Conditions,{'\n'}
            Privacy Policy & Medical Disclaimer
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handlePress}>
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>

        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.dialogBox}>
            {isNameValue &&
              isEmailValue &&
              isPasswordValue &&
              isConfirmPassword &&
              isChecked &&
              emailValid &&
              passwordValid &&
              passwordMatch && (
                <>
                  <Text style={styles.modalHeading}>Success!{'\n'}</Text>
                  <Text style={styles.modalText}>
                    Welcome {isNameValue}! {'\n'}({isEmailValue})
                  </Text>
                </>
              )}
            <TouchableOpacity
              style={styles.dialogBoxButton}
              onPress={() => setModalVisible(!modalVisible)}>
              <BackIcon />
            </TouchableOpacity>
          </View>
        </Modal>

        <View style={styles.separator} />
        <Text
          style={{
            color: Colors.font,
            fontSize: 14,
            fontWeight: '500',
            textAlign: 'center',
            paddingVertical: 8,
          }}>
          OR
        </Text>
        <View style={styles.socials}>
          <FacebookIcon />
          <GoogleIcon />
          <TwitterIcon />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  upperView: {
    flex: 1,
    marginBottom: '20%',
  },
  carBack: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: -80,
    marginRight: -20,
  },
  carFront: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: -120,
    marginRight: 24,
  },
  cardMain: {
    flex: 4,
    alignItems: 'center',
    backgroundColor: Colors.cardBackground,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  cardHeading: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '800',
    paddingTop: 19,
    color: Colors.font,
  },
  cardSubHeading: {
    color: Colors.font,
    textAlign: 'center',
    paddingVertical: 10,
    letterSpacing: 0.64,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.font,
    marginVertical: 15,
    marginHorizontal: 40,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: '#777',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputBox: {
    marginVertical: 5,
    paddingLeft: 20,
    paddingRight: 5,
    height: 40,
    width: '80%',
  },
  disclaimerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disclaimer: {
    color: Colors.font,
    textAlign: 'center',
    fontWeight: '400',
    paddingLeft: 5,
    lineHeight: 20,
  },
  button: {
    backgroundColor: Colors.font,
    borderRadius: 25,
    marginHorizontal: 85,
    paddingVertical: 15,
    borderColor: Colors.buttonText,
    borderWidth: 1,
    marginVertical: 29,
  },
  buttonText: {
    color: Colors.buttonText,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    backgroundColor: Colors.font,
    height: 1.5,
    marginHorizontal: 45,
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: '5%',
    paddingBottom: '15%',
  },
  dialogBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(249,249,249,0.95)',
    borderRadius: 15,
    marginHorizontal: '10%',
    marginVertical: '70%',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dialogBoxButton: {
    borderRadius: 25,
    margin: 10,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHeading: {
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 1,
  },
  modalText: {
    textAlign: 'center',
    letterSpacing: 1,
  },
});

export default App;
