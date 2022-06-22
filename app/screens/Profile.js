import React from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Yup from "yup";

import theme from "../config/theme";
import ScreenHeader from "../components/ScreenHeader";
import { Heading5, Label10, Label9, getFontSize } from "../components/AppText";
import Button from "./../components/Button";
import routes from "../navigation/routes";
import { Form, FormField } from "../components/forms";

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

export default SubMenu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <KeyboardAvoidingView behavior={"position"}>
          <StatusBar barStyle={"dark-content"} />

          <View style={{ paddingHorizontal: wp(4) }}>
            <ScreenHeader title="Profile" />
            <View style={{ alignItems: "center" }}>
              <Image
                style={{
                  height: wp(25),
                  width: wp(25),
                  borderRadius: wp(12.5),
                }}
                resizeMode={"cover"}
                source={require("./../assets/profile.jpg")}
              />
              <TouchableOpacity>
                <Label9 style={styles.editbtn}>
                  <FontAwesome name="pencil" size={11} /> Edit Profile
                </Label9>
              </TouchableOpacity>
              <Heading5 style={{ marginTop: wp(2.5), fontWeight: "bold" }}>
                Hi there Rashmika!
              </Heading5>
              <TouchableOpacity>
                <Label10 style={{ marginTop: wp(1.5) }}>Sign Out</Label10>
              </TouchableOpacity>
            </View>

            <View style={styles.formContainer}>
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
                  title="Save"
                  fontSize={getFontSize(18)}
                  bgColor={theme.custom.orange}
                />
              </Form>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: wp(4),
    flex: 1,
  },
  editbtn: { marginTop: wp(2.5), color: theme.custom.orange },
  formContainer: {
    marginVertical: wp(5),
    alignItems: "center",
    width: "100%",
    paddingBottom: wp(7),
  },
  signupText: {
    fontWeight: "bold",
    marginTop: hp(3),
    marginBottom: wp(1),
  },
  icon: {
    marginRight: 10,
  },
});
