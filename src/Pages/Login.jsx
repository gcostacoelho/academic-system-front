import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [inputs, setInputs] = useState({})
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }))
    }

    function handleAuthApi(event) {
        event.preventDefault();

        if (inputs.username == 'coord') {
            navigate('coord')
        }
        else if (inputs.username == 'aluno') {
            navigate('aluno')
        }
    }

    return (
        <div className="flex justify-center items-center w-screen h-screen bg-colorBackground">
            <form onSubmit={handleAuthApi}>
                <div className='w-96 h-96 flex flex-col justify-center p-4 rounded-lg bg-colorMenus'>
                    <label className="text-[#ffffff]">Usuário:</label>
                    <div class="flex flex-col justify-center relative">
                        <input
                            required
                            className='rounded p-2 pl-8 bg-colorBackgroundInput'
                            type="text"
                            name="username"
                            value={inputs.username || ""}
                            onChange={handleChange}
                            maxLength={10}
                        />
                        <img src="src/assets/user-solid.svg" class="absolute mr-2 ml-3 w-3" alt="Search Icon"/>
                    </div>

                    <br />

                    <label className="text-[#ffffff] text">Senha:</label>
                    <div class="flex flex-col justify-center relative">
                        <input
                            required
                            className='rounded p-2 pl-8 bg-colorBackgroundInput'
                            type="password"
                            name="pass"
                            value={inputs.pass || ""}
                            onChange={handleChange}
                            maxLength={8}
                        />
                        <img src="src/assets/lock-solid.svg" class="absolute mr-2 ml-3 w-3" alt="Search Icon"/>
                    </div>
                    <div className='mt-8 flex flex-col justify-center '>
                        <button className='rounded bg-colorBtnSuccess p-2 text-[#ffffff] font-medium' type="submit">Acessar</button>
                    </div>

                </div>
            </form>
        </div>
    );
};
