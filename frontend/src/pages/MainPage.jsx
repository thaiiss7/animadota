import { useState } from "react"

import { Header } from "../components/Header"
import { PetCards } from "../components/PetCards"
import { SideBar } from "../components/SideBar"


import dog1 from "../assets/dog.jpg"
import dog2 from "../assets/dog2.jpg"
import dog3 from "../assets/dog3.jpg"
import dog4 from "../assets/dog4.jpg"

const pets = [
    {
        imagem: dog1,
        nome: "Pirulito",
        descricao: "cachorro que come pirulito pirimpimpim muito carinhoso manhoso e engracado hahahahahahahaha"
    },
    {
        imagem: dog2,
        nome: "Dog Marley",
        descricao: "cachorro que é o bob marley omg panpanrampaaaaaan pan param muito CALMO por assim dizer"
    },
    {
        imagem: dog3,
        nome: "Botudo",
        descricao: "cachorro que usa bota maior que a pata dele e é muito bonitinho piriri pororo"
    },
    {
        imagem: dog4,
        nome: "Doginstein",
        descricao: "cachorro BRI LHAN TE e que vai amar todas as suas genialidades"
    }
]

export const MainPage = () => {

    const [indice, setIndice] = useState(0);
    const [direcao, setDirecao] = useState("");

    const proximoPet = (lado) => {
        setDirecao(lado);

        setTimeout(() => {
            setIndice((prev) =>
                prev === pets.length - 1 ? 0 : prev + 1
            );

            setDirecao("");
        }, 300);
    };

    return (
        <>
            <main className="w-full h-screen">
                <Header/>

                <div className="w-full flex">

                    <SideBar/>

                    {/* Conteúdo */}
                    <section className="flex-1 flex items-center justify-center bg-gray-700">
                        <PetCards pet={pets[indice]} proxPet={proximoPet} direcao={direcao}  />
                    </section>
                </div>

            </main>

        </>
    )

}