import { StyleSheet, View, ScrollView, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

function App() {
  const [visible, setVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.button}>
          <Button title={"Add a goal"} color={"#007BFF"} onPress={() => {
            setVisible(true);
          }} />
        </View>
        <GoalInput append={goal => setGoals(previous => [...previous, goal])} visible={visible} setInvisible={() => {
          setVisible(false);
        }} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.output.container}
        >
          {goals.map((goal, index) => (
            <GoalItem
              key={goal.id}
              goal={goal}
              destroy={goal =>
                setGoals(previous =>
                  previous.filter($goal => $goal.id !== goal.id)
                )
              }
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: "10%",
    paddingHorizontal: "2.5%"
  },
  button: {
    paddingTop: 25,
    width: "100%",
  },
  output: {
    container: {
      width: "100%",
      marginVertical: "2.5%"
    }
  }
});
