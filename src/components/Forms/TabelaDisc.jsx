export function TabelaDisc(props) {
    return (
        <div className="relative overflow-x-auto">

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            -
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Sigla
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Disciplina
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Turno
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Horário
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Local
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Professor
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 flex justify-center items-baseline">
                            <input
                                type="radio"
                                value={props.sigla}
                                name={props.sigla}
                                id="radioInput"
                            />
                        </th>
                        <th scope="row" className="px-6 py-4">
                            {props.sigla}
                        </th>
                        <td scope="row" className="px-6 py-4">
                            {props.disc}
                        </td>
                        <td scope="row" className="px-6 py-4">
                            {props.turno}
                        </td>
                        <td scope="row" className="px-6 py-4">
                            {props.horario}
                        </td>
                        <td scope="row" className="px-6 py-4">
                            {props.local}
                        </td>
                        <td scope="row" className="px-6 py-4">
                            {props.prof}
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
}