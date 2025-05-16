import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    height: "100%",
    width: "100%",
    opacity: 0.7,
  },
  form: {
    backgroundColor: "rgba(255, 255, 255, .2)",
    borderRadius: 40,
    height: "80%",
    justifyContent: "center",
    paddingHorizontal: 25,
    position: "absolute",
    width: "87%",
  },
  imageUser: {
    alignSelf: "center",
    height: 150,
    marginBottom: 15,
    width: 150,
  },
  textLogin: {
    alignSelf: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  containerTextDontHaveAccount: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  divider: {
    backgroundColor: "white",
    flex: 1,
    height: 1,
    minWidth: 50,
  },
  textDontHaveAccount: {
    color: "white",
    fontSize: 15,
    marginHorizontal: 5,
  },
});

export default styles;
