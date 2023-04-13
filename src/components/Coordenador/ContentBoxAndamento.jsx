import axios from "axios";
import { useEffect, useState } from "react";

export function ContentBoxAndamento(props) {
    const [alunosInsc, setAlunosInsc] = useState([])

    { /*useEffect(() => {
        axios('', {
            params: {
                disciplina: props.disciplina
            }
        }).then(resp => {
            setAlunosInsc(resp.data)
        });
    }, []);
    */}

    useEffect(() => {
        axios('https://api.breakingbadquotes.xyz/v1/quotes/0').then(resp => {
            setAlunosInsc(resp.data)
        });
    }, [])


    return (
        <div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Data de inscrição
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nome do aluno
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Matricula
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        alunosInsc > 0 && alunosInsc.map((aluno) => {
                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td scope="row" className="px-6 py-4">
                                        {aluno.dataInsc}
                                    </td>
                                    <td scope="row" className="px-6 py-4">
                                        {aluno.nomeAluno}
                                    </td>
                                    <td scope="row" className="px-6 py-4">
                                        {aluno.matricula}
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}