import { useState, useEffect } from "react";
import { TabelaDisc } from "./TabelaDisc";
import axios from "axios";

export function FormInscricao() {
    const [ofertas, setOfertas] = useState([]);
    const [data, setData] = useState();

    const childToParent = (childData) => {
        setData(childData.target.value);
    }

    useEffect(() => {
        const body = {
            "idAluno": 1,
            "nomeAluno": "Jose Alfonso",
            "cpf": "51050601709",
            "protuarioAluno": "BP301845",
            "dataNasc": "2023-05-01",
            "cursoMatriculado": {
                "idCurso": 1,
                "nomeCurso": "Analise e Desenvolvimento de Sistemas",
                "siglaCurso": "ADS",
                "duracaoCurso": 6
            },
            "disciplinasConcluidas": [
                {
                    "idDisciplina": 1,
                    "siglaDisc": "GPR",
                    "nomeDisc": "Gestão de Projetos",
                    "credito": 4
                }
            ]
        }
        axios.post('http://127.0.0.1:5000/lista-ofertas', body).then(resp => {
            setOfertas(resp.data.ofertas);
        })
    }, [])

    async function handlePostApi(event) {
        event.preventDefault();

        const body = {}

        await axios('https://api.breakingbadquotes.xyz/v1/quotes/2').then(resp => {
            setData(resp.data[0].quote);

        });

        confirm(data)
        console.log(data);
    }

    return (
        <form onSubmit={handlePostApi} className="m-7 h-screen overflow-auto">
            <div>
                {
                    ofertas.length > 0 && ofertas.map((oferta) => {

                        const turmaInfo = oferta.turma

                        return (
                            <div>
                                <TabelaDisc
                                    idOferta={oferta.idOferta}
                                    sigla={oferta.codigoOferta}
                                    disc={oferta.disciplina.nomeDisc}
                                    horario={`${turmaInfo.horario.diaSemana.toUpperCase()}: ${turmaInfo.horario.horaInicio} - ${turmaInfo.horario.horaFim}`}
                                    local={turmaInfo.sala.local}
                                    prof={turmaInfo.professor.nomeProf}
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
                    ofertas[0] == "0" && <h3 className="flex justify-center font-semibold">Não há matérias para ofertar</h3>
                }
            </div>
        </form>
    );
}