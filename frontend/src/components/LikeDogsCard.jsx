export const LikeDogsCard = ({ pet }) => {
    return (
        <>
            <div className="w-[90%] h-[90%] overflow-hidden rounded-2xl relative transition-all duration-300">
                
                <img
                    src={pet.imagem}
                    alt={pet.nome}
                    className="w-full h-full object-cover object-top"
                />

                {/* degradê */}
                <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent to-[#143253]" />

                <div className="absolute bottom-10 left-4 w-[90%] flex flex-col justify-end items-start text-white text-left">

                    <section className="w-full gap-2 flex flex-col justify-end">

                        <div className="flex">

                            <section className="mr-2">
                                <h1 className="text-sm font-bold">
                                    {pet.nome}
                                </h1>
                            </section>

                            <section>
                                <h1 className="text-sm font-bold">
                                    - {pet.tipo}
                                </h1>
                            </section>

                        </div>

                        {/* info pet */}
                        <section className="flex justify-between">

                            <section className="text-sm flex gap-2">
                                <p>Raça:</p>
                                <p>{pet.raca}</p>
                            </section>

                        </section>

                        {/* info ong */}
                        <section className="text-sm flex flex-col gap-2">

                            <h1 className="font-bold">
                                Informações da ONG
                            </h1>

                            <section className="text-sm flex gap-2">
                                <p>Nome ONG:</p>
                                <p>{pet.ong}</p>
                            </section>

                        </section>

                    </section>

                </div>
            </div>
        </>
    );
};