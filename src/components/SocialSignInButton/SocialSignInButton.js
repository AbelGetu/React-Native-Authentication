import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../CustomButton/CustomButton'

const SocialSignInButton = () => {
    const onSignInFacebook = () => {
        console.warn('Sign in with facebook');
    };
    
    const onSignInGoogle = () => {
        console.warn('Sign in with google');
    };

    const onSignInApple = () => {
        console.warn('Sign in with apple');
    };

    return (
        <>
               <CustomButton
                bgColor="#E7EAF4"
                fgColor="#4765A9"
                onPress={onSignInFacebook}
                text="Sign In with Facebook"
                />
                <CustomButton
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
                onPress={onSignInGoogle}
                text="Sign In with Google"
                />
                <CustomButton
                bgColor="#E3E3E3"
                fgColor="#363636"
                onPress={onSignInApple}
                text="Sign In with Apple"
                />
        </>
    )
}

export default SocialSignInButton

const styles = StyleSheet.create({})

