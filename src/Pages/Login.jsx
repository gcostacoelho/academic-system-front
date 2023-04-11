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
        <div className="flex justify-center items-center w-screen h-screen bg-gray-950">
            <form onSubmit={handleAuthApi}>
                <div className='w-96 h-96 flex flex-col justify-center p-4 rounded-lg bg-gray-800'>
                    <label className="text-white">Usuário:</label>
                    <input
                        required
                        className='rounded p-2'
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                    />

                    <br />

                    <label className="text-white text">Senha:</label>
                    <input
                        required
                        className='rounded p-2'
                        type="password"
                        name="pass"
                        value={inputs.pass || ""}
                        onChange={handleChange}
                    />
                    <div className='mt-4'>
                        <button className='rounded bg-green-600 p-2' type="submit">Log in</button>
                    </div>

                </div>
            </form>
        </div>
    );
};
