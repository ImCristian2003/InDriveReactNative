import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./Styles";
import DefaultTextInput from "../../../DefaultTextInput";
import DefaultRoundedButton from "../../../DefaultRoundedButton";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../navigator/MainStackNavigator";
import { useState } from "react";

interface Props
  extends StackScreenProps<RootStackParamList, "RegisterScreen"> {}

export default function RegisterScreen({ navigation, route }: Props) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
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
        />
        <DefaultTextInput
          icon={require("../../../../../assets/password.png")}
          placeholder="Confirmar contraseña"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
        <DefaultRoundedButton
          text="REGISTRARSE"
          onPress={() => {}}
          backgroundColor="black"
        />
      </View>
    </View>
  );
}
