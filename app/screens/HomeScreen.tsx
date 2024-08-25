import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "HomeScreen"
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the HomeScreen!</Text>
      <Button
        title="Logout"
        onPress={() => navigation.navigate("StartScreen")}
      />
    </View>
  );
};

export default HomeScreen;
