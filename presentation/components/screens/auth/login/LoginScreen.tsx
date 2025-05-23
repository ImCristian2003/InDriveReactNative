import { Image, Text, View, StatusBar, StyleSheet, Alert } from "react-native";
import DefaultTextInput from "../../../DefaultTextInput";
import DefaultRoundedButton from "../../../DefaultRoundedButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../navigator/MainStackNavigator";
import styles from "./Styles";
import { useState } from "react";
import EmailValidator from "../../../../utils/EmailValidator";
import { ApiRequestHandler } from "../../../../../data/sources/remote/api/ApiRequestHandler";
import { AuthResponse } from "../../../../../domain/models/AuthResponse";
import {
  defaultErrorResponse,
  ErrorResponse,
} from "../../../../../domain/models/ErrorResponse";
import { LoginViewModel } from "./LoginViewModel";
import { LoginUseCase } from "../../../../../domain/useCases/auth/LoginUseCase";
import { AuthService } from "../../../../../data/sources/remote/services/AuthServices";
import { AuthRepositoryImpl } from "../../../../../data/repository/AuthRepositoryImpl";
import { container } from "../../../../../di/container";
import { useAuth } from "../../../../hooks/useAuth";

interface Props extends StackScreenProps<RootStackParamList, "LoginScreen"> {}

export default function LoginScreen({ navigation, route }: Props) {
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginViewModel = container.resolve("loginViewModel");
  const { authResponse, saveAuthSession } = useAuth();

  const handleLogin = async () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "El email y el password no pueden estar vacíos");
      return;
    }
    if (!EmailValidator(email)) {
      Alert.alert("Error", "El email no es valido");
    }

    const response = await loginViewModel.login(email, password);

    if ("token" in response) {
      // LOGIN EXITOSO
      saveAuthSession(response);
      console.log("RESPONSE ", "Login exitoso");
    }

    console.log("RESPONSE ", response);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <Image
        source={require("../../../../../assets/city.jpg")}
        style={styles.imageBackground}
      />

      <View style={styles.form}>
        <Image
          source={require("../../../../../assets/user.png")}
          style={styles.imageUser}
        />
        <Text style={styles.textLogin}>LOGIN</Text>

        <DefaultTextInput
          icon={require("../../../../../assets/email.png")}
          placeholder="Correo electrónico"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />

        <DefaultTextInput
          icon={require("../../../../../assets/password.png")}
          placeholder="Contraseña"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />

        <DefaultRoundedButton text="INICIAR SESIÓN" onPress={handleLogin} />

        <View style={styles.containerTextDontHaveAccount}>
          <View style={styles.divider}></View>
          <Text style={styles.textDontHaveAccount}>¿No tienes cuenta?</Text>
          <View style={styles.divider}></View>
        </View>

        <DefaultRoundedButton
          text="REGISTRATE"
          onPress={() => navigation.navigate("RegisterScreen")}
          backgroundColor="black"
        />
      </View>
    </View>
  );
}
