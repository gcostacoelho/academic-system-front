import axios from "axios";
import { useEffect, useState } from "react";

export function MenuAluno() {
    const [dataAluno, setDataAluno] = useState({})

    useEffect(() => {
        axios('https://api.breakingbadquotes.xyz/v1/quotes/0').then(resp => {
            setDataAluno(resp.data)
        })
    })

    return (
        <div className="p-5">

            <div className="bg-colorModal rounded p-5">
                <div>
                    <img
                        className="w-36 h-36 rounded-3xl mb-4"
                        src="src/assets/avatar.png"
                        alt="your-photo"
                    />

                    <div className="bg- rounded p-5 text-white">
                        <label>Nome: {dataAluno.nome}</label>
                        <br />
                        <label>Data de nascimento: {dataAluno.nascimento}</label>
                        <br />
                        <label>Curso: {dataAluno.curso}</label>
                        <br />
                        <label>Semestre: {dataAluno.semestre}</label>
                        <br />
                        <label>Prontuário: {dataAluno.prontuario}</label>
                    </div>
                </div>
            </div>

        </div>
    );
}