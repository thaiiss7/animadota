export const LikeDogsCard = () => {
    return(
        <>
    // Codigo JS para escolher o lado para a transição
    <div className="w-[30%] h-[90%] overflow-hidden rounded-2xl relative transition-all duration-300"
      >
        <img src={pet.imagem} alt="" className="w-full h-full object-cover"/>

        {/* degradê */}
        <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent to-[#143253]" />

        <div className="absolute bottom-10 left-4 w-[90%] flex flex-col justify-center items-center text-white text-left">


          <section className="w-full gap-2 flex flex-col">

            <section>
              <h1 className="text-xl font-bold flex self-start"> {pet.nome} </h1>

              <p className="self-start w-full">
                {pet.descricao}
              </p>
            </section> 


            {/* INFORMACOES DO ANIMAL */}
            <section className="flex justify-between">

              <section className="flex gap-2">
                <p className="self-start">
                  Espécie:
                </p>

                <p className="self-start">
                  {pet.tipo}
                </p>
              </section>

              <section className="flex gap-2">
                <p className="self-start">
                  Raça:
                </p>

                <p className="self-start">
                  {pet.raca}
                </p>
              </section>

            </section>

            {/* INFORMACOES DA ONG */}
            <section className="flex flex-col justify-between">

              <h1 className="font-bold">Informações da ONG</h1>

              <section className="flex gap-2">
                <p className="self-start">
                  Nome Ong:
                </p>

                <p className="self-start">
                  {pet.ong}
                </p>
              </section>

              <section className="flex gap-2">
                <p className="self-start">
                  Endereço Ong:
                </p>

                <p className="self-start">
                  {pet.endereco}
                </p>
              </section>

            </section>
          </section>    
        </div>

    </div>
        </>
    );
}