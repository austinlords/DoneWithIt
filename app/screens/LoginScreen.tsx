import React from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppFormField from "../components/AppFormField";
import AppTextInput from "../components/AppTextInput";
import defaultStyles from "../config/styles";
import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
});

export interface LoginScreenProps {}

const LoginScreen: React.SFC<LoginScreenProps> = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={values => console.log("submitted: ", values)}
        validationSchema={validationSchema}
      >
        {() => {
          return (
            <>
              <AppFormField
                name="email"
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                placeholder="Email"
                textContentType="emailAddress"
              />
              <AppFormField
                name="password"
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                keyboardType="default"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />
              <SubmitButton title="Login" />
            </>
          );
        }}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20
  }
});

export default LoginScreen;
