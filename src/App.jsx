import { useState } from 'react'
import './App.css'
import CardAdicionar from './Components/CardAdicionar';
import ListItem from './Components/ListItem';

function App() {
  const [listaDeTarefas, setListaDeTarefas] = useState([]);
  function adicionarTarefa(){
    const tarefaNova = {
      id: listaDeTarefas.length + 1,
      texto: "",
      finalizado: false,
    }
    setListaDeTarefas([listaDeTarefas, tarefaNova]);
  }

  function removerTarefa(id){
      const newList = listaDeTarefas.filter(tarefa => tarefa.id !== id)
      setListaDeTarefas(newList)
  }
  
  return (
    <div className="App">
      
      {listaDeTarefas.map(tarefa => (
                <ListItem tarefa={tarefa} removerTarefa={removerTarefa} />
            ))}
      <p>Criação do projeto</p>   
    </div>
  )
}

export default App
