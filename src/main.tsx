import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './pages/About.tsx';
import Goa from './pages/Goa.tsx';
import ActAdventure from './pages/ActAdventure.tsx';
import Contact from './pages/Contact.tsx';
import SightSeeing from './pages/SightSeeing.tsx';

const  router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/goa",
    element: <Goa />
  },
  {
    path: "/activities-and-adventure",
    element: <ActAdventure />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/sight-seeing",
    element: <SightSeeing />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
