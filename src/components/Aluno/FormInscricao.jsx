import { useState, useEffect } from "react";
import { TabelaDisc } from "./TabelaDisc";
import axios from "axios";

export function FormInscricao() {
    const [disciplinas, setDisciplinas] = useState([]);
    const [data, setData] = useState();

    const childToParent = (childData) => {
        setData(childData.target.value);
    }

    useEffect(() => {
        /*Api aleatória que retorna um array de frases */
        axios('https://api.breakingbadquotes.xyz/v1/quotes/0').then(resp => {
            setDisciplinas(resp.data);
        })
    }, [])

    function handlePostApi(event) {
        event.preventDefault();

        alert(data);
        setData();
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
                                    childToParent={childToParent}
                                />
                                <TabelaDisc
                                    sigla="{disciplina.sigla1}"
                                    disc={disciplina.disc}
                                    turno={disciplina.turno}
                                    horario={disciplina.horario}
                                    local={disciplina.local}
                                    prof={disciplina.prof}
                                    childToParent={childToParent}
                                />
                                <div className="flex flex-row justify-center items-center gap-10 my-4">
                                    <button className="bg-colorBtnSuccess font-medium p-2 rounded text-[#ffffff]" type="submit">Inscrever</button>
                                    <button className="bg-colorBtnAlert font-medium p-2 rounded text-[#ffffff]" type="reset">Limpar disciplinas</button>
                                </div>
                            </div>
                        );
                    })
                }

                {
                    /*Essa condição é especifica por conta da API que está sendo utilizada, dps irá mudar para quando o length for = 0*/
                    disciplinas[0] == "0" && <h3 className="flex justify-center font-semibold">Não há matérias para ofertar</h3>
                }
            </div>
        </form>
    );
}