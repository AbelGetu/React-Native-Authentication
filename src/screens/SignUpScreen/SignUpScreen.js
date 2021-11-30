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

const SignUpScreen = () => {
  const {height} = useWindowDimensions();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  const onSignInPressed = () => {
    // console.warn('Sign In');
    navigation.navigate('SignIn');
  };

  const onRegisterPressed = () => {
    // console.warn('Register');
    navigation.navigate('ConfirmEmail');
  };

  const onForgotPasswordPressed = () => {
    // console.warn('Forgot password');
    navigation.navigate('ForgotPassword');
  };

  const onTermsOfUsePressed = () => {
    console.warn('on terms of use pressed');
  };

  const onPrivacyPolicyPressed = () => {
    console.warn('on privacy policy pressed');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomInput placeholder="Email" value={email} setValue={setEmail} />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />

        <CustomButton onPress={onRegisterPressed} text="Register" />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButton />

        <CustomButton
          onPress={onForgotPasswordPressed}
          text="Forgot password"
          type="TERTIARY"
        />

        <CustomButton
          onPress={onSignInPressed}
          text="Have an account? Sign in"
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
  title: {
    fontWeight: 'bold',
    color: '#051c60',
    fontSize: 24,
    marginTop: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
    marginVertical: 10,
  },
});

export default SignUpScreen;
