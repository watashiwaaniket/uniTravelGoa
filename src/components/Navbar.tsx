import { Link } from "react-router-dom";

export default function Navbar() {
    const navItems = [
        { label: "Home", href: "/" },
        { label: "Goa", href: "/goa" },
        { label: "Adventures & Activities", href: "/activities-and-adventure"},
        { label: "Contact", href: "/contact"},
        { label: "About us", href: "/about"}
      ];

    return(
        <div className="w-screen h-20 flex justify-center items-center z-50 fixed top-0 bg-black bg-opacity-80 backdrop-blur-md">
            <ol className="flex w-[520px] md:w-[720px] justify-evenly text-slate-100 font-bold text-xl">
                {navItems.map((item, index) => (
                    <li key={index}>
                    <Link to={item.href} className="text-slate-100 p-2 rounded-xl px-4 border-slate-100 hover:text-slate-400">{item.label}</Link>
                    </li>
                ))}
            </ol>
        </div>
    )
};
