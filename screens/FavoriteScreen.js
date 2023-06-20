import { StyleSheet, Text, View } from "react-native";

function FavoriteScreen() {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Your Favorites</Text>
    </View>
  );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
