import Navbar from "./components/Navbar"
import Magnet from "./components/Magnet"
import FlowingMenu from "./components/FlowingMenu"


const demoItems = [
  { link: '#', text: 'Explore Goa', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Understand Goa', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Relax in Goa', image: 'https://picsum.photos/600/400?random=3' },
];

function App() {

  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex items-center justify-center -z-10" style={{backgroundImage: "url('/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8 ">
          <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-6xl font-bold tracking-tight sm:text-7xl drop-shadow-lg">
                IT&apos;S TIME TO <br /><span className="text-6xl sm:text-8xl drop-shadow-2xl">VISIT GOA</span>
              </h1>
              <p className="mt-6 px-6 text-lg leading-8 font-semibold text-muted-foreground drop-shadow-md">
                <span className="bg-black bg-opacity-45">Crave new adventures, mystical experiences and relaxing beaches? You need to visit Goa. We make sure that you&apos;ll get an experience you'll never forget.</span>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                
                <Magnet padding={280} disabled={false} magnetStrength={120}>
                  <button className="bg-zinc-900 bg-opacity-70 backdrop-blur-md px-8 py-3 rounded-3xl text-sm sm:text-lg font-semibold">Explore Now!</button>
                </Magnet>
              </div>
          </div>
        </div>
      </div>
      <div style={{ height: '600px', position: 'relative' }}>
        <FlowingMenu items={demoItems} />
      </div>
    </>
  )
}

export default App
