import { useState } from 'react'
import axios from "axios";
import './styles/main.css';
import { FormInscricao } from './components/FormInscricao';

function App() {
    const [state, setState] = useState('start');

    return (
        <div className="flex">
            <div className="bg-red-700 p-2 gap-3 flex flex-col h-screen w-1/5 ">
                <h3>Hello World</h3>
                <div ></div>
                <button
                    onClick={() => setState('start')}
                    className="bg-slate-500 rounded p-1 text-white hover:bg-slate-700">Home
                </button>

                <button
                    onClick={() => setState('register')}
                    className="bg-slate-500 rounded p-1 text-white hover:bg-slate-700">Inscrição de aulas
                </button>

                <button
                    onClick={() => setState('teste2')}
                    className="bg-slate-500 rounded p-1 text-white hover:bg-slate-700">Teste 2
                </button>

                <button
                    onClick={() => setState('teste3')}
                    className="bg-slate-500 rounded p-1 text-white hover:bg-slate-700">Teste 3
                </button>
            </div>

            <div className='container h-screen overflow-hidden'>
                {state == 'start' && <h3>Home</h3>}
                {state == 'register' && <FormInscricao />}
                {state == 'teste2'}
                {state == 'teste3'}
            </div>

        </div>
    );
}

export default App;
