import axios from "axios";
import { useEffect, useState } from "react";
import { DialogBox } from "../../DialogBox";
import { Eye } from "phosphor-react";
import { ContentBoxAndamento } from "./ContentBoxAndamento";

export function AndamentoInsc() {
    const [dataInsc, setDataInsc] = useState([]);

    useEffect(() => {
        axios('https://api.breakingbadquotes.xyz/v1/quotes/0').then(resp => {
            setDataInsc(resp.data)
        });

    }, [])

    return (
        <div className="relative overflow-x-auto flex flex-col justify-center items-center">
            <h1 className="m-5 font-bold text-2xl">Andamento de inscrições</h1>

            <table className="w-4/5 text-sm text-left text-gray-500 dark:text-gray-400 m-4">

                <thead className="text-xs text-[#ffffff] uppercase bg-colorHeadTable dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Professor
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Horário
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Local
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Situação
                        </th>
                    </tr>
                </thead>

                <tbody className="bg-colorBodyTable">
                    {
                        dataInsc.length > 0 && dataInsc.map((data) => {
                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td scope="row" className="flex justify-center items-center">
                                        <div className="pt-2.5">
                                            <DialogBox
                                                trigger={
                                                    <Eye size={24} color="black" />
                                                }
                                                content={
                                                    <ContentBoxAndamento
                                                        dataInsc="16/05/2023"
                                                        nomeAluno="Gustavo Costa Coelho"
                                                        matricula="BP3018318"
                                                    />
                                                }
                                            />
                                        </div>
                                    </td>

                                    <td scope="row" className="px-6 py-4">
                                        {/* data.prof */}
                                        Vendramel
                                    </td>

                                    <td scope="row" className="px-6 py-4">
                                        {/* data.horario */}
                                        19:00-22:35
                                    </td>

                                    <td scope="row" className="px-6 py-4">
                                        {/* data.local */}
                                        A402
                                    </td>

                                    <td scope="row" className="px-6 py-4">
                                        {/*
                                        data.situacao 
                                            ? Aberta 
                                            : Fechada
                                        */}
                                        Aberta
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