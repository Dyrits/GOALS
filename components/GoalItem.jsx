import { Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native";


function GoalItem({ goal, destroy }) {
  return (
    <View key={goal.id} style={styles.container}>
      <Text style={styles.text}>{goal.text}</Text>
      <Pressable
        style={styles.button.container}
        onPress={() => {
          destroy(goal);
        }}
      >
        <Text style={styles.button.text}>❌️</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
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
  },
  button: {
    container: {
      flex: 1,
      width: 30,
      aspectRatio: 1,
      borderRadius: 30,
      backgroundColor: "#FFF",
      borderColor: "#F00",
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "#FFF",
      textAlign: "center"
    }
  }
});
