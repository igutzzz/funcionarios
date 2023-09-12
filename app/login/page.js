import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
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
                        <input type="email" name="email" id="email" className="px-4 py-3 bg-slate-300 rounded-md mb-8 mt-2 w-full" /> <br />
                        <label htmlFor="password" className="font-semibold">Senha</label> <br />
                        <input type="password" name="password" id="password" className="px-4 py-3 bg-slate-300 rounded-md mb-8 mt-2 w-full" />
                    </div>
                    <a href="#" className="font-semibold underline text-purple-600 mb-2 ">Esqueci minha senha</a> <br />
                    <button className={inter.className+" mt-12 bg-purple-600 w-full rounded-md text-center py-3 text-slate-50 transition-all ease-in-out hover:cursor-pointer hover:bg-purple-500"}>Acessar</button>
                </div>
            </div>
        </main>
    )
}