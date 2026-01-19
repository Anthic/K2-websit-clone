/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const NavbarContext = createContext()
export const NavbarColorContext =createContext()

function NavContext({children}) {
    const [navColor,setNavColor] = useState("white")
    const [navOpen,setNavOpen]=useState(false)

    const location =useLocation().pathname
    useEffect(function(){
        if (location == "/projects" || location == "/agence") {
            setNavColor("black")
        } else {
            setNavColor("white")
        }
    },[location])
    return (
        <div>
            <NavbarContext.Provider value={[navOpen,setNavOpen]}>
                <NavbarColorContext.Provider value={[navColor,setNavColor]}>
                     {children}
                </NavbarColorContext.Provider>
               
            </NavbarContext.Provider>
        </div>
    );
}

export default NavContext;