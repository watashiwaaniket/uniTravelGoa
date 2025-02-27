import Navbar from "../components/Navbar"
import GlassIcons from "../components/GlassIcons"

export default function Contact() {
    const items = [
        { icon: <img src="/instagram.svg" alt="instagram" />, color: 'orange', label: 'Instagram' },
        { icon: <img src="/x.png" alt="x" />, color: 'orange', label: 'X' },
        { icon: <img src="/facebook.svg" alt="facebook" />, color: 'orange', label: 'Facebook' }, 
      ];

    return(
        <>
            <Navbar />
            <div className="w-screen h-screen flex items-center justify-center -z-10" style={{backgroundImage: "url('/contact-hero.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
                <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8 ">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-6xl font-bold tracking-tight sm:text-7xl drop-shadow-lg -mt-96 text-orange-300">
                            Why wait longer? <br /><span className="text-6xl sm:text-8xl drop-shadow-2xl">CONTACT US!</span>
                        </h1>
                        <p className="mt-6 px-6 text-2xl leading-8 font-semibold text-muted-foreground drop-shadow-md">
                            <span className="bg-black bg-opacity-65 text-yellow-200">We&apos;ve been obsessed with exploring this state for several years - let us show you the best spots we&apos;ve found! From breathtaking locations to colorful culture and relaxing mood, we can help you organize a memorable stay in one of the most magical places on the planet.</span><br />
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ height: '100px', position: 'relative' }} className="flex items-center w-screen -mt-36">
                <GlassIcons items={items} className="custom-class"/>
            </div>
        </>        
    )
};
