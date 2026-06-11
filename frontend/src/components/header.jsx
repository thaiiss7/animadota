import { useNavigate } from "react-router-dom"
import paw from "../assets/paw.png"

export const Header = () => {

    const navigate = useNavigate()

    return (
        <>

            <div className="w-full h-18 bg-[#21528A] flex items-center gap-2">
                
                <img src={paw} alt="paw" onClick={() => navigate('/main')} className="w-10 ml-4" />
                <h1 className="text-white text-3xl">AnimaDota</h1>
            </div>

        </>
    )

}