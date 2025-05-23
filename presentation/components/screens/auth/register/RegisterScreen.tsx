import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./Styles";
import DefaultTextInput from "../../../DefaultTextInput";
import DefaultRoundedButton from "../../../DefaultRoundedButton";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../navigator/MainStackNavigator";
import { useState } from "react";
import EmailValidator from "../../../../utils/EmailValidator";
import { container } from "../../../../../di/container";
import { RegisterViewModel } from "./RegisterViewModel";

interface Props
  extends StackScreenProps<RootStackParamList, "RegisterScreen"> {}

export default function RegisterScreen({ navigation, route }: Props) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerViewModel: RegisterViewModel =
    container.resolve("registerViewModel");

  const handleRegister = async () => {
    if (name === "") {
      Alert.alert("Error", "El nombre no puede estar vacío");
      return;
    }
    if (lastname === "") {
      Alert.alert("Error", "El apellido no puede estar vacío");
      return;
    }
    if (email === "") {
      Alert.alert("Error", "El email no puede estar vacío");
      return;
    }
    if (phone === "") {
      Alert.alert("Error", "El teléfono no puede estar vacío");
      return;
    }
    if (password === "") {
      Alert.alert("Error", "La contraseña no puede estar vacía");
      return;
    }
    if (confirmPassword === "") {
      Alert.alert(
        "Error",
        "La confirmación de contraseña no puede estar vacía"
      );
      return;
    }
    if (!EmailValidator(email)) {
      Alert.alert("Error", "El email no es válido");
      return;
    }
    if (confirmPassword !== password) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }
    const response = await registerViewModel.register({
      name,
      lastname,
      email,
      phone,
      password,
    });
    console.log("Response: ", response);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Image
            source={require("../../../../../assets/city.jpg")}
            style={styles.imageBackground}
          />
          <View style={styles.form}>
            <TouchableOpacity onPress={() => navigation.pop()}>
              <Image
                style={styles.back}
                source={require("../../../../../assets/left_arrow.png")}
              />
            </TouchableOpacity>
            <Image
              source={require("../../../../../assets/user.png")}
              style={styles.imageUser}
            />

            <Text style={styles.textRegister}>REGISTRO</Text>

            <DefaultTextInput
              icon={require("../../../../../assets/user.png")}
              placeholder="Nombre"
              onChangeText={setName}
              value={name}
            />
            <DefaultTextInput
              icon={require("../../../../../assets/user_image.png")}
              placeholder="Apellido"
              onChangeText={setLastname}
              value={lastname}
            />
            <DefaultTextInput
              icon={require("../../../../../assets/email.png")}
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
            />
            <DefaultTextInput
              icon={require("../../../../../assets/phone.png")}
              placeholder="Teléfono"
              onChangeText={setPhone}
              value={phone}
              keyboardType="numeric"
            />
            <DefaultTextInput
              icon={require("../../../../../assets/password.png")}
              placeholder="Contraseña"
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
            />
            <DefaultTextInput
              icon={require("../../../../../assets/password.png")}
              placeholder="Confirmar contraseña"
              onChangeText={setConfirmPassword}
              value={confirmPassword}
              secureTextEntry={true}
            />
            <DefaultRoundedButton
              text="REGISTRARSE"
              onPress={handleRegister}
              backgroundColor="black"
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
