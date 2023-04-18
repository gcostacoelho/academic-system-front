export function FormAluno(props) {
    async function handlePostApi(event) {
        event.preventDefault();

        alert("teste");
    }

    return (
        <form onSubmit={handlePostApi}>
            <div>
                <label>Nome completo: </label>
                <input
                    className="p-1 rounded"
                    type="text"
                    disabled={props.edit || false}
                    defaultValue={props.nomeAluno || ""}
                />

                <br />
                <br />

                <label>Matricula: </label>
                <input
                    className="p-1 rounded"
                    type="text"
                    disabled={props.edit || false}
                    defaultValue={props.matricula || ""}
                />

                <br />
                <br />

                <label>Curso: </label>
                <input
                    className="p-1 rounded"
                    type="text"
                    disabled={props.edit || false}
                    defaultValue={props.curso || ""}
                />

                <br />
                <br />

                <label>Período: </label>
                <input
                    className="p-1 rounded"
                    type="text"
                    disabled={props.edit || false}
                    defaultValue={props.periodo || ""}
                />

                <br />
                <br />

                <label>Identidade: </label>
                <input
                    className="p-1 rounded"
                    type="text"
                    disabled={props.edit || false}
                    defaultValue={props.ident || ""}
                />

                <br />
                <br />

                <label>Data de nascimento: </label>
                <input
                    className="p-1 rounded"
z                    disabled={props.edit || false}
                    defaultValue={props.dataNascimento || ""}
                />
            </div>

            {
                props.edit == false &&
                <div className="float-right">
                    <button className="bg-blue-500 p-1 rounded" type="submit">{props.nameButton}</button>
                </div>
            }

        </form>
    );
}