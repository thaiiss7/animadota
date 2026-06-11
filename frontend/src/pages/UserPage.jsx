import { Header } from "../components/Header"
import { SideBar } from "../components/SideBar"

export const UserPage = () => {

    return (
        <>
            <main className="w-full h-screen">
                <Header/>

                <div className="w-full flex">

                    <SideBar/>

                    {/* Conteúdo */}
                    <section className="flex-1 flex items-center justify-center bg-gray-700 gap-30">

                        <section className="w-[35%] h-[80%] bg-white">

                        </section>

                        <section className="w-[35%] h-[80%] bg-[#21528A]">

                        </section>
                       
                    </section>
                </div>

            </main>

        </>
    )

}