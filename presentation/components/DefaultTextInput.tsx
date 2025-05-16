import { Image, KeyboardType, StyleSheet, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardType;
  icon: any;
  secureTextEntry?: boolean;
}

const DefaultTextInput = ({
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
  icon,
  secureTextEntry = false,
}: Props) => {
  return (
    <View style={styles.containerTextInput}>
      <Image source={icon} style={styles.textInputIcon} />
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        value={value}
        placeholderTextColor="white"
        onChangeText={(text) => onChangeText(text)}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerTextInput: {
    alignItems: "center",
    flexDirection: "row",
  },
  textInputIcon: {
    height: 25,
    marginRight: 15,
    width: 25,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    color: "white",
    fontSize: 18,
    height: 50,
    width: "90%",
  },
});

export default DefaultTextInput;
