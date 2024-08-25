import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type ResetPasswordScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ResetPasswordScreen"
>;

interface Props {
  navigation: ResetPasswordScreenNavigationProp;
}

interface ResetPasswordFormInputs {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const ResetPasswordScreen: React.FC<Props> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: ResetPasswordFormInputs) => {
    console.log(data);
    // Handle password reset logic here
  };

  return (
    <View>
      <Text>Reset Password</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.email && <Text>{errors.email.message}</Text>}

      <Button title="Send Reset Link" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default ResetPasswordScreen;
