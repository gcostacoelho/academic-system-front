import { useState, useEffect } from "react";
import { TabelaDisc } from "./Forms/TabelaDisc";
import axios from "axios";

export function FormInscricao() {
    const [disciplinas, setDisciplinas] = useState([]);

    useEffect(() => {
        axios('https://api.kanye.rest/').then(resp => {
            console.log(resp.data);
            setDisciplinas(resp.data)
        })

    }, []);


    function handlePostApi(event) {
        event.preventDefault();

        alert('cadastro')
    }

    return (
        <form onSubmit={handlePostApi} className="m-7 h-screen overflow-auto">

            <div className="flex flex-col justify-center items-center">
                {/* {
                    disciplinas.map(disciplina => {
                        return (
                        <TabelaDisc
                                sigla="{disciplina.sigla}"
                                disc="{disciplina.disc}"
                                turno="{disciplina.turno}"
                                horario="{disciplina.horario}"
                                local="{disciplina.local}"
                                prof="{disciplina.prof}"
                            />
                        );
                    })
                }
                {
                    disciplinas.length == 0 && <h3>{disciplinas}</h3>
                } */}

                <TabelaDisc
                    sigla="{disciplina.sigla}"
                    disc="{disciplina.disc}"
                    turno="{disciplina.turno}"
                    horario="{disciplina.horario}"
                    local="{disciplina.local}"
                    prof="{disciplina.prof}"
                />

                <div className="flex gap-10 my-4">
                    <button className="bg-blue-500 p-1 rounded" type="submit">Inscrever</button>
                    <button className="bg-blue-500 p-1 rounded" type="reset">Limpar disciplinas</button>
                </div>
            </div>
        </form>
    );
}