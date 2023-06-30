import { useState, useEffect } from "react";
import { TabelaDisc } from "./TabelaDisc";
import axios from "axios";

export function FormInscricao() {
    const [ofertas, setOfertas] = useState([]);
    const [data, setData] = useState([]);
    const bodyAluno = {
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
        "disciplinasConcluidas": []
    }

    const childToParent = (childData) => {
        const id = childData.target.value;

        const index = data.indexOf(id);
        if (index != -1) {
            data.splice(index, 1);

            setData(data)
        } else {
            setData([...data, id])
        }
    }

    useEffect(() => {
        axios.post('http://127.0.0.1:5000/lista-ofertas', bodyAluno)
            .then(resp => {
                setOfertas(resp.data.ofertas);
            })
    }, [])

    async function handlePostApi(event) {
        event.preventDefault();

        const bodyListaIds = {
            "listaIds": data
        }

        // Req para o endpoint que faz as validações de credito, lista de espera e choque de horario
        const response = await axios.post('http://127.0.0.1:5000/verifica-requisitos', bodyListaIds)
            .then(resp => {
                return resp;
            })
            .catch(error => {
                return error.response;
            })

        const respBody = response.data;

        if (response.status == 200) {

            if (respBody.ofertasIndisponiveis.length > 0) {
                respBody.ofertasIndisponiveis.map(async (lista) => {
                    const body = {
                        "aluno": bodyAluno,
                        "idOferta": lista.idOferta
                    }

                    if (confirm(`A disciplina ${lista.disciplina.nomeDisc} está cheia!\nDeseja ficar na lista de espera?`)) {
                        const resp = axios.post('http://127.0.0.1:5000/adicionar-lista-espera', body)
                            .then(resp => {
                                return resp;
                            })
                            .catch(error => {
                                return error.response;
                            });

                        resp.status == 200 ? alert("Adicionado a lista") : alert(resp.msg);
                    }
                });
            }

            // Confirma inscrição das disciplinas disponíveis
            if (respBody.ofertasDisponiveis.length > 0) {
                const body = {
                    "aluno": bodyAluno,
                    "listaIds": data
                }

                const response = await axios.post('http://127.0.0.1:5000/confirma-inscricao', body)
                    .then(resp => {
                        return resp;
                    })
                    .catch(error => {
                        return error.response;
                    });

                if (response.status == 200) {
                    return alert("Inscrições realizadas com sucesso");
                }
            }
        } else {
            if (respBody.info == "CHOQUE" || respBody.info == "LIMITE") {
                return alert(respBody.msg);
            }
        }

        return alert("Um erro aconteceu, tente novamente mais tarde");
    }

    return (
        <form onSubmit={handlePostApi} className="m-7 h-screen overflow-auto">
            <div>
                {
                    ofertas.length > 0 && ofertas.map((oferta) => {
                        const turmaInfo = oferta.turma;

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
                            </div>
                        );
                    })
                }

                {
                    ofertas.length == 0 && <h3 className="flex justify-center font-semibold">Não há matérias para ofertar</h3>
                }

                <div className="flex flex-row justify-center items-center gap-10 my-4">
                    <button
                        className="bg-colorBtnSuccess font-medium p-2 rounded text-[#ffffff]"
                        disabled={data.length > 0 ? false : true}
                        type="submit">Inscrever
                    </button>
                    <button className="bg-colorBtnAlert font-medium p-2 rounded text-[#ffffff]" type="reset">Limpar disciplinas</button>
                </div>
            </div>
        </form>
    );
}