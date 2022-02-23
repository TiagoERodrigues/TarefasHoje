import  React, { useState} from 'react';
import { Keyboard, StyleSheet, Text, View } from 'react-native';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Platform } from 'react-native';
import Task from './componentes/Task';

export default function App() {
  
  const [task, setTask] = useState();
  const [taskItens, setTaskItens] = useState([]);
  
  const handleAddTask = () =>{
    setTaskItens([...taskItens, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itensCopy = [...taskItens];
    itensCopy.splice(index, 1);
    setTaskItens(itensCopy);
  }

  return (
    <View style={styles.container}>

      {/*Task de hoje*/ }

      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>
          Tarefas de hoje
        </Text>

        <View style={styles.itens}>
            {/*Task para fazer */ }
            {
              taskItens.map((itens) => {
               
                return(
                  <TouchableOpacity onPress={() => completeTask()}>
                    <Task text={itens}/>
                  </TouchableOpacity>
                )
                
              })
            }
            
        </View>
      </View>

     {/*Escreva Task */ }

      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height" }
        style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'Escreva uma task'} value={task} onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>

      </KeyboardAvoidingView>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },

  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold'

  },

  itens:{
    marginTop: 30,
  },

  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderColor: '#C0C0C0',
    borderRadius: 60,
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  }

});
