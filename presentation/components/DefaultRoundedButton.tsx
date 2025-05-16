import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  text: string;
  onPress: () => void;
  backgroundColor?: string;
}

const DefaultRoundedButton = ({ text, onPress, backgroundColor }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.roundedButton,
        { backgroundColor: backgroundColor || "red" },
      ]}
      onPress={() => onPress()}
    >
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roundedButton: {
    alignItems: "center",
    borderRadius: 50,
    height: 50,
    justifyContent: "center",
    marginTop: 25,
    width: "100%",
  },
  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default DefaultRoundedButton;
