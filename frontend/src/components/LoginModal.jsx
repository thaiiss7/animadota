export const LoginModal = () => {
    return(
        <>
            <main className="flex flex-col items-center justify-center text-white">
                <h1 className="text-3xl">Login</h1>
                <h1>Email</h1>
                <input type="email" placeholder="Digite seu e-mail"/>

                <h1>Senha</h1>
                <input type="password" placeholder="Digite sua senha"/>

                <button>Entrar</button>

                
            </main>
        </>
    );
}