export function PreRequisitosEdit(props) {
    return (
        <div>
            <select
                id="disc1"
                name="preReqDisc1"
                placeholder="Selecione uma disciplina como pré requisito"
                className="py-3 px-4 text-sm placeholder:text-zinc-500 p-1 rounded border-2"
            >
                <option disabled defaultValue="" value="">Selecione uma disciplina como pré requisito</option>

                {/* {
                    games.map(game => {
                        return <option key={game.id} value={game.id}>{game.title}</option>
                    })
                } */}
            </select>
            <br /><br />
            <select
                id="disc2"
                name="preReqDisc2"
                placeholder="Selecione uma disciplina como pré requisito"
                className="py-3 px-4 text-sm placeholder:text-zinc-500 p-1 rounded border-2"
            >
                <option disabled defaultValue="" value="">Selecione uma disciplina como pré requisito</option>

                {/* {
                    games.map(game => {
                        return <option key={game.id} value={game.id}>{game.title}</option>
                    })
                } */}
            </select>
        </div>
    )
}