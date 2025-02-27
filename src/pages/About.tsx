import Navbar from "../components/Navbar";
import TiltedCard from "../components/TiltedCard";

export default function About() {
    return(
        <>
            <Navbar />
            <div className="w-screen h-screen flex items-center justify-center -z-10" style={{backgroundImage: "url('/contact-hero.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
                <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8 ">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-6xl font-bold tracking-tight sm:text-7xl drop-shadow-lg -mt-80 text-orange-300">
                            ABOUT US
                        </h1>
                    </div>
                </div>
            </div>
            <div className="w-screen h-600px flex items-center justify-center -z-10 bg-[#B5828C] bg-grid-white">
                <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8 ">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-4xl drop-shadow-lg text-orange-300">
                            WHAT WE CAN OFFER?<br /><span className="text-5xl sm:text-5xl drop-shadow-2xl">YOUR DREAM VACATION</span>
                        </h1>
                        <p className="mt-6 px-6 text-xl leading-8 font-semibold text-muted-foreground drop-shadow-md">
                            <span className="bg-black bg-opacity-65 text-yellow-200">The premier travel agency in Goa, India. We specialize in creating unforgettable travel experiences for our clients, providing personalized itineraries and exceptional service. Whether you&apos;re seeking a relaxing beach getaway, an adventurous trek through the lush jungles, a 24/7 taxi service, our expert travel advisors is dedicated to curating the perfect trip tailored to your preferences and budget. Let us take care of all the details while you focus on creating lifelong memories.</span><br />
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-screen h-[300px] flex items-center justify-start -z-10 bg-[#B5828C] bg-grid-white">
                <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8 ">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-4xl drop-shadow-lg text-orange-300">
                            RELAX IN GOA
                        </h1>
                        <p className="mt-6 px-6 text-xl leading-8 font-semibold text-muted-foreground drop-shadow-md">
                            <span className="bg-black bg-opacity-65 text-yellow-200">Amazing, all-inclusive resorts, beautiful beaches and mindfulness sessions - these are just a few of the things that will help you relax and enjoy your holiday.</span><br />
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#B5828C] bg-grid-white font-bold text-center"><h2 className="font-bold text-5xl text-orange-300 drop-shadow-lg p-1">What they Say About us?</h2></div>
            <div className="w-screen h-[380px] flex items-center justify-center bg-[#B5828C] bg-grid-white">
                <div className="flex h-auto w-[560px] items-center justify-center">
                    <TiltedCard
                    imageSrc="/testimonial.png"
                    altText="Customer Review"
                    captionText="Customer Review"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text text-[#FFCDB2] font-bold text-lg bg-black bg-opacity-65 rounded-md">
                            Customer review
                        </p>
                    }
                    />
                </div>
            </div>            
        </>
    )
};
