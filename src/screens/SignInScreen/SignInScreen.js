import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton';
import {useNavigation} from '@react-navigation/core';

const SignInScreen = () => {
  const {height} = useWindowDimensions();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onSignInPressed = () => {
    // console.warn('Sign In');
    // Validate user

    navigation.navigate('Home');
  };

  const onSignUpPressed = () => {
    // console.warn('Sign Up');
    navigation.navigate('SignUp');
  };

  const onForgotPasswordPressed = () => {
    // console.warn('Forgot password');
    navigation.navigate('ForgotPassword');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.logo}>Spark</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton onPress={onSignInPressed} text="Sign In" />
        <CustomButton
          onPress={onForgotPasswordPressed}
          text="Forgot password"
          type="TERTIARY"
        />

        <SocialSignInButton />

        <CustomButton
          onPress={onSignUpPressed}
          text="Don't have an account? Create one"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 40,
    marginTop: 50,
    marginBottom: 40,
  },
});

export default SignInScreen;
