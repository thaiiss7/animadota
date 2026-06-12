import { useState } from "react";

import { LoginModal } from "../components/LoginModal";
import { RegisterModal } from "../components/RegisterModal";

export const Login = () => {

    const [isLogin, setIsLogin] = useState(true);

    return(
        <>

            <main className="flex items-center justify-center bg-blue-200 w-full h-screen">

                <div className="w-[30%] h-[70%] bg-[#21528A] rounded-2xl flex flex-col items-center justify-center text-white">
                    {isLogin ? <LoginModal /> : <RegisterModal />}

                    <h1>
                    {isLogin ? (
                        <>
                            Não possui conta?{" "}
                            <span
                                className="cursor-pointer underline"
                                onClick={() => setIsLogin(false)}
                            >
                                Cadastre-se!
                            </span>
                        </>
                    ) : (
                        <>
                            Já possui conta?{" "}
                            <span
                                className="cursor-pointer underline"
                                onClick={() => setIsLogin(true)}
                            >
                                Faça login!
                            </span>
                        </>
                    )}
                </h1>
                </div>

            </main>

        </>
    );
}