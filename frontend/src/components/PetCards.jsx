import like from "../assets/circle-heart.png"
import cancel from "../assets/cancel.png"

export const PetCards = ({ pet, proxPet, direcao }) => {
  return (
    // Codigo JS para escolher o lado para a transição
    <div
      className={`
        w-[30%] h-[90%] overflow-hidden rounded-2xl relative
        transition-all duration-300


        ${direcao === "esquerda"
          ? "-rotate-12 -translate-x-20 opacity-0"
          : ""}

        ${direcao === "direita"
          ? "rotate-12 translate-x-20 opacity-0"
          : ""}
      `}
    >

    {/* Imagem */}
      <img
        src={pet.imagem}
        alt=""
        className="w-full h-full object-cover"
      />

      {/* Gradiente */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent to-[#143253]" />

      {/* Texto */}
      <div className="absolute bottom-10 left-4 w-[90%] flex flex-col justify-center items-center text-white">

        <h1 className="text-xl font-bold flex self-start"> {pet.nome} </h1>
        
        <p>
          {pet.descricao}
        </p>

        <section className="flex items-center justify-center w-full gap-15 mt-5">

            <img src={cancel} alt="" onClick={() => proxPet("esquerda")} className="w-20"/>
            <img src={like}  onClick={() => proxPet("direita")} alt="" className="w-20"/>

        </section>
      </div>

    </div>
  );
};