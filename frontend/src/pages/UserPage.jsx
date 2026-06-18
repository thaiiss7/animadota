import { useState } from "react"

import { Header } from "../components/Header"
import { SideBar } from "../components/SideBar"
import { EditProfile } from "../components/EditProfile"

import userbase from "../assets/user-base.jpg"
import left from "../assets/left.png"
import right from "../assets/right.png"

import casa1 from "../assets/foto-casa.jpg"
import casa2 from "../assets/foto-casa2.jpg"
import casa3 from "../assets/foto-casa3.jpg"

const fotos = [casa1, casa2, casa3]

export const UserPage = () => {

    const [modalAberto, setModalAberto] = useState(false)
    const [indice, setIndice] = useState(0)

    const proximo = () => {
        setIndice((prev) =>
            prev === fotos.length - 1 ? 0 : prev + 1
        )
    }

    return (
        <main className="h-screen w-full flex flex-col bg-blue-100">

            <Header />

            <div className="flex flex-1">

                <SideBar />

                {/* Conteudo */}
                <div className="flex-1 flex items-center justify-center p-6">

                    <EditProfile
                        aberto={modalAberto}
                        fechar={() => setModalAberto(false)}
                        img={userbase}
                        casa={fotos}
                        nome="The 67th aura farming"
                        email="aurafarming@gmail.com"
                        tel="(41) 91234-6789"
                        tp_residencia="The Beta House"
                        endereco="Rua Francisco Alfão 67"
                        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestias similique fugiat, adipisci sit animi!"
                        preferencia={["BluePill", "Beta"]}
                    />

                    {/* Card */}
                    <section className="flex gap-10 text-white w-full max-w-6xl items-center justify-center">

                        {/* Card Esquerda */}
                        <section className="w-[45%] h-[70vh] overflow-hidden bg-[#21528A] rounded-3xl flex flex-col hover:shadow-[0_0_50px_rgba(33,82,138,1)] transition-all">

                            <div className="p-10 flex flex-col gap-8">

                                {/* informações user */}
                                <section className="flex gap-5 items-center">

                                    <img src={userbase} alt="" className="h-30 w-30 rounded-full object-cover" />

                                    <div className="flex flex-col text-white gap-1">
                                        <h1 className="text-xl">Nome User - 29</h1>
                                        <h1 className="text-sm">testeuseremail@gmail.com</h1>
                                        <h1 className="text-sm">(41) 91234-6789</h1>
                                        <h1 className="text-sm">Tipo Residência: Casa</h1>
                                        <h1 className="text-sm">Endereço: Rua Francisco Beltrão 133</h1>
                                    </div>

                                </section>

                                <section className="flex flex-col gap-2">
                                    <h1 className="text-xl">Bio</h1>

                                    <p className="text-sm p-8 bg-[#183b64] rounded-xl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestias similique fugiat, adipisci sit animi!
                                    </p>

                                </section>

                                <button
                                    className="bg-[#183b64] w-[60%] p-2 rounded-2xl self-center"
                                    onClick={() => setModalAberto(true)}
                                >
                                    Editar Informações
                                </button>

                            </div>

                        </section>

                        {/* Card Direita */}
                        <section className="w-[45%] h-[70vh] bg-[#21528A] rounded-3xl p-10 flex flex-col justify-between hover:shadow-[0_0_50px_rgba(33,82,138,1)] transition-all">

                            {/* Fotos da casa */}
                            <div className="flex items-center justify-between">

                                <img
                                    src={left}
                                    alt=""
                                    onClick={() =>
                                        setIndice((prev) =>
                                            prev === 0 ? fotos.length - 1 : prev - 1
                                        )
                                    }
                                    className="w-8 cursor-pointer"
                                />

                                <img
                                    src={fotos[indice]}
                                    alt=""
                                    className="h-64 object-cover rounded-xl"
                                />

                                <img
                                    src={right}
                                    alt=""
                                    onClick={proximo}
                                    className="w-8 cursor-pointer"
                                />

                            </div>

                            {/* Preferencias */}
                            <div className="text-white">
                                <h1 className="text-xl mb-3">Minhas preferências</h1>

                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="bg-[#183b64] p-2 rounded-xl">Gato</div>
                                    <div className="bg-[#183b64] p-2 rounded-xl">Cachorro</div>
                                </div>
                            </div>

                        </section>

                    </section>

                </div>

            </div>

        </main>
    )
}