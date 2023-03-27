import { useState } from 'react'
import './App.css'
import './Components/CardAdicionar'

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
  
  return (
    <div className="App">
      <p>Criação do projeto</p>   
    </div>
  )
}

export default App
