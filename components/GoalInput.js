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
      <View>
      <TextInput
      multiline={true}
      style={styles.textInput}
      placeholder="Your course goal"
      onChangeText={goalInputHandler}
      value={enteredGoalText}
    />
      </View>

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
    // alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    alignSelf: 'stretch',
    textAlign: 'center',
    
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: '100%',
    padding: 8,
    alignSelf: 'stretch',
    // testtextAlign: 'center',
  },

  buttonContainer: {
      marginTop: 16,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
  },

  button: {
      width: 100,
      marginHorizontal: 8,
      
  }
});
