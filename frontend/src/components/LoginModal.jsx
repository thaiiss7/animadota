import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginModal = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (username === "ong") {
            navigate("/ong-main");
        } else {
            navigate("/main");
        }
    };

    return (
        <main className="flex flex-col items-center justify-center text-white w-full gap-8">

            <h1 className="text-3xl">Login</h1>

            <section className="w-full">
                <h1 className="text-xl">Username</h1>
                <input
                    className="p-3 bg-[#183b64] w-full rounded-2xl"
                    type="text"
                    placeholder="Digite seu username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </section>

            <section className="w-full">
                <h1 className="text-xl">Senha</h1>
                <input
                    className="p-3 bg-[#183b64] w-full rounded-2xl"
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </section>

            <button
                className="bg-[#183b64] px-6 py-2 rounded-2xl"
                onClick={handleLogin}
            >
                Entrar
            </button>

        </main>
    );
};