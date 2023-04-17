import { Eye, Pen, Trash } from "phosphor-react";
import { DialogBox } from "../DialogBox";
import { ConfirmaExclusao } from "../ConfirmaExclusao";
import { FormDisc } from "../Forms/FormDisc";

export function VisualizaDiscGeral() {
    return (
        <div>
            <h1 className="flex justify-center m-5 font-bold text-2xl">Disciplinas</h1>
            <div className="mr-28 flex justify-end items-end">
                <DialogBox
                    trigger={
                        <button className="p-1 bg-blue-500 rounded">Nova Disciplina</button>
                    }
                    content={
                        <FormDisc />
                    }
                />
            </div>
            <div className="relative overflow-x-auto flex flex-col justify-center items-center">
                <table className="w-4/5 text-sm text-left text-gray-500 dark:text-gray-400 m-4">

                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 flex justify-center items-baseline">
                                Ações
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Código
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nome
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Curso
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td scope="row" className="w-[100px] px-6 py-3">
                                <div className="flex justify-center items-baseline gap-2">
                                    <DialogBox
                                        trigger={
                                            <Eye size={24} color="black" />
                                        }
                                        content={
                                            <FormDisc
                                                edit={true}
                                            />
                                        }
                                    />
                                    <DialogBox
                                        trigger={
                                            <Pen size={24} color="black" />
                                        }
                                        content={
                                            <FormDisc
                                                edit={false}
                                            />
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
                                QSW
                            </td>
                            <td scope="row" className="px-6 py-4">
                                Qualidade de Software
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