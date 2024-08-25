import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type StartScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "StartScreen"
>;

interface Props {
  navigation: StartScreenNavigationProp;
}

const StartScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Exlogrn</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate("LoginScreen")}
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate("RegisterScreen")}
      />
    </View>
  );
};

export default StartScreen;
