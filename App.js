import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import logo from "./assets/todolist-tb.png"; 

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo}/>
        <Text>TODO List</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 200,
    width: 200,
  },
});
