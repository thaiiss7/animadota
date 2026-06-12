import { useState } from "react"

import cancel from "../assets/close.png"
import userbase from "../assets/user-base.jpg"

import leftazul from "../assets/left-blue.png"
import rightazul from "../assets/right-blue.png"

export const EditProfile = ({
    aberto,
    fechar,
    img,
    nome,
    email,
    tel,
    tp_residencia,
    endereco,
    bio,
    casa,
    preferencia
}) => {

    if (!aberto) return null;

    const [indice, setIndice] = useState(0);

    const proximo = () => {
        setIndice((prev) =>
            prev === casa.length - 1 ? 0 : prev + 1
        );
    }

    const [novoNome, setNovoNome] = useState(nome);
    const [novoEmail, setnovoEmail] = useState(email);
    const [novoTel, setnovoTel] = useState(tel);
    const [novotpResidencia, setnovotpResidencia] = useState(tp_residencia);
    const [novoEndereco, setNovoEndereco] = useState(endereco);
    const [novoBio, setnovoBio] = useState(bio);

    return (
        <main className="w-full h-screen fixed inset-0 bg-black/40 flex items-center justify-center">

            <div className="flex flex-col w-[40%] h-[75%] bg-white items-center rounded-2xl p-4 shadow-lg border border-gray-200">

                {/* botão fechar */}
                <img
                    src={cancel}
                    alt=""
                    onClick={fechar}
                    className="self-end w-[10%] cursor-pointer"
                />

                <section className="flex flex-col items-center justify-center w-full gap-8">

                    <section className="flex items-center justify-center gap-10 w-full">

                        {/* foto usuário */}
                        <div className="flex justify-center items-center w-[25%]">
                            <img
                                src={img}
                                alt=""
                                className="w-40 h-40 object-cover border-2 border-[#21528A] rounded-2xl"
                            />
                        </div>

                        {/* fotos casa */}
                        <div className="flex items-center justify-center gap-3 w-[50%]">

                            <img
                                src={leftazul}
                                alt=""
                                onClick={proximo}
                                className="w-8 cursor-pointer"
                            />

                            <img
                                src={casa[indice]}
                                alt=""
                                className="w-50 h-40 object-cover rounded-xl border border-[#183b64]"
                            />

                            <img
                                src={rightazul}
                                alt=""
                                onClick={proximo}
                                className="w-8 cursor-pointer"
                            />
                        </div>

                    </section>

                    <div className="flex flex-col w-full gap-3">

                        <div className="flex gap-3">

                            <div className="w-1/2">
                                <h1 className="font-bold text-[#183b64]">Nome:</h1>
                                <input
                                    value={novoNome}
                                    onChange={(e) => setNovoNome(e.target.value)}
                                    className="w-full p-1 border-b border-gray-300 focus:border-[#21528A] outline-none"
                                />
                            </div>

                            <div className="w-1/2">
                                <h1 className="font-bold text-[#183b64]">Email:</h1>
                                <input
                                    value={novoEmail}
                                    onChange={(e) => setnovoEmail(e.target.value)}
                                    className="w-full p-1 border-b border-gray-300 focus:border-[#21528A] outline-none"
                                />
                            </div>

                        </div>

                        <div className="flex gap-3">

                            <div className="w-1/2">
                                <h1 className="font-bold text-[#183b64]">Telefone:</h1>
                                <input
                                    value={novoTel}
                                    onChange={(e) => setnovoTel(e.target.value)}
                                    className="w-full p-1 border-b border-gray-300 focus:border-[#21528A] outline-none"
                                />
                            </div>

                            <div className="w-1/2">
                                <h1 className="font-bold text-[#183b64]">Endereço:</h1>
                                <input
                                    value={novoEndereco}
                                    onChange={(e) => setNovoEndereco(e.target.value)}
                                    className="w-full p-1 border-b border-gray-300 focus:border-[#21528A] outline-none"
                                />
                            </div>

                        </div>

                        <div>
                            <h1 className="font-bold text-[#183b64]">Tipo Residência:</h1>
                            <input
                                value={novotpResidencia}
                                onChange={(e) => setnovotpResidencia(e.target.value)}
                                className="w-full p-1 border-b border-gray-300 focus:border-[#21528A] outline-none"
                            />
                        </div>

                        <div>
                            <h1 className="font-bold text-[#183b64]">Bio:</h1>
                            <textarea
                                rows={3}
                                value={novoBio}
                                onChange={(e) => setnovoBio(e.target.value)}
                                className="w-full border-b border-gray-300 focus:border-[#21528A] outline-none resize-none"
                            />
                        </div>

                    </div>

                    <button className="p-2 bg-[#21528A] hover:bg-[#1c4e7f] transition w-[40%] text-white text-xl rounded-2xl">
                        Salvar
                    </button>

                </section>
            </div>
        </main>
    );
}