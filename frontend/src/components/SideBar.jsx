import user from "../assets/user-icon.png"
import heart from "../assets/heart.png"

import { useNavigate } from "react-router-dom";

export const SideBar = () => {

    const navigate = useNavigate();

    return (
        <div className="w-[5%] h-[calc(100vh-72px)] bg-[#183b64] text-white flex flex-col items-center">

            <section className="flex flex-col mt-5 gap-8">
                <img src={user} onClick={() => navigate("/user")} alt="" className="w-10" />
                <img src={heart} alt="" className="w-10" />
            </section>

        </div>
    );
};