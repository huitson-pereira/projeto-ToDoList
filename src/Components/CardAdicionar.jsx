import { useState } from "react";

function CardAdicionar({adicionarTarefa}){
    const [textoTarefa, setTextoTarefa] = useState("");

    return(
        <div>
            <input type="text" />
            <button onClick={adicionarTarefa}>Adicionar tarefa</button>
        </div>
    )
}

export default CardAdicionar