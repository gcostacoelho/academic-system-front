export function PreRequisitos(props) {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-4/5 text-sm text-left text-gray-500 dark:text-gray-400 mt-3">

                <thead className="text-xs text-[#ffffff] uppercase bg-colorHeadTable dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Sigla
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Disciplina
                        </th>
                    </tr>
                </thead>

                <tbody className="bg-colorBodyTable">
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4">
                            {/* {props.sigla} */}
                            AOO
                        </th>
                        <td scope="row" className="px-6 py-4">
                            {/* {props.disc} */}
                            Análise orientada a Objetos
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
}