import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
      
        <TextInput
          multiline={true}
          styles={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title="Add Goal" onPress={addGoalHandler} />
        </View>

        <View style={styles.button}>
        <Button title="Cancel" onPress={props.onCancel}/>
        </View>
    
        </View>
        
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    
  },
  textInput: {
    
  },

  buttonContainer: {
      marginTop: 16,
      flexDirection: 'row'
  },

  button: {
      width: '30%',
      marginHorizontal: 8
  }
});
