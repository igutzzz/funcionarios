"use client"
import Link from "next/link";
import {useState, useEffect} from "react";
import { FiPlus } from "react-icons/fi";
import Menu from "./components/Menu";


export default function Home() {

  const [funcionarios, setFuncionarios] = useState([])

  useEffect(()=> {
    fetch("https://129.148.27.50/api/funcionario")
    .then(res => res.json())
    .then(data => setFuncionarios(data))

    console.log(funcionarios)
  }, [])
  return (
    <main className="p-8 relative">
      <nav className="flex items-center justify-between">
        <h1 className="font-extrabold text-5xl">Funcionários</h1>
        <FiPlus size="32px" />
      </nav>
      <div className="mt-4">
        {funcionarios.map(item => {
          return <Link href={`/funcionario/${item.id}`} key={item.id}>
            <div className="mb-2 hover:cursor-pointer hover:bg-slate-200 transition-all p-2">
              <h2 className="text-3xl font-bold">{item.nome}</h2>
              <h3>{item.cargo}</h3>
              <h4 className="text-sm text-slate-500">{item.email}</h4>
            </div>
          </Link>
        })}
      </div>

    </main>
  )
}
