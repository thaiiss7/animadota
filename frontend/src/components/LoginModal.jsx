import { useNavigate } from "react-router-dom";

export const LoginModal = () => {
    const navigate = useNavigate()

    return(
        <>
            <main className="flex flex-col items-center justify-center text-white w-full gap-8">
                <h1 className="text-3xl">Login</h1>

                <section className="w-full">
                    <h1 className="self-start text-xl">Username</h1>
                    <input className="self-start p-3 bg-[#183b64] w-full rounded-2xl " type="text" placeholder="Digite seu username"/>
                </section>

                <section className="w-full">
                    <h1 className="self-start text-xl">Senha</h1>
                    <input className="self-start p-3 bg-[#183b64] w-full rounded-2xl " type="password" placeholder="Digite sua senha"/>
                </section>

                <button className="bg-[#183b64] px-6 py-2 rounded-2xl" onClick={() => navigate("/main")}>
                    Entrar
                </button>

                
            </main>
        </>
    );
}