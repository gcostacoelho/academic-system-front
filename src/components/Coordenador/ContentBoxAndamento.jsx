export function ContentBoxAndamento(props) {
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
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" className="px-6 py-4">
                            {props.dataInsc}
                        </td>
                        <td scope="row" className="px-6 py-4">
                            {props.nomeAluno}
                        </td>
                        <td scope="row" className="px-6 py-4">
                            {props.matricula}
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
}