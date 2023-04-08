import { useState, useEffect } from "react";
import { TabelaDisc } from "../Forms/TabelaDisc";
import axios from "axios";

export function FormInscricao() {
    const [disciplinas, setDisciplinas] = useState([]);

    useEffect(() => {
        /*Api aleatória que retorna um array de frases */
        axios('https://api.breakingbadquotes.xyz/v1/quotes/0').then(resp => {
            setDisciplinas(resp.data)
        })
    }, [])

    function handlePostApi(event) {
        event.preventDefault();

        alert('cadastro')
    }

    return (
        <form onSubmit={handlePostApi} className="m-7 h-screen overflow-auto">

            <div>
                {
                    disciplinas.length > 0 && disciplinas.map((disciplina) => {
                        return (
                            <div className="flex flex-col justify-center items-center">
                                <TabelaDisc
                                    sigla={disciplina.sigla}
                                    disc={disciplina.disc}
                                    turno={disciplina.turno}
                                    horario={disciplina.horario}
                                    local={disciplina.local}
                                    prof={disciplina.prof}
                                />

                                <div className="flex gap-10 my-4">
                                    <button className="bg-blue-500 p-1 rounded" type="submit">Inscrever</button>
                                    <button className="bg-blue-500 p-1 rounded" type="reset">Limpar disciplinas</button>
                                </div>
                            </div>
                        )
                    })
                }

                {
                    /*Essa condição é especifica por conta da API que está sendo utilizada, dps irá mudar para quando o length for = 0*/
                    disciplinas[0] == "0" && <h3 className="flex justify-center">Não há matérias para ofertar</h3>
                }
            </div>
        </form>
    );
}