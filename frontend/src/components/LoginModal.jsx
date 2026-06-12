export const LoginModal = () => {
    return(
        <>
            <main className="flex flex-col items-center justify-center text-white w-[70%] gap-8">
                <h1 className="text-3xl">Login</h1>

                <section className="w-full">
                    <h1 className="self-start text-xl">Email</h1>
                    <input className="self-start p-3 bg-[#183b64] w-full rounded-2xl " type="email" placeholder="Digite seu e-mail"/>
                </section>

                <section className="w-full">
                    <h1 className="self-start text-xl">Senha</h1>
                    <input className="self-start p-3 bg-[#183b64] w-full rounded-2xl " type="password" placeholder="Digite sua senha"/>
                </section>

                <button>
                    Entrar</button>

                
            </main>
        </>
    );
}