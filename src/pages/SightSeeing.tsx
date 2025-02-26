import Navbar from "../components/Navbar"
import southNorthGoa from "/south-north-goa.jpg"
import Markdown from "react-markdown"
import { NorthGoaData, SouthGoaData, TourExcluded } from "../lib/store.js"

export default function SightSeeing() {
    return(
        <>
            <Navbar />
            <div className="h-auto min-h-screen w-screen flex flex-col justify-center items-center bg-[#B5828C] bg-grid-white">
                <img src={southNorthGoa} alt="south vs north goa" className="mt-28"/>
                <div className="flex w-[900px] h-auto font-semibold bg-black bg-opacity-75">
                    <div className="w-[450px] pt-4 p-2">
                        <h2 className="text-2xl font-bold pb-6"># North Goa Tour Data</h2>
                        <Markdown>{NorthGoaData}</Markdown>
                    </div>
                    <div className="w-[450px] pt-4 p-2">
                        <h2 className="text-2xl font-bold pb-6"># South Goa Tour Data</h2>
                        <Markdown>{SouthGoaData}</Markdown>
                    </div>
                </div>
                <div className="flex flex-col w-[900px] h-auto font-semibold bg-black bg-opacity-75 items-center justify-center pb-8">
                    <h2 className="text-2xl font-bold py-6">What is Not included in the tour!</h2>
                    <p className="p-4 flex flex-col justify-center items-center"><Markdown>{TourExcluded}</Markdown></p>
                </div>
            </div>
        </>
    )
};
