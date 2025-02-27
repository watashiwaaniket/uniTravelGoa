import Navbar from "../components/Navbar";
import FlowingMenu from "../components/FlowingMenu";

export default function ActAdventure() {
    const demoItems = [
        { link: '/goa', text: 'Dudhsagar Waterfall Trip', image: 'https://picsum.photos/600/400?random=1' },
        { link: '#', text: 'Malvan (Scuba Diving & Water Sports)', image: 'https://picsum.photos/600/400?random=2' },
        { link: '#', text: 'Cruise', image: 'https://picsum.photos/600/400?random=3' },
        { link: '#', text: 'Water Sports', image: 'https://picsum.photos/600/400?random=4' },
        { link: '#', text: 'Bungee Jumping', image: 'https://picsum.photos/600/400?random=5' },
      ];

    return(
        <>
        <Navbar />
        <div className="w-screen h-screen flex items-center justify-center -z-10" style={{backgroundImage: "url('/activities-adventures.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8 ">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-6xl font-bold tracking-tight sm:text-7xl drop-shadow-lg">
                        ACTIVITIES AND <br /><span className="text-6xl sm:text-8xl drop-shadow-2xl">ADVENTURES</span>
                    </h1>
                    <p className="mt-6 px-6 text-2xl leading-8 font-semibold text-muted-foreground drop-shadow-md">
                        <span className="bg-black bg-opacity-45">Come experience the wonders of Goa with us!</span><br />
                        <span className="bg-black bg-opacity-45">Checkout the activities offered by us below.</span>
                    </p>
                </div>
            </div>
        </div>
        <div style={{ height: '600px', position: 'relative' }}>
            <FlowingMenu items={demoItems} />
        </div>
        </>
    )
};
