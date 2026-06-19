import { OngHeader } from "../components/OngHeader";
import { OngSideBar } from "../components/OngSideBar";

import dog1 from "../assets/dog.jpg";
import dog2 from "../assets/dog2.jpg";
import dog3 from "../assets/dog3.jpg";
import dog4 from "../assets/dog4.jpg";
import dog5 from "../assets/dog5.jpg";

const pets = [
    {
        imagem: dog1,
        nome: "Pirulito",
        descricao: "Cachorro que come pirulito pirimpimpim muito carinhoso manhoso e engraçado",
        tipo: "Cachorro",
        raca: "pirulito",
        ong: "Save",
        endereco: "Corpus Crist",
        status: false,
        idade: "2 anos"
    },
    {
        imagem: dog2,
        nome: "Dog Marley",
        descricao: "cachorro relaxado estilo bob marley",
        tipo: "Cachorro",
        raca: "Maconha",
        ong: "Omg",
        endereco: "Damn",
        status: false,
        idade: "1 ano"
    },
    {
        imagem: dog3,
        nome: "Botudo",
        descricao: "cachorro engraçado e estiloso",
        tipo: "Cachorro",
        raca: "bota",
        ong: "Botina",
        endereco: "CIC",
        status: true,
        idade: "6 meses"
    },
    {
        imagem: dog4,
        nome: "Doginstein",
        descricao: "cachorro genial e divertido",
        tipo: "Cachorro",
        raca: "inteligente",
        ong: "Genio",
        endereco: "Av. Platao",
        status: true,
        idade: "1,5 anos"
    },
    {
        imagem: dog5,
        nome: "Neymar",
        descricao: "cachorro caneteiro caidor",
        tipo: "Cachorro",
        raca: "Jogador",
        ong: "FIFA",
        endereco: "Av. Cai Cai",
        status: false,
        idade: "2 anos"
    }
];

export const OngPage = () => {
    return(
        <>
            <main className="w-full h-screen bg-[#f5f7fb]">
                <OngHeader />

                <div className="w-full flex justify-center items-center">

                    <OngSideBar />

                    <section className="flex gap-8 text-white w-full max-w-7xl px-6 items-start justify-center">

                        {/* primeiro card */}
                        <section className="w-[52%] h-[75vh] bg-[#21528A] rounded-3xl flex flex-col p-4 hover:shadow-[0_0_50px_rgba(33,82,138,1)] transition-all">

                            <div className="flex flex-col gap-4 h-full">

                                {/* Cards de resumo */}
                                <div className="w-full grid grid-cols-4 gap-2 bg-[#f5f7fb] rounded-2xl p-2">

                                    <section className="h-28 flex flex-col justify-between p-3 bg-blue-600 rounded-xl">
                                        <h1 className="text-sm font-medium">
                                            Animais Cadastrados
                                        </h1>

                                        <h1 className="text-3xl font-bold">
                                            12
                                        </h1>
                                    </section>

                                    <section className="h-28 flex flex-col justify-between p-3 bg-rose-600   rounded-xl">
                                        <h1 className="text-sm font-medium">
                                            Adotados
                                        </h1>

                                        <h1 className="text-3xl font-bold">
                                            5
                                        </h1>
                                    </section>

                                    <section className="h-28 flex flex-col justify-between p-3 bg-emerald-600 rounded-xl">
                                        <h1 className="text-sm font-medium">
                                            Disponíveis
                                        </h1>

                                        <h1 className="text-3xl font-bold">
                                            7
                                        </h1>
                                    </section>

                                    <section className="h-28 flex flex-col justify-between p-3 bg-amber-500 rounded-xl">
                                        <h1 className="text-sm font-medium">
                                            Solicitações
                                        </h1>

                                        <h1 className="text-3xl font-bold">
                                            3
                                        </h1>
                                    </section>

                                </div>

                                {/* Tabela */}
                                <div className="flex-1 w-full bg-[#f5f7fb] rounded-2xl p-2 overflow-y-auto">

                                    <table className="w-full border-collapse">

                                        <thead>
                                            <tr className="text-[#21528A] border-b border-gray-300">
                                                <th className="p-3 text-left">Foto</th>
                                                <th className="p-3 text-left">Nome</th>
                                                <th className="p-3 text-left">Raça</th>
                                                <th className="p-3 text-left">Idade</th>
                                                <th className="p-3 text-left">Status</th>
                                                <th className="p-3 text-left">Ações</th>
                                            </tr>
                                        </thead>

                                        <tbody className="text-[#21528A]">
                                            {pets.map((pet, index) => (
                                                <tr
                                                    key={index}
                                                    className="border-b border-gray-200 hover:bg-gray-100 transition-all"
                                                >
                                                    <td className="p-3">
                                                        <img
                                                            src={pet.imagem}
                                                            alt={pet.nome}
                                                            className="w-12 h-12 object-cover"
                                                        />
                                                    </td>

                                                    <td className="p-3 font-semibold">
                                                        {pet.nome}
                                                    </td>

                                                    <td className="p-3">
                                                        {pet.raca}
                                                    </td>

                                                    <td className="p-3">
                                                        {pet.idade}
                                                    </td>

                                                    <td className="p-3">
                                                        <span
                                                            className={`px-3 py-1 rounded-lg text-sm text-white ${
                                                                pet.status
                                                                    ? "bg-red-600"
                                                                    : "bg-green-600"
                                                            }`} 
                                                        >
                                                            {pet.status ? "Adotado" : "Disponível"}
                                                        </span>
                                                    </td>

                                                    <td className="p-3">
                                                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg transition-all">
                                                            Editar
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>

                                    </table>

                                </div>

                            </div>

                        </section>

                        {/* segundo card */}
                        <section className="w-[52%] h-[75vh] bg-[#21528A] rounded-3xl flex flex-col p-4 hover:shadow-[0_0_50px_rgba(33,82,138,1)] transition-all">

                            <div className="h-full flex flex-col gap-4">
                                            
                                <h1>Cadastrar Animal:</h1>
                                
                                <section>
                                    <h1>Nome do Animal</h1>

                                    <input type="text" placeholder=""/>
                                </section>
                            </div>

                        </section>

                    </section>

                </div>

            </main>
        </>
    );
}