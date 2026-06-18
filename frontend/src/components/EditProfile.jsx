import { useState } from "react"

import cancel from "../assets/close.png"
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
    casa = [],
    preferencia
}) => {

    const [indice, setIndice] = useState(0)

    const [novoNome, setNovoNome] = useState(nome)
    const [novoEmail, setnovoEmail] = useState(email)
    const [novoTel, setnovoTel] = useState(tel)
    const [novotpResidencia, setnovotpResidencia] = useState(tp_residencia)
    const [novoEndereco, setNovoEndereco] = useState(endereco)
    const [novoBio, setnovoBio] = useState(bio)

    const proximo = () => {
        if (!casa.length) return
        setIndice((prev) => (prev === casa.length - 1 ? 0 : prev + 1))
    }

    const anterior = () => {
        if (!casa.length) return
        setIndice((prev) => (prev === 0 ? casa.length - 1 : prev - 1))
    }

    if (!aberto) return null

    return (
        <main className="w-full h-screen fixed inset-0 bg-black/40 flex items-center justify-center">

            <div className="flex flex-col w-[40%] h-[75%] bg-white items-center rounded-2xl p-4 shadow-lg">

                {/* fechar */}
                <img
                    src={cancel}
                    alt="fechar"
                    onClick={fechar}
                    className="self-end w-[10%] cursor-pointer"
                />

                <section className="flex flex-col w-full gap-6 overflow-y-auto">

                    {/* TOPO (FOTOS) */}
                    <section className="flex items-center justify-center gap-10 w-full">

                        {/* FOTO PERFIL FIXA */}
                        <div className="w-40 h-40 shrink-0 rounded-2xl overflow-hidden border-2 border-[#21528A]">
                            <img
                                src={img}
                                alt="perfil"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* CARROSSEL CASA  */}
                        <div className="flex items-center gap-3">

                            <img
                                src={leftazul}
                                alt=""
                                onClick={anterior}
                                className="w-8 cursor-pointer shrink-0"
                            />

                            <div className="w-40 h-40 shrink-0 rounded-xl overflow-hidden border border-gray-300">
                                <img
                                    src={casa[indice]}
                                    alt="casa"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <img
                                src={rightazul}
                                alt=""
                                onClick={proximo}
                                className="w-8 cursor-pointer shrink-0"
                            />
                        </div>

                    </section>

                    <div className="flex flex-col gap-3 w-full">

                        <div className="flex gap-3">
                            <div className="w-1/2">
                                <h1 className="font-bold text-[#183b64]">Nome:</h1>
                                <input
                                    value={novoNome}
                                    onChange={(e) => setNovoNome(e.target.value)}
                                    className="w-full p-1 border-b outline-none"
                                />
                            </div>

                            <div className="w-1/2">
                                <h1 className="font-bold text-[#183b64]">Email:</h1>
                                <input
                                    value={novoEmail}
                                    onChange={(e) => setnovoEmail(e.target.value)}
                                    className="w-full p-1 border-b outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <div className="w-1/2">
                                <h1 className="font-bold text-[#183b64]">Telefone:</h1>
                                <input
                                    value={novoTel}
                                    onChange={(e) => setnovoTel(e.target.value)}
                                    className="w-full p-1 border-b outline-none"
                                />
                            </div>

                            <div className="w-1/2">
                                <h1 className="font-bold text-[#183b64]">Endereço:</h1>
                                <input
                                    value={novoEndereco}
                                    onChange={(e) => setNovoEndereco(e.target.value)}
                                    className="w-full p-1 border-b outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <h1 className="font-bold text-[#183b64]">Tipo Residência:</h1>
                            <input
                                value={novotpResidencia}
                                onChange={(e) => setnovotpResidencia(e.target.value)}
                                className="w-full p-1 border-b outline-none"
                            />
                        </div>

                        <div>
                            <h1 className="font-bold text-[#183b64]">Bio:</h1>
                            <textarea
                                rows={3}
                                value={novoBio}
                                onChange={(e) => setnovoBio(e.target.value)}
                                className="w-full border-b outline-none resize-none"
                            />
                        </div>

                    </div>

                    <button className="p-2 bg-[#21528A] text-white rounded-2xl w-[40%] self-center">
                        Salvar
                    </button>

                </section>

            </div>

        </main>
    )
}