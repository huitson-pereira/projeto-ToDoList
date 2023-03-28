import { useState } from 'react'
import './App.css'
import CardAdicionar from './Components/CardAdicionar';
import ListItem from './Components/ListItem';

function App() {
  const [listaDeTarefas, setListaDeTarefas] = useState([]);
  
  function adicionarTarefa(texto){
    const tarefaNova = {
      id: listaDeTarefas.length + 1,
      texto: texto,
      finalizado: false,
    }
    setListaDeTarefas([...listaDeTarefas, tarefaNova]);
  }

  function removerTarefa(id){
      const newList = listaDeTarefas.filter(tarefa => tarefa.id !== id)
      setListaDeTarefas(newList)
  }
  
  return (
    <div>
      <div>
        <p>Lista de tarefas á fazer</p>
      </div>
      <div>
        <CardAdicionar adicionarTarefa={adicionarTarefa}/>
      </div>
      <div className='divListItem'>
      {listaDeTarefas.map(tarefa =>(
        <ListItem tarefa={tarefa} removerTarefa={removerTarefa}/>
        ))}
      </div>
  </div>
  )
}

export default App
