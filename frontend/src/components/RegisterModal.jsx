import { useState } from "react";

export const RegisterModal = ({ onChangeView }) => {
    const [preview, setPreview] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files?.[0];

        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <main className="flex flex-col items-center text-white w-full gap-5">

            <h1 className="text-3xl">Cadastro</h1>

            <div className="w-full h-[60vh] overflow-y-auto scrollbar-custom flex flex-col items-center gap-6">

                {/* FOTO */}
                <section className="flex flex-col items-center gap-3">
                    <label htmlFor="profile-photo" className="cursor-pointer">
                        {preview ? (
                            <img
                                src={preview}
                                alt="Foto de perfil"
                                className="w-32 h-32 rounded-full object-cover border-4 border-[#183b64]"
                            />
                        ) : (
                            <div className="w-32 h-32 rounded-full bg-[#183b64] flex items-center justify-center">
                                Adicionar Foto
                            </div>
                        )}
                    </label>

                    <input
                        id="profile-photo"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                </section>

                {/* COLUNAS */}
                <div className="flex gap-8 w-full justify-center">

                    <div className="flex flex-col gap-4 w-[45%]">
                        <input className="p-2 bg-[#183b64] w-full rounded-2xl" placeholder="Nome" />
                        <input className="p-2 bg-[#183b64] w-full rounded-2xl" placeholder="Senha" />
                        <input className="p-2 bg-[#183b64] w-full rounded-2xl" placeholder="Telefone" />
                        <input className="p-2 bg-[#183b64] w-full rounded-2xl" placeholder="Cidade" />
                        <input className="p-2 bg-[#183b64] w-full rounded-2xl" placeholder="Complemento" />
                    </div>

                    <div className="flex flex-col gap-4 w-[45%]">
                        <input className="p-2 bg-[#183b64] w-full rounded-2xl" placeholder="Username" />
                        <input className="p-2 bg-[#183b64] w-full rounded-2xl" placeholder="Repetir senha" />
                        <input className="p-2 bg-[#183b64] w-full rounded-2xl" placeholder="Idade" />
                        <input className="p-2 bg-[#183b64] w-full rounded-2xl" placeholder="Endereço" />
                    </div>

                </div>

                {/* BIO */}
                <section className="w-[90%] flex flex-col gap-2">
                    <h1 className="text-xl">Bio</h1>

                    <textarea
                        className="p-3 bg-[#183b64] w-full rounded-2xl resize-none h-24"
                        placeholder="Digite sua bio..."
                    />
                </section>

            </div>

            <button
                className="bg-[#183b64] px-6 py-2 rounded-2xl"
                onClick={onChangeView}
            >
                Cadastrar
            </button>

        </main>
    );
};