import { useState } from "react";
import { AndamentoInsc } from "../components/Coordenador/Insc/AndamentoInsc";
import { VisualizaAlunoGeral } from "../components/Coordenador/VisualizaAlunosGeral";
import { VisualizaDiscGeral } from "../components/Coordenador/VisualizaDiscGeral";

export default function HomeCoord() {
    const [state, setState] = useState('home')

    return (
        <div className="flex">
            <div className="bg-red-700 p-2 gap-3 flex flex-col h-screen w-1/5 ">
                <h3 className="text-white text-center">
                    <b>Sistema de Controle Acadêmico</b>
                </h3>

                <button
                    onClick={() => setState('home')}
                    className="bg-slate-500 rounded p-1 text-white hover:bg-slate-700">Home
                </button>

                <button
                    onClick={() => setState('andamento_inscricao')}
                    className="bg-slate-500 rounded p-1 text-white hover:bg-slate-700">Andamento de inscrições
                </button>

                <button
                    onClick={() => setState('atender_lista')}
                    className="bg-slate-500 rounded p-1 text-white hover:bg-slate-700">Atender lista de espera
                </button>

                <button
                    onClick={() => setState('disciplinas')}
                    className="bg-slate-500 rounded p-1 text-white hover:bg-slate-700">Disciplinas cadastradas
                </button>

                <button
                    onClick={() => setState('alunos_cadastrados')}
                    className="bg-slate-500 rounded p-1 text-white hover:bg-slate-700">Alunos cadastrados
                </button>
            </div>

            <div className='container h-screen overflow-hidden'>
                {state == 'home' && <h3>Home</h3>}
                {state == 'andamento_inscricao' && <AndamentoInsc />}
                {state == 'atender_lista' && <h3>atender_lista</h3>}
                {state == 'disciplinas' && <VisualizaDiscGeral />}
                {state == 'alunos_cadastrados' && <VisualizaAlunoGeral />}
            </div>

        </div>
    );
}