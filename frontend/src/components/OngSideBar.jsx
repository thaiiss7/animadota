import user from "../assets/user-icon.png"
import heart from "../assets/heart.png"
import logOff from "../assets/sign-out.png"

import { useNavigate } from "react-router-dom";

export const OngSideBar = () => {

    const navigate = useNavigate();

    return (
        <div className="w-[5%] h-[calc(100vh-72px)] bg-[#183b64] text-white flex flex-col items-center shadow-lg">

            <section className="h-full flex flex-col mt-5 gap-8">

                <img
                    src={user}
                    onClick={() => navigate("/user")}
                    alt=""
                    className="w-10 cursor-pointer hover:scale-110 transition"
                />

                <img
                    src={heart}
                    onClick={() => navigate("/likePage")}
                    alt=""
                    className="w-10 cursor-pointer hover:scale-110 transition"
                />
                <img
                    src={logOff}
                    onClick={() => navigate("/")}
                    alt=""
                    className="w-10 mt-auto cursor-pointer hover:scale-110 transition mb-3"
                />

            </section>

        </div>
    );
};