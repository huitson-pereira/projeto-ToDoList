import { useState } from "react";

function ListItem({tarefa, removerTarefa}){
    const [finalizado, setFinalizado] = useState(tarefa.finalizado);

    function finalizarTarefa(){
        setFinalizado(!finalizado);
    }

    return
        <div>
            
            <button onClick={finalizarTarefa}>Finalizar tarefa</button>
        </div>

}

export default ListItem