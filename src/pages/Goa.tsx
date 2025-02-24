import Navbar from "../components/Navbar"
import TiltedCard from "../components/TiltedCard"
import Particles from "../components/Particles"

export default function Goa() {
    return(
        <>
            <Navbar />
            <div className="w-screen h-screen flex items-center justify-center -z-10" style={{backgroundImage: "url('/goa-banner.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
                <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8 ">
                    <div className="mx-auto max-w-2xl text-center -mt-96">
                        <h1 className="text-6xl font-bold tracking-tight sm:text-7xl drop-shadow-lg">
                            OUR PREMIERED <br /><span className="text-6xl sm:text-9xl drop-shadow-2xl">SERVICES</span>
                        </h1>
                        <p className="mt-6 px-6 text-lg leading-8 font-semibold text-muted-foreground drop-shadow-md">
                            <span className="bg-black bg-opacity-45">From consulting to implementation and support, our comprehensive services can help your Vacation.</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-screen h-[380px] flex items-center justify-center bg-[#B5828C] bg-grid-white">
                <div className="flex h-auto w-[560px] items-center justify-center">
                    <TiltedCard
                    imageSrc="/taxi.jpg"
                    altText="Taxi Services"
                    captionText="Pick up and drop"
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
                        Taxi Services 
                        </p>
                    }
                    />
                    <TiltedCard
                    imageSrc="/beach.jpg"
                    altText="sight seeing"
                    captionText="Sight Seeing"
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
                        Sight Seeing
                        </p>
                    }
                    />
                    <TiltedCard
                    imageSrc="/water-sports.png"
                    altText="Water Sports"
                    captionText="Water Sports"
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
                        Water Sports
                        </p>
                    }
                    />
                </div>
            </div>
            <div className="w-screen h-[400px] flex items-center justify-center bg-[#B5828C] bg-grid-white">
                <div className="flex h-auto w-[980px] items-center justify-center">
                    <div className="w-[300px] h-[300px] m-4 text-center">
                        <ul className="text-lg font-semibold">
                            <li className="font-bold">PICK UP AND DROP</li>
                            <li>DABOLIM (GOI)</li>
                            <li>MOPA (GOX)</li>
                            <li>VASCO RAILWAY STATION</li>
                            <li>MADGAON RAILWAY STATION</li>
                            <li>THIVIM RAILWAY STATION</li>
                            <li>KARMALI RAILWAY STATION</li>
                            <li>MAPUSA</li>
                            <li>PANJIM</li>
                        </ul>                        
                    </div>
                    <div className="w-[300px] h-[300px] m-4 text-center">
                    <ul className="text-lg font-semibold">
                            <li className="font-bold">SIGHT SEEING</li>
                            <li>PRIVATE TAXI N/S GOA</li>
                            <li>A/C SHARING BUS N/S GOA</li>
                        </ul>  
                    </div>
                    <div className="w-[300px] h-[300px] m-4 text-center">
                    <ul className="text-lg font-semibold">
                            <li className="font-bold">WATER SPORTS</li>
                            <li>PARASAILING</li>
                            <li>JET SKI</li>
                            <li>BUMPER RIDE</li>
                            <li>BANANA RIDE</li>
                            <li>SPEED BOAT RIDE</li>
                        </ul>  
                    </div>
                </div>
            </div>
            <div style={{ width: '100%', height: '500px', position: 'relative' }} className="flex justify-center items-center">
                <div className="absolute inset-0 -z-10">
                    <Particles
                        particleColors={['#ffffff', '#ffffff']}
                        particleCount={200}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover={true}
                        alphaParticles={false}
                        disableRotation={false}
                    />
                </div>
                <p className="text-3xl relative z-10">Let&apos;s get <a href="https://universaltravelsgoa.com/page" className="text-4xl text-orange-400 hover:text-pink-600">Booking!</a></p>
            </div>
        </>
    )
};
