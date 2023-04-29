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
                    className="p-1 rounded border-2"
                    type="text"
                    disabled={props.edit || false}
                    defaultValue={props.nomeAluno || ""}
                />

                <br />
                <br />

                <label>Matricula: </label>
                <input
                    className="p-1 rounded border-2"
                    type="text"
                    disabled={props.edit || false}
                    defaultValue={props.matricula || ""}
                />

                <br />
                <br />

                <label>Curso: </label>
                <input
                    className="p-1 rounded border-2"
                    type="text"
                    disabled={props.edit || false}
                    defaultValue={props.curso || ""}
                />

                <br />
                <br />

                <label>Período: </label>
                <input
                    className="p-1 rounded border-2"
                    type="text"
                    disabled={props.edit || false}
                    defaultValue={props.periodo || ""}
                />

                <br />
                <br />

                <label>Identidade: </label>
                <input
                    className="p-1 rounded border-2"
                    type="text"
                    disabled={props.edit || false}
                    defaultValue={props.ident || ""}
                />

                <br />
                <br />

                <label>Data de nascimento: </label>
                <input
                    className="p-1 rounded border-2"
                    type="date"
                    disabled={props.edit || false}
                    defaultValue={props.dataNascimento || ""}
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