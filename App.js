import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  ScrollView
} from "react-native";
import { useState } from "react";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [textInput, setTextInput] = useState(String());
  const [goals, setGoals] = useState([]);

  function createGoal() {
    return {
      text: textInput.trim(),
      id: (Math.random() * Math.random()).toString()
    };
  }

  function addGoal() {
    if (textInput.trim()) {
      const goal = createGoal();
      setGoals(previous => [...previous, goal]);
      setTextInput(String());
      setIsDark(previous => !previous);
      setTimeout(() => {
        setIsDark(previous => !previous);
      }, 500);
    }
  }

  function deleteGoal(goal) {
    setGoals(previous => previous.filter($goal => $goal.id !== goal.id));
  }

  return (
    <View style={styles.container}>
      <View style={styles.form.container}>
        <TextInput
          selectionColor={"#FFF"}
          placeholderTextColor={"#DDD"}
          style={styles.form.input}
          placeholder={"Your course goal--"}
          value={textInput}
          onChangeText={setTextInput}
        />
        <Pressable style={styles.button.container(isDark)} onPress={addGoal}>
          <Text style={styles.button.text(isDark)}>
            {isDark ? "Add~" : "Added!"}
          </Text>
        </Pressable>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.output.container}
      >
        {goals.map((goal, index) => (
          <View key={goal.id} style={styles.output.item.container}>
            <Text style={styles.output.item.text}>{goal.text}</Text>
            <Pressable
              style={styles.button.container(true)}
              onPress={() => {
                deleteGoal(goal);
              }}
            >
              <Text style={styles.button.text(true)}>❌️</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: "10%",
    paddingHorizontal: "2.5%"
  },
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
    container: isDark => ({
      flex: 1,
      width: "auto",
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
  },
  output: {
    container: {
      width: "100%",
      marginVertical: "2.5%"
    },
    item: {
      container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: "1.5%",
        padding: "2.5%",
        borderRadius: 5,
        backgroundColor: "#FFF",
        borderWidth: 2,
        borderColor: "#000"
      },
      text: {
        flex: 7,
        marginRight: "1.5%",
        color: "#000"
      }
    }
  }
});
