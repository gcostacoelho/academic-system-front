import axios from "axios";
import { useState, useEffect } from "react";
import { TabelaDisc } from "./TabelaDisc";

export function FormCancelaInsc() {
    const [disciplinas, setDisciplinas] = useState([]);

    useEffect(() => {
        axios('https://api.breakingbadquotes.xyz/v1/quotes/0').then(resp => {
            setDisciplinas(resp.data)
        });
    }, []);


    function handlePostApi(event) {
        event.preventDefault();

        alert("Vazio");
    }


    return (
        <form onSubmit={handlePostApi} className="m-7 h-screen overflow-auto">
            <div>
                {
                    disciplinas.length > 0 && disciplinas.map((disciplina) => {
                        return (
                            <div>
                                <TabelaDisc
                                    sigla={disciplina.sigla}
                                    disc={disciplina.disc}
                                    turno={disciplina.turno}
                                    horario={disciplina.horario}
                                    local={disciplina.local}
                                    prof={disciplina.prof}
                                />
                                <div className="flex flex-row justify-center items-center gap-10 my-4">
                                    <button className="bg-colorBtnDanger p-2 rounded text-[#ffffff] font-medium" type="submit">Cancelar disciplinas</button>
                                    <button className="bg-colorBtnAlert p-2 rounded text-[#ffffff] font-medium" type="reset">Limpar</button>
                                </div>
                            </div>
                        );
                    })
                }

                {
                    /*Essa condição é especifica por conta da API que está sendo utilizada, dps irá mudar para quando o length for = 0*/
                    disciplinas[0] == "0" && 
                        <h3 className="flex justify-center font-semibold">Você não possui matérias na qual possa cancelar</h3>
                }
            </div>
        </form>
    );
}