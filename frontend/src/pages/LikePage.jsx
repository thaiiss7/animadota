import { Header } from "../components/Header";
import { LikeDogsCard } from "../components/LikeDogsCard";
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
        raca: "Pirulito",
        ong: "Save",
        endereco: "Corpus Crist"
    },
    {
        imagem: dog2,
        nome: "Dog Marley",
        descricao: "Cachorro relaxado estilo Bob Marley",
        tipo: "Cachorro",
        raca: "Maconha",
        ong: "OMG",
        endereco: "Damn"
    },
    {
        imagem: dog3,
        nome: "Botudo",
        descricao: "Cachorro engraçado e estiloso",
        tipo: "Cachorro",
        raca: "Bota",
        ong: "Botina",
        endereco: "CIC"
    },
    {
        imagem: dog4,
        nome: "Doginstein",
        descricao: "Cachorro genial e divertido",
        tipo: "Cachorro",
        raca: "Inteligente",
        ong: "Genio",
        endereco: "Av. Platão"
    }
];

export const LikePage = () => {
    return (
        <main className="w-full h-screen bg-[#f5f7fb]">

            <Header />

            <div className="w-full flex">

                <SideBar />

                <section className="flex-1 flex items-center justify-center bg-blue-100 gap-10 flex-wrap">

                    <div className="w-[50vw] h-[90vh] bg-[#183b64] rounded-3xl grid grid-cols-2 gap2 overflow-y-scroll">

                        {pets.map((pet, index) => (
                            <LikeDogsCard
                                key={index}
                                pet={pet}
                            />
                        ))}
                    </div>

                </section>

            </div>

        </main>
    );
};