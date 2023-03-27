import { useState } from 'react'
import './App.css'
import './Components/CardAdicionar'

function App() {
  const [listaDeTarefas, setListaDeTarefas] = useState([]);
  return (
    <div className="App">
      <p>Criação do projeto</p>   
    </div>
  )
}

export default App
