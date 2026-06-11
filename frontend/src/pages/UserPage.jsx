// tipo residencia, endereco, bio, preferencia, idade
import { useState } from "react"

import { Header } from "../components/Header"
import { SideBar } from "../components/SideBar"

import userbase from "../assets/user-base.jpg"

import left from "../assets/left.png"
import right from "../assets/right.png"

import casa1 from "../assets/foto-casa.jpg"
import casa2 from "../assets/foto-casa2.jpg"
import casa3 from "../assets/foto-casa3.jpg"

const fotos = [casa1, casa2, casa3]

export const UserPage = () => {
    const [indice, setIndice] = useState(0);

    const proximo = () => {
        setIndice((prev) =>
            prev === fotos.length - 1 ? 0 : prev + 1
        );
    }


    return (
        <>
            <main className="w-full h-screen">
                <Header/>

                <div className="w-full flex">

                    <SideBar/>

                    {/* Conteúdo */}
                    <section className="flex-1 flex items-center justify-center gap-30 text-white">

                        <section className="w-[35%] h-[80%] bg-[#21528A] rounded-3xl flex flex-col">

                            <div className="w-full p-10 flex flex-col gap-8">

                                <section className="flex w-[50%] gap-5">

                                    <img src={userbase} alt="" className="h-full"/>

                                    <section className="flex flex-col text-2xl text-white gap-2">
                                        <h1>Nome User - 29</h1>
                                        <h1 className="text-xl">testeuseremail@gmail.com</h1>
                                        <h1 className="text-xl">(41) 91234-6789</h1>
                                        <h1 className="text-xl">Tipo Residência: Casa</h1>
                                        <h1 className="text-xl">Endereço: Rua francisco beltrao 133</h1>
                                    </section>
                                    
                                </section>

                                <section className=" flex flex-col gap-2 text-2xl">
                                    <h1>Bio</h1>
  
                                    <h1 className="text-xl p-5 bg-[#183b64] rounded-xl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestias similique fugiat, 
                                        adipisci sit animi! Saepe numquam, laboriosam voluptates vero optio dignissimos dolorum at mollitia exercitationem consequuntur, architecto et non.
                                    </h1>

                                </section>

                                <section className=" flex flex-col text-2xl items-center">
                                    <button className="bg-[#183b64] w-[50%] p-2 rounded-2xl">Editar Informações</button>
                                </section>
                            </div>

                            

                        </section>

                        <section className="w-[35%] h-[80%] bg-[#21528A] rounded-3xl p-10">

                           <section className="p-10 flex items-center justify-around gap-5 h-75 w-full">

                                <img src={left} alt="" onClick={proximo} className="w-8 cursor-pointer" />

                                <img
                                    src={fotos[indice]}
                                    alt=""
                                    className="h-full object-cover rounded-xl"
                                />

                                <img src={right} alt="" onClick={proximo} className="w-8 cursor-pointer" />

                            </section>

                            <section className="text-2xl flex flex-col gap-5">
                                <h1>Minhas preferências</h1>

                                <section>
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div className="bg-[#183b64] p-2 rounded-xl">Gato</div>
                                        <div className="bg-[#183b64] p-2 rounded-xl">Cachorro</div>
                                    </div>
                                </section>
                            </section>

                        </section>
                       
                    </section>
                </div>

            </main>

        </>
    )

}