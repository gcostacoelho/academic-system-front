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
                    className="p-1 rounded border-2"
                    type="text"
                    disabled={props.edit}
                    defaultValue={props.sigla || ""}
                />

                <br />
                <br />

                <label>Nome: </label>
                <input
                    className="p-1 rounded border-2"
                    type="text"
                    disabled={props.edit}
                    defaultValue={props.nomeDisc || ""}
                />

                <br />
                <br />

                <label>Qtd. de Créditos: </label>
                <input
                    className="p-1 rounded border-2"
                    type="number"
                    disabled={props.edit}
                    defaultValue={props.creditos || ""}
                />

                {/* <br />
                <br /> */}

                {/* <label>Curso: </label>
                <input
                    className="p-1 rounded border-2"
                    type="text"
                    disabled={props.edit}
                    defaultValue={props.curso || ""}
                /> */}

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
                    <button className="bg-colorBtnSuccess p-2 rounded text-[#ffffff] font-medium" type="submit">{props.nameButton}</button>
                </div>
            }

        </form>
    );
}