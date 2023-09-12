"use client"

import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    function doLogin() {
        fetch("https://api-cadastro-clientes.onrender.com/login", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                senha: senha
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(data=> console.log(data))
    }
      

    const handleEmail = e =>{
        setEmail(e.target.value)
    }

    const handleSenha = e => {
        setSenha(e.target.value)
    }
    
    return(
        <main className="flex items-center justify-center h-screen  bg-gradient-to-tr from-purple-700 via-indigo-500 to-indigo-500 ">
            <div className="p-12 shadow-lg border-2 rounded-lg bg-slate-100 mx-4">
                <div>
                    <h1 className="font-bold text-3xl mb-2">Login</h1>
                    <h2 className="font-regular text-xl">Faça seu login e aproveite as melhores ofertas!</h2>
                </div>
                <div className="mt-12">
                    <div>
                        <label htmlFor="email" className="font-semibold">E-mail</label> <br />
                        <input type="email" value={email} onChange={handleEmail} name="email" id="email" className="px-4 py-3 bg-slate-300 rounded-md mb-8 mt-2 w-full" /> <br />
                        <label htmlFor="password" className="font-semibold">Senha</label> <br />
                        <input type="password" value={senha} onChange={handleSenha} name="password" id="password" className="px-4 py-3 bg-slate-300 rounded-md mb-8 mt-2 w-full" />
                    </div>
                    <a href="#" className="font-semibold underline text-purple-600 mb-2 ">Esqueci minha senha</a> <br />
                    <button onClick={doLogin} className={inter.className+" mt-12 bg-purple-600 w-full rounded-md text-center py-3 text-slate-50 transition-all ease-in-out hover:cursor-pointer hover:bg-purple-500"}>Acessar</button>
                </div>
            </div>
        </main>
    )
}