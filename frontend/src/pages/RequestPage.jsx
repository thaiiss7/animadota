import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { OngHeader } from "../components/OngHeader";
import { OngSideBar } from "../components/OngSideBar";
import { RequestDetails } from "../components/RequestDetails";



import userbase from "../assets/user-base.jpg"

import dog1 from "../assets/dog.jpg";
import dog2 from "../assets/dog2.jpg";
import dog3 from "../assets/dog3.jpg";
import dog4 from "../assets/dog4.jpg";

const requests = [
    {
        id: "#001",
        foto_user: userbase,
        nome_user: "Bruna Tavarez Neto",
        contato: "419 40028922",
        data_solicitacao: "01-06-2026",
        status: "Solicitado",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minus doloribus quaerat sunt, quas, nobis quam accusamus at id qui molestiae voluptatum soluta ducimus molestias omnis autem. Velit, at sit!",
        tp_residencia: "The Beta House",
        endereco: "Rua Francisco Alfão 67"
    },
    {
        id: "#002",
        foto_user: userbase,
        nome_user: "Lesla de Mineiro",
        contato: "419 40028922",
        data_solicitacao: "16-06-2026",
        status: "Em Análise",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minus doloribus quaerat sunt, quas, nobis quam accusamus at id qui molestiae voluptatum soluta ducimus molestias omnis autem. Velit, at sit!",
        tp_residencia: "The Beta House",
        endereco: "Rua Francisco Alfão 67"
    },
    {
        id: "#003",
        foto_user: userbase,
        nome_user: "Bruna Tavarez Neto",
        contato: "419 40028922",
        data_solicitacao: "01-06-2026",
        status: "Solicitado",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minus doloribus quaerat sunt, quas, nobis quam accusamus at id qui molestiae voluptatum soluta ducimus molestias omnis autem. Velit, at sit!",
        tp_residencia: "The Beta House",
        endereco: "Rua Francisco Alfão 67"
    },
    {
        id: "#004",
        foto_user: userbase,
        nome_user: "Lesla de Mineiro",
        contato: "419 40028922",
        data_solicitacao: "16-06-2026",
        status: "Em Análise",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minus doloribus quaerat sunt, quas, nobis quam accusamus at id qui molestiae voluptatum soluta ducimus molestias omnis autem. Velit, at sit!",
        tp_residencia: "The Beta House",
        endereco: "Rua Francisco Alfão 67"
    }
]


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



export const Request = () => {

    const navigate = useNavigate();
    const [modalAberto, setModalAberto] = useState(false)
    const [dadosSelecionados, setDadosSelecionados] = useState(null);
    const [listaRequests, setListaRequests] = useState(requests);

    const alterarStatus = (id, novoStatus) => {
    setListaRequests((prev) =>
        prev.map((item) =>
            item.id === id
                ? { ...item, status: novoStatus }
                : item
        )
    );

    setDadosSelecionados((prev) => ({
            ...prev,
            request: {
                ...prev.request,
                status: novoStatus
            }
        }));
    };

    return(
        <>
            <main className="w-full h-screen bg-[#f5f7fb] flex flex-col">
                <OngHeader />

                <div className="flex flex-1">
                    <OngSideBar />

                    <section className="flex-1 p-6">

                        <RequestDetails
                            aberto={modalAberto}
                            fechar={() => setModalAberto(false)}
                            dados={dadosSelecionados}
                            alterarStatus={alterarStatus}
                        />

                        <div className="w-full h-full bg-white rounded-xl p-3">
                            <div className="flex justify-between items-center">
                                <h1 className="text-xl mt-2 font-bold text-[#21528A]">Solicitações de Adoção</h1>

                               <div className="relative w-full max-w-md mt-3">
                                    <Search
                                        size={18}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Buscar por nome ou animal..."
                                        className="w-full border rounded-lg pl-10 pr-4 py-2 outline-none focus:border-[#21528A]"
                                    />
                                </div>

                            </div>

                            <div className="border border-gray-300 rounded-2xl w-full h-[85%] mt-5 overflow-hidden">
                                <table className="w-full table-auto">
                                    <thead>
                                        <tr className="text-[#21528A] border-b border-gray-300 bg-gray-50">
                                            <th className="p-3 text-left">ID</th>
                                            <th className="p-3 text-left">Solicitante</th>
                                            <th className="p-3 text-left">Animal</th>
                                            <th className="p-3 text-left">Contato</th>
                                            <th className="p-3 text-left">Data Solicitação</th>
                                            <th className="p-3 text-left">Status</th>
                                            <th className="p-3 text-left">Ações</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {listaRequests.map((request, index) => {
                                            const pet = pets[index];

                                            return(

                                                <tr
                                                key={request.id}
                                                className="border-b border-gray-200 hover:bg-gray-50"
                                                >
                                                    {/* // id */}
                                                    <td className="p-3">
                                                        {request.id}
                                                    </td>

                                                    {/* // user info */}
                                                    <td className="p-3">
                                                        <div className="flex items-center gap-2">
                                                            <img
                                                                src={request.foto_user}
                                                                alt={request.nome_user}
                                                                className="w-8 h-8 rounded-full object-cover"
                                                            />

                                                            <span>
                                                                {request.nome_user}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    
                                                    {/* // pet info */}
                                                    <td className="p-3">
                                                        <div className="flex items-center gap-2">
                                                            <img
                                                                src={pet.imagem}
                                                                alt={pet.nome}
                                                                className="w-8 h-8 rounded-full object-cover"
                                                            />

                                                            <span>
                                                                {pet.nome}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    
                                                    {/* // contato */}
                                                    <td className="p-3">
                                                        {request.contato}
                                                    </td>

                                                    {/* // data */}
                                                    <td className="p-3">
                                                        {request.data_solicitacao}
                                                    </td>

                                                    {/* status solicitacao */}
                                                    <td className="p-3">
                                                        <span
                                                            className={`px-3 py-1 rounded-full text-sm ${
                                                                request.status === "Solicitado"
                                                                    ? "bg-yellow-100 text-yellow-700"
                                                                    : request.status === "Em Análise"
                                                                    ? "bg-blue-100 text-blue-700"
                                                                    : request.status === "Aprovado"
                                                                    ? "bg-green-100 text-green-700"
                                                                    : "bg-gray-100 text-gray-700"
                                                            }`}
                                                        >
                                                            {request.status}
                                                        </span>
                                                    </td>

                                                    <td className="p-3">
                                                        <button
                                                            className="bg-[#21528A] hover:bg-[#1b4574] text-white px-4 py-2 rounded-lg transition"
                                                            onClick={() => {
                                                                setDadosSelecionados({
                                                                    request,
                                                                    pet
                                                                });

                                                                setModalAberto(true);
                                                            }}
                                                        >
                                                            Ver
                                                        </button>
                                                    </td>
                                                </tr>
                                            )

                                        })}
                                    </tbody>    
                                </table>
                            </div>

                        </div>


                    </section>
                </div>
            </main>
        </>
    );
}