import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Exercicio05 = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Tarefas</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Adicionar" onPress={addTask} />
      </View>
      <View>
        {tasks.map((task, index) => (
          <Text key={index} style={styles.task}>
            {task}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Exercicio05;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
  },
  input: {
    borderColor: 'black',
    flex: 1,
    padding: 5,
  },
  task: {
    fontSize: 18,
    padding: 10,
  },
});
