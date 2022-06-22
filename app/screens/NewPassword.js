import React from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import * as Yup from "yup";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import routes from "../navigation/routes";
import Screen from "../components/Screen";
import { Form, FormField } from "../components/forms";
import { Label32, Label14, getFontSize } from "../components/AppText";
import Button from "../components/Button";

import theme from "../config/theme";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().max(255).label("Email"),
});

function NewPassword({ navigation }) {
  return (
    <Screen style={styles.container}>
      <KeyboardAvoidingView
        contentContainerStyle={styles.container1}
        behavior={"position"}
      >
        <Form
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <Label32 style={styles.ResetText}>New Password</Label32>
          <Label14 style={styles.ResetSubText}>
            Please enter your email to receive a link to create a new password
            via email
          </Label14>

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
            title="Next"
            fontSize={getFontSize(18)}
            bgColor={theme.custom.orange}
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
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
  ResetText: {
    fontWeight: "bold",
    marginTop: hp(3),
    marginBottom: wp(1),
  },
  ResetSubText: {
    color: theme.text.secondaryLabel,
    textAlign: "center",
    paddingHorizontal: wp(6),
    marginBottom: wp(6),
  },
  icon: {
    marginRight: 10,
  },
});

export default NewPassword;
