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
                    disabled={props.edit}
                    defaultValue="Gustavo"
                />

                <br />
                <br />

                <label>Matricula: </label>
                <input
                    className="p-1 rounded"
                    type="text"
                    disabled={props.edit}
                    defaultValue="BP3018318"
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

                <label>Período: </label>
                <input
                    className="p-1 rounded"
                    type="text"
                    disabled={props.edit}
                    defaultValue="5º"
                />

                <br />
                <br />

                <label>Identidade: </label>
                <input
                    className="p-1 rounded"
                    type="text"
                    disabled={props.edit}
                    defaultValue="11111111111"
                />

                <br />
                <br />

                <label>Data de nascimento: </label>
                <input
                    className="p-1 rounded"
                    type="date"
                    disabled={props.edit}
                    defaultValue="2003-05-16"
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