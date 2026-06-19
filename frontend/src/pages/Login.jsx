import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginModal } from "../components/LoginModal";
import { RegisterModal } from "../components/RegisterModal";

export const Login = () => {

    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();


    return (
        <main className="flex items-center justify-center bg-blue-200 w-full h-screen">
            <div className="w-[40%] h-fit bg-[#21528A] rounded-2xl flex flex-col items-center text-white p-8">

                {isLogin ? (
                    <LoginModal
                        onChangeView={() => setIsLogin(false)}
                    />
                ) : (
                    <RegisterModal onChangeView={() => setIsLogin(true)} />
                )}

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
    );
};