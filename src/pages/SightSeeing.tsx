import Navbar from "../components/Navbar"
import southNorthGoa from "/south-north-goa.jpg"

export default function SightSeeing() {
    return(
        <>
            <Navbar />
            <div className="h-screen w-screen flex flex-col justify-center items-center bg-[#B5828C] bg-grid-white">
                <img src={southNorthGoa} alt="south vs north goa" />
                <div className="flex w-[680px] h-auto">
                    <div className="w-[340px] bg-slate-500">

                    </div>
                    <div className="w-[340px] bg-slate-800">

                    </div>
                </div>
            </div>
        </>
    )
};
