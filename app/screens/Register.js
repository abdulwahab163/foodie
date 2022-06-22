import React from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import * as Yup from "yup";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Button from "../components/Button";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import { Form, FormField } from "../components/forms";
import { Label32, Label14, Label13, getFontSize } from "../components/AppText";
import theme from "./../config/theme";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).max(30).label("Name"),
  email: Yup.string().required().email().max(255).label("Email"),
  phoneNo: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't ib nclude a decimal point")
    .min(8)
    .required("A phone number is required")
    .label("Phone No"),
  address: Yup.string().required().min(10).max(255).label("Address"),
  password: Yup.string().required().min(4).label("Password"),
  confirmPassword: Yup.string()
    .when("password", (password, field) =>
      password ? field.required().oneOf([Yup.ref("password")]) : field
    )
    .label("Confirm Password"),
});

function Register({ navigation }) {
  return (
    <Screen style={styles.container}>
      <KeyboardAvoidingView
        contentContainerStyle={styles.container1}
        behavior={"position"}
      >
        <Form
          initialValues={{
            name: "",
            email: "",
            phoneNo: "",
            address: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <Label32 style={styles.signupText}>Sign Up</Label32>
          <Label14 style={styles.signupSubText}>
            Add your details to sign up
          </Label14>
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
            Icon={
              <MaterialCommunityIcons
                name={"account"}
                size={20}
                color={theme.custom.gray}
                style={styles.icon}
              />
            }
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
            Icon={
              <MaterialCommunityIcons
                name={"email"}
                size={20}
                color={theme.custom.gray}
                style={styles.icon}
              />
            }
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="phone"
            name="phoneNo"
            keyboardType="phone-pad"
            placeholder="Mobile No"
            Icon={
              <MaterialCommunityIcons
                name={"phone"}
                size={20}
                color={theme.custom.gray}
                style={styles.icon}
              />
            }
          />
          <FormField
            autoCorrect={false}
            icon="home"
            name="address"
            placeholder="Address"
            Icon={
              <MaterialCommunityIcons
                name={"home"}
                size={20}
                color={theme.custom.gray}
                style={styles.icon}
              />
            }
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            Icon={
              <MaterialCommunityIcons
                name={"lock"}
                size={20}
                color={theme.custom.gray}
                style={styles.icon}
              />
            }
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="confirmPassword"
            placeholder="Confirm Password"
            secureTextEntry
            Icon={
              <MaterialCommunityIcons
                name={"lock"}
                size={20}
                color={theme.custom.gray}
                style={styles.icon}
              />
            }
          />
          <Button
            title="Register"
            fontSize={getFontSize(18)}
            bgColor={theme.custom.orange}
          />
          <Label13 style={{ marginRight: 10, color: theme.custom.gray }}>
            Already have an Account?&nbsp;&nbsp;
            <Label13
              style={{ color: theme.custom.orange }}
              onPress={() => navigation.navigate(routes.LOGIN)}
            >
              Login
            </Label13>
          </Label13>
        </Form>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 40,
    width: "100%",
  },
  container1: {
    alignItems: "center",
    width: "100%",
  },
  signupText: {
    fontWeight: "bold",
    marginTop: hp(3),
    marginBottom: wp(1),
  },
  signupSubText: {
    color: theme.text.secondaryLabel,
    marginBottom: wp(3),
  },
  icon: {
    marginRight: 10,
  },
});

export default Register;
