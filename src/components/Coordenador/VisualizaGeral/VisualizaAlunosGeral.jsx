import { Eye, Pen, Trash } from "phosphor-react";
import { DialogBox } from "../../DialogBox";
import { FormAluno } from "../../Forms/FormAluno";
import { ConfirmaExclusao } from "../../ConfirmaExclusao";

export function VisualizaAlunoGeral() {
    return (
        <div>
            <h1 className="flex justify-center m-5 font-bold text-2xl">Alunos</h1>
            <div className="mr-28 flex justify-end items-end">
                <DialogBox
                    trigger={
                        <button className="p-2 bg-colorBtnSuccess rounded text-[#ffffff] font-medium">Novo aluno</button>
                    }
                    content={
                        <FormAluno
                            edit={false}
                            nameButton="Criar" 
                        />
                    }
                    title={
                        "Cadastrar Aluno"
                    }
                />
            </div>
            <div className="relative overflow-x-auto flex flex-col justify-center items-center">
                <table className="w-4/5 text-sm text-left text-gray-500 dark:text-gray-400 m-4">

                    <thead className="text-xs text-[#ffffff] uppercase bg-colorHeadTable dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 flex justify-center items-baseline">
                                Ações
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Matricula
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nome
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Curso
                            </th>
                        </tr>
                    </thead>

                    <tbody className="bg-colorBodyTable">
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td scope="row" className="w-[100px] px-6 py-3">
                                <div className="flex justify-center items-baseline gap-2">
                                    <DialogBox
                                        trigger={
                                            <Eye size={24} color="black" />
                                        }
                                        content={
                                            <FormAluno
                                                edit={true}
                                            />
                                        }
                                        title={
                                            "Visualizar Aluno"
                                        }
                                    />
                                    <DialogBox
                                        trigger={
                                            <Pen size={24} color="black" />
                                        }
                                        content={
                                            <FormAluno
                                                edit={false}
                                                nameButton="Atualizar"
                                            />
                                        }
                                        title={
                                            "Atualizar Aluno"
                                        }
                                    />
                                    <ConfirmaExclusao
                                        trigger={
                                            <Trash size={24} color="black" />
                                        }
                                    />
                                </div>
                            </td>
                            <td scope="row" className="px-6 py-4">
                                BP3018318
                            </td>
                            <td scope="row" className="px-6 py-4">
                                Gustavo Costa Coelho
                            </td>
                            <td scope="row" className="px-6 py-4">
                                ADS
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
}