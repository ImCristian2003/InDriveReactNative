import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.6,
  },
  form: {
    backgroundColor: "rgba(255, 255, 255, .2)",
    borderRadius: 40,
    height: "75%",
    justifyContent: "center",
    paddingHorizontal: 25,
    position: "absolute",
    width: "87%",
  },
  imageUser: {
    alignSelf: "center",
    height: 120,
    marginBottom: 15,
    width: 120,
  },
  textRegister: {
    alignSelf: "center",
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  back: {
    height: 30,
    position: "relative",
    top: 20,
    width: 30,
  },
});

export default styles;
