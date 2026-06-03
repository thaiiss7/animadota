export const PetCards = () => {
  return (
    <div className="w-100 h-130 overflow-hidden rounded-2xl relative">

    {/* Imagem */}
      <img
        src="./images/dog.jpg"
        alt=""
        className="w-full h-full object-cover"
      />

      {/* Gradiente */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent to-[#26369E]" />

      {/* Texto */}
      <div className="absolute bottom-10 left-4 text-white">
        <h1 className="text-xl font-bold">Dog Pirulito</h1>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas repudiandae maxime, rerum labore blanditiis deserunt
            quod cupiditate eaque laboriosam tempora in exercitationem temporibus porro obcaecati fugiat tempore consequatur saepe sunt.
        </p>

        <section className="flex items-center justify-center w-full gap-15 mt-5">

            <img src=".\images\cancel.png" alt="" className="w-15"/>
            <img src=".\images\circle-heart.png" alt="" className="w-15"/>

        </section>
      </div>

    </div>
  );
};