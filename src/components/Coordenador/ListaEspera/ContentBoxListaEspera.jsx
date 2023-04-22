import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useState } from "react";

export function ContentBoxListaEspera(props) {
    const [weekDays, setWeekDays] = useState([]);
    const [data, setData] = useState([]);

    async function handlePostApi(event) {
        event.preventDefault();

        alert('Teste')
    }


    return (
        <form onSubmit={handlePostApi}>
            <div className='flex gap-6'>
                <label>Qtd de alunos na lista: {props.qtdAlunosLista}</label>
                <label>Data de criação: {props.dataCriacao}</label>
            </div>

            <br />

            <div>
                <label htmlFor="">Código da turma: </label>
                <input type="text" className='p-1 rounded' placeholder='Insira o código da turma' />
            </div>

            <br />

            <div>
                <div className="flex flex-col gap-2">
                    <label>Qual o dia da turma?</label>

                    <ToggleGroup.Root type="multiple" value={weekDays} className="flex flex-row gap-2" onValueChange={setWeekDays}>
                        <ToggleGroup.Item
                            disabled={weekDays.length == 0 || weekDays.includes('1') ? false : true}
                            value="1"
                            title="Segunda"
                            className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                        >
                            S
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            disabled={weekDays.length == 0 || weekDays.includes('2') ? false : true}
                            value="2"
                            title="Terça"
                            className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                        >
                            T
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            disabled={weekDays.length == 0 || weekDays.includes('3') ? false : true}
                            value="3"
                            title="Quarta"
                            className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                        >
                            Q
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            disabled={weekDays.length == 0 || weekDays.includes('4') ? false : true}
                            value="4"
                            title="Quinta"
                            className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                        >
                            Q
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            disabled={weekDays.length == 0 || weekDays.includes('5') ? false : true}
                            value="5"
                            title="Sexta"
                            className={`w-8 h-8 rounded  ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                        >
                            S
                        </ToggleGroup.Item>
                    </ToggleGroup.Root>
                </div>
                <br />
                <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="hourPlaying">Qual horário do dia?</label>
                    <div className="grid grid-cols-2 gap-2">
                        <input className='p-1 rounded' type="time" min="07:00" max="22:35" placeholder="De" id="HourSart" name="hoursStart" />
                        <input className='p-1 rounded' type="time" min="07:00" max="22:35" placeholder="Até" id="hourEnd" name="hourEnd" />
                    </div>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                    <label>Escolha o professor: </label>
                    <select
                        id="prof"
                        name="prof"
                        placeholder="Escolha o professor"
                        className="p-2 rounded text-sm placeholder:text-zinc-500"
                    >
                        <option defaultValue="" value="">Escolha o professor</option>
                        <option defaultValue="" value="">Vendramel</option>
                        <option defaultValue="" value="">Irineu</option>

                        {/*
                            data.map(game => {
                                return <option key={data.id} value={data.id}>{data.title}</option>
                            })
                        */}
                    </select>
                </div>

                <br />

                <div className="flex flex-col gap-2">
                    <label>Escolha a Sala: </label>
                    <select
                        id="prof"
                        name="prof"
                        placeholder="Escolha a Sala"
                        className="p-2 rounded text-sm placeholder:text-zinc-500"
                    >
                        <option defaultValue="" value="">Escolha a Sala</option>
                        <option defaultValue="" value="">A405</option>
                        <option defaultValue="" value="">B405</option>

                        {/*
                            data.map(game => {
                                return <option key={data.id} value={data.id}>{data.title}</option>
                            })
                        */}
                    </select>
                </div>

                <br />

                <div>
                    <label htmlFor="">Quantidade de alunos para essa turma: </label>
                    <input className='p-1 rounded w-1/6' placeholder='Qtd. Aluno' type="number" min="1" max={props.qtdAlunosLista} />
                </div>

                <div className="float-right">
                    <button type="submit" className="bg-blue-500 p-1 rounded">Cadastrar nova turma</button>
                </div>

            </div>
        </form >
    );
}