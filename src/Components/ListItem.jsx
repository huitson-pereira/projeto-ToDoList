import { useState } from "react";


function ListItem({tarefa, removerTarefa}){
    const [finalizado, setFinalizado] = useState(tarefa.finalizado);

    function finalizarTarefa(){
        setFinalizado(!finalizado);
    }

    return(
        <div className="div-List-Item"> 
            <div id="div-p">
                <p id="tarefa" style={{textDecoration: finalizado ? "line-through" : ""}}>{tarefa.texto}</p>
            </div>
            <div className="div-input">
                <input 
                    type="checkbox"
                    className="checkbox"
                    checked={finalizado}
                    onChange={finalizado}>
                </input>
            </div>
            <div id="div-botao">
                <button type="button" onClick={finalizarTarefa}>Finalizar</button>
            </div>
            <div>    
                <button type="button" onClick={() => removerTarefa(tarefa.id)}>Remover</button>    
            </div>
        </div>
    )
}

export default ListItem