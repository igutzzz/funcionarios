"use client"

import { useEffect, useState } from "react"

export default function Funcionario({params}) {
    const [funcionario, setFuncionario] = useState({})
    useEffect(() => {
        async function getData(){
            await fetch(`http://129.148.27.50/api/funcionario/${params.id}`)
            .then(res => res.json())
            .then(res => setFuncionario(res))
        }
    }, [])
    return (
        <div>
            <h1>{funcionario.nome}</h1>
            <h2>{funcionario.cargo}</h2>
            <div>
                <p>CPF: {funcionario.cpf}</p>
                <p>RG: {funcionario.rg}</p>
            </div>
        </div>
    )
}