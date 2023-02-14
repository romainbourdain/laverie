import React, { useState, useContext } from "react";

const DateContext = React.createContext();

const date = new Date();

const defaultDisplay = {
    currentDate: new Date(date),
    selectedDate: new Date(date),
}

export const DateContextProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState(defaultDisplay.selectedDate);
    const currentDate = defaultDisplay.currentDate;
    return (<DateContext.Provider value={{currentDate, selectedDate, setSelectedDate}}>{children}</DateContext.Provider>)
}

export const useDateContext = () => useContext(DateContext);