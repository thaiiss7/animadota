import { Header } from "../components/Header";
import { OngSideBar } from "../components/OngSideBar";

export const OngPage = () => {
    return(
        <>
            <main className="w-full h-screen bg-[#f5f7fb]">
                <Header/>

                <div className="w-full flex">

                    <OngSideBar/>

                </div>

            </main>
        </>
    );
}