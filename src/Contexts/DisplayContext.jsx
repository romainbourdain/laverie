import React, { useState, useContext } from "react";

const DisplayContext = React.createContext();

const defaultDisplay = {
    popup: false,
}

export const DisplayContextProvider = ({ children }) => {
    const [popup, setPopup] = useState(defaultDisplay.popup);
    return (<DisplayContext.Provider value={{popup, setPopup}}>{children}</DisplayContext.Provider>)
}

export const useDisplayContext = () => useContext(DisplayContext);