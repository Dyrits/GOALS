import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  TextInput
} from "react-native";
import { useRef, useState } from "react";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [goal, setGoal] = useState(String());

  function addGoal() {
    if (goal) {
      setGoal(String());
      setIsDark(previous => !previous);
      setTimeout(() => {
        setIsDark(previous => !previous);
      }, 500);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.form.container}>
        <TextInput
          selectionColor={"#FFF"}
          placeholderTextColor={"#FFFFFFDD"}
          style={styles.form.textInput}
          placeholder={"Your course goal--"}
          value={goal}
          onChangeText={setGoal}
        />
        <Pressable
          style={styles.form.button.container(isDark)}
          onPress={addGoal}
        >
          <Text style={styles.form.button.text(isDark)}>
            {isDark ? "Add goal~" : "Goal added!"}
          </Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.textBox}>List of goals~</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "10%"
  },
  form: {
    container: {
      width: "80%"
    },
    textInput: {
      marginVertical: "1.5%",
      padding: "1.5%",
      borderRadius: 5,
      backgroundColor: "#000",
      color: "#FFF"
    },
    button: {
      container: isDark => ({
        marginVertical: "1.5%",
        padding: "2.5%",
        borderRadius: 5,
        backgroundColor: isDark ? "#000" : "#FFF",
        borderColor: isDark ? "#FFF" : "#000",
        borderWidth: 2
      }),
      text: isDark => ({
        color: isDark ? "#FFF" : "#000",
        textAlign: "center"
      })
    }
  },
  textBox: {
    marginVertical: "1.5%"
  }
});
