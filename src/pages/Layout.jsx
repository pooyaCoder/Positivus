import { Outlet, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import LogoHeader from "./assts/LogoHeader.png"
const Layout = () => {
    const [open ,setopen]=useState(false)
    console.log(open)
  return (
    <>
    <header className="mb-3">
        <div className="flex justify-between items-center">
            <ul>
            <li>
            <Link to="/"><img src={LogoHeader} alt="link" className="w-30" /></Link>
          </li>
            </ul>
            <FaBars onClick={()=>{setopen(true)}} className={`${open ? `hidden`:`flex`} text-gray-500 text-xl`}/>
            <IoCloseSharp onClick={()=>{setopen(false)}} className={`${open ? `flex`:`hidden`} text-xl`}/>
        </div>
    <nav className={`${open ? `flex`:`hidden`} text-dark `} >
        <ul>
          
          <li>
            <Link to="/aboutUs" className="hover:bg-greenLight hover:border-greenLight rounded-xl focus:bg-greenLight focus:border-greenLight p-1">About us</Link>
          </li>
          <li>
            <Link to="/Services" className="hover:bg-greenLight hover:border-greenLight rounded-xl focus:bg-greenLight focus:border-greenLight p-1">Services</Link>
          </li>
          <li>
            <Link to="/useCase" className="hover:bg-greenLight hover:border-greenLight rounded-xl focus:bg-greenLight focus:border-greenLight p-1">Use Cases</Link>
          </li>
          <li>
            <Link to="/pricing" className="hover:bg-greenLight hover:border-greenLight rounded-xl focus:bg-greenLight focus:border-greenLight p-1">Pricing</Link>
          </li>
          <li>
            <Link to="/blog" className="hover:bg-greenLight hover:border-greenLight rounded-xl focus:bg-greenLight focus:border-greenLight p-1 ">Blog</Link>
          </li>
        
          <li className="mt-2">
            <Link to="/requestAquote" className="focus:bg-greenLight focus:border-greenLight border rounded-xl px-2 py-1">Request a quote</Link>
          </li>
        </ul>
      </nav>
    </header>
      <Outlet />
    </>
  )
};

export default Layout;