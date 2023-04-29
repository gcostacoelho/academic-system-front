import { Plus } from "phosphor-react";
import { DialogBox } from "../../DialogBox";
import { ContentBoxListaEspera } from "./ContentBoxListaEspera";


export function AtenderLista(props) {
    return (
        <div className="relative overflow-x-auto flex flex-col justify-center items-center">
            <h1 className="m-5 font-bold text-2xl">Atender lista de esperas</h1>

            <table className="w-1/2 text-sm text-center text-gray-500 dark:text-gray-400 m-4">
                <thead className="text-xs text-[#ffffff] uppercase bg-colorHeadTable dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Ação
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Disciplina
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-colorBodyTable">
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" className="flex justify-center items-center">
                            <div className="pt-2.5">
                                <DialogBox
                                    trigger={
                                        <Plus size={24} weight="bold" color="black"/>
                                    }
                                    content={
                                        <ContentBoxListaEspera 
                                            qtdAlunosLista='5'
                                            disc='Qualidade de Software'
                                            dataCriacao='2023-05-10'
                                        />
                                    }
                                    title={
                                        "Criar Turma"
                                    }
                                />
                            </div>
                        </td>
                        <td scope="row" className="px-6 py-4">
                            {/* data.disc */}
                            Qualidade de software
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}