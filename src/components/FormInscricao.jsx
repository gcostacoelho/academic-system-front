import { TabelaDisc } from "./Forms/TabelaDisc";

export function FormInscricao() {

    function handlePostApi(event) {
        event.preventDefault();

        alert('cadastro')
    }

    return (
        <form onSubmit={handlePostApi} className="m-7 h-screen overflow-auto">

            <div className="flex flex-col justify-center items-center">
                <TabelaDisc
                    sigla="QSW1"
                    disc="Qualidade de software"
                    turno="Noturno"
                    horario="19:00-22:35"
                    local="A405"
                    prof="Wendramel"
                />

                <div className="flex gap-10 my-4">
                    <button className="bg-blue-500 p-1 rounded" type="submit">Inscrever</button>
                    <button className="bg-blue-500 p-1 rounded" type="reset">Limpar disciplinas</button>
                </div>
            </div>
        </form>
    );
}