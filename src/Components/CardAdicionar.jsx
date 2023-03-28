import { useRef, useState } from "react";

function CardAdicionar({adicionarTarefa}){
    const [textoTarefa, setTextoTarefa] = useState("");
    const ref = useRef(null);
    const acrescentarTarefa = () => {
        if(textoTarefa != ""){
            adicionarTarefa(textoTarefa);
            setTextoTarefa("");
            ref.current.autoFocus;
        }
    }
    return(
        <div>
            <input placeholder="Digite a tarefa" type="text" value={textoTarefa} onChange={(e) => {setTextoTarefa(e.target.value)}} autoFocus required/>
            <button id="id-adicionar" type="button" onClick={acrescentarTarefa}> Adicionar tarefa </button>
        </div>
    );
}

export default CardAdicionar