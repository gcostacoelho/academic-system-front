import { PreRequisitos } from "../Coordenador/PreRequisitos";

export function FormDisc(props) {
    async function handlePostApi(event) {
        event.preventDefault();

        alert("teste");
    }

    return (
        <form onSubmit={handlePostApi}>
            <div>
                <label>Código: </label>
                <input
                    className="p-1 rounded"
                    type="text"
                    disabled={props.edit}
                    defaultValue="QSW"
                />

                <br />
                <br />

                <label>Nome: </label>
                <input
                    className="p-1 rounded"
                    type="text"
                    disabled={props.edit}
                    defaultValue="Qualidade de Software"
                />

                <br />
                <br />

                <label>Qtd. de Créditos: </label>
                <input
                    className="p-1 rounded"
                    type="number"
                    disabled={props.edit}
                    defaultValue="5"
                />

                <br />
                <br />

                <label>Curso: </label>
                <input
                    className="p-1 rounded"
                    type="text"
                    disabled={props.edit}
                    defaultValue="ADS"
                />

                <br />
                <br />

                <label>Pré-requisitos: </label>
                <PreRequisitos 
                    edit={props.edit}
                    check={true}
                />
            </div>

            {
                props.edit == false &&
                <div className="float-right">
                    <button className="bg-blue-500 p-1 rounded" type="submit">Atualizar</button>
                </div>
            }

        </form>
    );
}