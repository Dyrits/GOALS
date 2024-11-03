import { useState } from "react";
import { StyleSheet, TextInput, View, Modal, Button, Image } from "react-native";

function GoalInput({ append, visible, setInvisible }) {
  const [goal, setGoal] = useState(String());

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
      setInvisible()
    }
  }

  return (
    <Modal visible={visible} animationType={"fade"}>
      <View style={styles.form.container}>
        <Image source={require("../assets/images/goal.png")} style={styles.form.image} />
        <TextInput
          selectionColor={"#FFF"}
          placeholderTextColor={"#DDD"}
          style={styles.form.input}
          placeholder={"What do you want to do?"}
          value={goal}
          onChangeText={setGoal}
        />
        <View style={styles.buttons.container}>
          <Button title={"Add [+]"} color={"#28A745"} onPress={addGoal} />
          <Button title={"Clear"} color={"#007BFF"} onPress={() => {
            setGoal(String());
          }} />
          <Button title={"Cancel"} color={"#F00"} onPress={() => {
            setGoal(String());
            setInvisible();
          }} />
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  form: {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: "2.5%",
      gap: 5,
      backgroundColor: "#000"
    },
    image: {
      width: 100,
      height: 100
    },
    input: {
      width: "90%",
      marginRight: "1.5%",
      padding: "2.5%",
      borderRadius: 5,
      backgroundColor: "#FFF",
      color: "#000"
    }
  },
  buttons: {
    container: {
      flexDirection: "row-reverse",
      gap: 5
    }
  }
});
