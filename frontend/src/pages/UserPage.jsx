import { Header } from "../components/header"
import { PetCards } from "../components/PetCards"

export const UserPage = () => {

    return (
        <>
            <main className="w-full h-screen">
                <Header/>

              <div className="w-full flex">
                {/* Sidebar */}
                <div className="w-[8%] h-[calc(100vh-72px)] bg-gray-700 text-white flex flex-col items-center">

                    <section className="flex flex-col mt-5 gap-8">
                        <img src=".\images\user-icon.png" alt="" className="w-10"/>
                        <img src=".\images\heart.png" alt="" className="w-10"/>
                    </section>

                </div>

                {/* Conteúdo */}
                <section className="flex-1 flex items-center justify-center bg-gray-700">
                    <PetCards />
                </section>
            </div>

            </main>

        </>
    )

}