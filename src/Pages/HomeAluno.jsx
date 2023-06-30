import { useState } from "react";
import { FormInscricao } from "../components/Aluno/FormInscricao";
import { FormCancelaInsc } from "../components/Aluno/FormCancelaInsc";
import { MenuAluno } from "../components/Aluno/MenuAluno";

export default function HomeAluno() {
    const [state, setState] = useState('start');

    return (
        <div className="flex">
            <div className="bg-colorMenus p-2 gap-3 flex flex-col h-screen w-1/5 ">
                <h3 className="text-[#ffffff] text-center">
                    <b>Sistema de Controle Acadêmico</b>
                </h3>

                <button
                    onClick={() => setState('start')}
                    className="bg-colorBtnMenu  rounded p-1 text-white hover:bg-slate-700">Home
                </button>

                <button
                    onClick={() => setState('register')}
                    className="bg-colorBtnMenu  rounded p-1 text-white hover:bg-slate-700">Inscrição de aulas
                </button>

                <button
                    onClick={() => setState('cancela_inscricao')}
                    className="bg-colorBtnMenu  rounded p-1 text-white hover:bg-slate-700">Cancelar inscrição
                </button>
            </div>

            <div className='container h-screen overflow-hidden bg-colorBackground'>
                {state == 'start' && <MenuAluno />}
                {state == 'register' && <FormInscricao />}
                {state == 'cancela_inscricao' && <FormCancelaInsc />}
            </div>

        </div>
    );
}