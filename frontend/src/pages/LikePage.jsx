import { Header } from "../components/Header";
import { LikeDogsCard } from "../components/LikeDogsCard";
import { SideBar } from "../components/SideBar";

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
]


export const LikePage = () => {
  return (
        <main className="w-full h-screen bg-[#f5f7fb]">

            <Header />

            <div className="w-full flex">

                <SideBar />

                {/* Conteúdo */}
                <section className="flex-1 flex items-center justify-center bg-blue-100 gap-15">

                    <div className="w-[80vh] h-[70vh] bg-[#21528A] rounded-3xl">
                        <LikeDogsCard
                            pet={pets[indice]}
                        />
                    </div>

                    <div className="w-[80vh] h-[70vh] bg-[#21528A] rounded-3xl">

                    </div>

                </section>

            </div>

        </main>
  );
};