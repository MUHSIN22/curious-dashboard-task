import React, { createContext, useState } from 'react'

export const EssentialContext = createContext();

export function EssentialProvider({children}) {
    const [toggles, setToggles] = useState({
        preview: false,
        nav:false,
        dark: false
    }) 
    return (
        <EssentialContext.Provider value={[toggles,setToggles]}>
            {children}
        </EssentialContext.Provider>
    )
}
