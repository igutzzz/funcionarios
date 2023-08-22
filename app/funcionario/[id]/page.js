"use client"

import { useEffect, useState } from "react"
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link"

export default function Funcionario({params}) {
    const [funcionario, setFuncionario] = useState({})
    useEffect(() => {
        fetch(`https://129.148.27.50/api/funcionario/${params.id}`)
        .then(res => res.json())
        .then(res => setFuncionario(res))
    }, [])

    let dataNascimento =  new Date(funcionario.data_nascimento)
    let nascimentoFormatado = `${dataNascimento.getDate()+1}/${dataNascimento.getMonth()+1}/${dataNascimento.getFullYear()}`

    let dataAdmissao = new Date(funcionario.data_admissao)
    let admissaoFormatada = `${dataAdmissao.getDate()+1}/${dataAdmissao.getMonth()+1}/${dataAdmissao.getFullYear()}`

    let dataDemissao = new Date(funcionario.data_demissao)
    let demissaoFormatada = `${dataDemissao.getDate()+1}/${dataDemissao.getMonth()+1}/${dataDemissao.getFullYear()}`
    return (
        <div className="p-8">
            <div className="mb-4">
                <Link href="/">
                    <FiArrowLeft size={30} className="hover:cursor-pointer hover:bg-slate-200 transition-all rounded-full" />
                </Link>
            </div>
           <div className="mb-4">
                <h1 className="font-bold text-5xl">{funcionario.nome}</h1>
                <h2 className="font-light text-xl text-slate-600">{funcionario.cargo}</h2>
           </div>
            <hr />
            <div className="my-4 text-lg">
                <h3 className="font-bold text-3xl mb-2">Dados pessoais</h3>
                <p><span className="font-semibold">CPF: </span>{funcionario.cpf}</p>
                <p><span className="font-semibold">RG: </span>{funcionario.rg}</p>
                <p><span className="font-semibold">Telefone: </span> {funcionario.telefone}</p>
                <p><span className="font-semibold">Endereço: </span>{funcionario.endereco}</p>
                <p><span className="font-semibold">Data de nascimento: </span>{nascimentoFormatado}</p>
            </div>
            <hr />
            <div className = "text-lg">
                <h3 className="font-bold text-3xl mt-4 mb-2">Dados empresariais</h3>
                <p><span className="font-semibold">Data de admissão: </span>{admissaoFormatada}</p>
                {funcionario.data_demissao == null ? <div></div> : <p><span className="font-semibold">Data de demissão: </span>{demissaoFormatada}</p>}
            </div>
        </div>
    )
}