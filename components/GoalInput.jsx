import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

function GoalInput({ append }) {
  const [goal, setGoal] = useState(String());
  const [dark, setDark] = useState(true);

  function createGoal() {
    return {
      text: goal.trim(),
      id: (Math.random() * Math.random()).toString()
    };
  }

  function addGoal() {
    if (goal.trim()) {
      const goal = createGoal();
      append(goal);
      setGoal(String());
      setDark(previous => !previous);
      setTimeout(() => {
        setDark(previous => !previous);
      }, 500);
    }
  }

  return <View style={styles.form.container}>
    <TextInput
      selectionColor={"#FFF"}
      placeholderTextColor={"#DDD"}
      style={styles.form.input}
      placeholder={"Your course goal--"}
      value={goal}
      onChangeText={setGoal}
    />
    <Pressable style={styles.button.container(dark)} onPress={addGoal}>
      <Text style={styles.button.text(dark)}>
        {dark ? "Add [+]" : "Added!"}
      </Text>
    </Pressable>
  </View>;
}

export default GoalInput;

const styles = StyleSheet.create({
  form: {
    container: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      paddingVertical: "2.5%",
      borderBottomWidth: 2,
      borderColor: "#000"
    },
    input: {
      flex: 3,
      marginRight: "1.5%",
      padding: "2.5%",
      borderRadius: 5,
      backgroundColor: "#000",
      color: "#FFF"
    }
  },
  button: {
    container: dark => ({
      flex: 1,
      width: "auto",
      padding: "2.5%",
      borderRadius: 5,
      backgroundColor: dark ? "#000" : "#FFF",
      borderColor: dark ? "#FFF" : "#000",
      borderWidth: 2
    }),
    text: dark => ({
      color: dark ? "#FFF" : "#000",
      textAlign: "center"
    })
  }
});