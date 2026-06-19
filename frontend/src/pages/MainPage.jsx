import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../components/Header";
import { PetCards } from "../components/PetCards";
import { SideBar } from "../components/SideBar";

import dog1 from "../assets/dog.jpg";
import dog2 from "../assets/dog2.jpg";
import dog3 from "../assets/dog3.jpg";
import dog4 from "../assets/dog4.jpg";

const pets = [
    {
        imagem: dog1,
        nome: "Pirulito",
        descricao: "Cachorro que come pirulito pirimpimpim muito carinhoso manhoso e engraçado",
        tipo: "Cachorro",
        raca: "pirulito",
        ong: "Save",
        endereco: "Corpus Crist"
    },
    {
        imagem: dog2,
        nome: "Dog Marley",
        descricao: "cachorro relaxado estilo bob marley",
        tipo: "Cachorro",
        raca: "Maconha",
        ong: "Omg",
        endereco: "Damn"
    },
    {
        imagem: dog3,
        nome: "Botudo",
        descricao: "cachorro engraçado e estiloso",
        tipo: "Cachorro",
        raca: "bota",
        ong: "Botina",
        endereco: "CIC"
    },
    {
        imagem: dog4,
        nome: "Doginstein",
        descricao: "cachorro genial e divertido",
        tipo: "Cachorro",
        raca: "inteligente",
        ong: "Genio",
        endereco: "Av. Platao"
    }
];

export const MainPage = () => {

    const [indice, setIndice] = useState(0);
    const [direcao, setDirecao] = useState("");
    const [petsCurtidos, setPetsCurtidos] = useState([]);

    // DEBUG: ver curtidos
    useEffect(() => {
        console.log("🐶 Pets curtidos:", petsCurtidos);
    }, [petsCurtidos]);

    const proximoPet = (lado) => {
        console.log("Click:", lado);

        setDirecao(lado);

        // adiciona nos curtidos
        if (lado === "like") {
            setPetsCurtidos((prev) => [...prev, pets[indice]]);
        }

        // troca de pet
        setTimeout(() => {
            setIndice((prev) =>
                prev === pets.length - 1 ? 0 : prev + 1
            );

            setDirecao("");
        }, 300);
    };

    return (
        <main className="w-full h-screen bg-[#f5f7fb]">

            <Header />

            <div className="w-full flex">

                <SideBar />

                <section className="flex-1 flex items-center justify-center bg-blue-100">

                    <PetCards
                        pet={pets[indice]}
                        proxPet={proximoPet}
                        direcao={direcao}
                    />

                </section>

            </div>

        </main>
    );
};