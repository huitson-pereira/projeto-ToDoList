import { useState } from "react";

function ListItem(props){
    const [finalizado, setFinalizado] = useState(props.tarefa.finalizado);

    function finalizarTarefa(){
        setFinalizado(!finalizado);
    }

    return
        <div>
            <button onClick={finalizarTarefa}>Finalizar tarefa</button>
        </div>

}

export default ListItem