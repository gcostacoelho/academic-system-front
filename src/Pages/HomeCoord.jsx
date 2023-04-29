import { useState } from "react";
import { AndamentoInsc } from "../components/Coordenador/Insc/AndamentoInsc";
import { VisualizaAlunoGeral } from "../components/Coordenador/VisualizaGeral/VisualizaAlunosGeral";
import { VisualizaDiscGeral } from "../components/Coordenador/VisualizaGeral/VisualizaDiscGeral";
import { AtenderLista } from "../components/Coordenador/ListaEspera/AtenderLista";

export default function HomeCoord() {
    const [state, setState] = useState('home')

    return (
        <div className="flex">
            <div className="bg-colorMenus p-2 gap-3 flex flex-col h-screen w-1/5 ">
                <h3 className="text-[#ffffff] text-center">
                    <b>Sistema de Controle Acadêmico</b>
                </h3>

                <button
                    onClick={() => setState('home')}
                    className="bg-colorBtnMenu rounded p-1 text-white hover:bg-slate-700">Home
                </button>

                <button
                    onClick={() => setState('andamento_inscricao')}
                    className="bg-colorBtnMenu rounded p-1 text-white hover:bg-slate-700">Andamento de inscrições
                </button>

                <button
                    onClick={() => setState('atender_lista')}
                    className="bg-colorBtnMenu rounded p-1 text-white hover:bg-slate-700">Atender lista de espera
                </button>

                <button
                    onClick={() => setState('disciplinas')}
                    className="bg-colorBtnMenu rounded p-1 text-white hover:bg-slate-700">Disciplinas cadastradas
                </button>

                <button
                    onClick={() => setState('alunos_cadastrados')}
                    className="bg-colorBtnMenu rounded p-1 text-white hover:bg-slate-700">Alunos cadastrados
                </button>
            </div>

            <div className='container h-screen overflow-hidden bg-colorBackground'>
                {state == 'home' && <h3>Home</h3>}
                {state == 'andamento_inscricao' && <AndamentoInsc />}
                {state == 'atender_lista' && <AtenderLista />}
                {state == 'disciplinas' && <VisualizaDiscGeral />}
                {state == 'alunos_cadastrados' && <VisualizaAlunoGeral />}
            </div>

        </div>
    );
}