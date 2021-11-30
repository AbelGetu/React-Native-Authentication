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



const NewPasswordScreen = () => {

  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigation = useNavigation();
 
  const onSubmitPressed = () => {
    // console.warn('onSubmitPressed')
    navigation.navigate('Home')
  }

  const onSignInPressed = () => {
    console.warn('onSignInPressed')
    navigation.navigate('SignIn')
  }


  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          placeholder="Code"
          value={code}
          setValue={setCode}
        />

        <CustomInput
          placeholder="Enter your new password"
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomButton onPress={onSubmitPressed} text="Submit" />

        <CustomButton onPress={onSignInPressed} text="Back to sign in" type='TERTIARY' />

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
    marginVertical: 10
  },
  link: {
    color: '#FDB075',
    marginVertical: 10
  }
});

export default NewPasswordScreen;
