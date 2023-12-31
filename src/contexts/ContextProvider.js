import React, { createContext, useContext, useState } from "react";

const stateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    notification: false,
    userProfile: false
    // Those are for the cart, chat... icons in the navbar, if they are open or closed
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true)  
    const [isClicked, setIsClicked] = useState(initialState)
    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
    const [screenSize, setScreenSize] = useState(undefined)

    return (
        <stateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize}}>
            {children}
        </stateContext.Provider>
    )
}

export const useStateContext = () => useContext(stateContext)