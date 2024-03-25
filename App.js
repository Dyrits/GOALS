import {
  StyleSheet,
  View,
  ScrollView
} from "react-native";
import { useState } from "react";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

function App() {
  const [goals, setGoals] = useState([]);

  return (
    <View style={styles.container}>
      <GoalInput append={goal => setGoals(previous => [...previous, goal])} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.output.container}
      >
        {goals.map((goal, index) => (
          <GoalItem key={goal.id} goal={goal}
                    destroy={goal => setGoals(previous => previous.filter($goal => $goal.id !== goal.id))} />
        ))}
      </ScrollView>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: "10%",
    paddingHorizontal: "2.5%"
  },
  output: {
    container: {
      width: "100%",
      marginVertical: "2.5%"
    }
  }
});