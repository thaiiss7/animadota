import close from "../assets/close.png";

export const RequestDetails = ({
    aberto,
    fechar,
    dados,
    alterarStatus
}) => {

    if (!aberto || !dados) return null;

    const { request, pet } = dados;

    return (
        <main className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="flex flex-col w-[50%] h-[80%] bg-white rounded-2xl p-6 shadow-lg">

                <img
                    src={close}
                    alt="Fechar"
                    onClick={fechar}
                    className="w-8 h-8 self-end cursor-pointer"
                />

                <section className="flex flex-col gap-6 overflow-y-auto">

                    <h1 className="text-2xl font-bold text-[#21528A]">
                        Detalhes da Solicitação
                    </h1>

                    {/* Solicitante */}
                    <div className="border rounded-xl p-4">
                        <h2 className="text-lg font-semibold text-[#21528A] mb-3">
                            Solicitante
                        </h2>

                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={request.foto_user}
                                alt={request.nome_user}
                                className="w-20 h-20 rounded-full object-cover"
                            />

                            <div className="space-y-1">
                                <p><strong>Nome:</strong> {request.nome_user}</p>
                                <p><strong>Contato:</strong> {request.contato}</p>
                                <p><strong>Endereço:</strong> {request.endereco}</p>
                                <p><strong>Tipo de Residência:</strong> {request.tp_residencia}</p>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold">
                                Biografia
                            </p>

                            <p className="text-gray-600">
                                {request.bio}
                            </p>
                        </div>
                    </div>

                    {/* Animal */}
                    <div className="border rounded-xl p-4">
                        <h2 className="text-lg font-semibold text-[#21528A] mb-3">
                            Animal Solicitado
                        </h2>

                        <div className="flex gap-4">

                            <img
                                src={pet.imagem}
                                alt={pet.nome}
                                className="w-32 h-32 rounded-xl object-cover"
                            />

                            <div className="space-y-1">
                                <p><strong>Nome:</strong> {pet.nome}</p>
                                <p><strong>Tipo:</strong> {pet.tipo}</p>
                                <p><strong>Raça:</strong> {pet.raca}</p>
                                <p><strong>ONG:</strong> {pet.ong}</p>
                                <p><strong>Endereço:</strong> {pet.endereco}</p>
                            </div>

                        </div>

                        <div className="mt-4">
                            <p className="font-semibold">
                                Descrição
                            </p>

                            <p className="text-gray-600">
                                {pet.descricao}
                            </p>
                        </div>
                    </div>

                    {/* Solicitação */}
                    <div className="border rounded-xl p-4">

                        <h2 className="text-lg font-semibold text-[#21528A] mb-3">
                            Solicitação
                        </h2>

                        <p>
                            <strong>ID:</strong> {request.id}
                        </p>

                        <p>
                            <strong>Data:</strong> {request.data_solicitacao}
                        </p>

                        <div className="mt-3">
                            <strong>Status:</strong>

                            <span
                                className={`ml-2 px-3 py-1 rounded-full text-sm ${
                                    request.status === "Solicitado"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : request.status === "Em Análise"
                                        ? "bg-blue-100 text-blue-700"
                                        : request.status === "Aprovado"
                                        ? "bg-green-100 text-green-700"
                                        : request.status === "Reprovado"
                                        ? "bg-red-100 text-red-700"
                                        : "bg-gray-100 text-gray-700"
                                }`}
                            >
                                {request.status}
                            </span>
                        </div>
                    </div>

                    {/* Ações */}
                    <div className="border rounded-xl p-4">

                        <h2 className="text-lg font-semibold text-[#21528A] mb-4">
                            Alterar Status
                        </h2>

                        <div className="flex flex-wrap gap-3">

                            <button
                                onClick={() =>
                                    alterarStatus(request.id, "Solicitado")
                                }
                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
                            >
                                Solicitado
                            </button>

                            <button
                                onClick={() =>
                                    alterarStatus(request.id, "Em Análise")
                                }
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                            >
                                Em Análise
                            </button>

                            <button
                                onClick={() =>
                                    alterarStatus(request.id, "Aprovado")
                                }
                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                            >
                                Aprovar
                            </button>

                            <button
                                onClick={() =>
                                    alterarStatus(request.id, "Reprovado")
                                }
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                            >
                                Reprovar
                            </button>

                        </div>

                    </div>

                </section>
            </div>

        </main>
    );
};