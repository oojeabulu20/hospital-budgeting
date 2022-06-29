//storing the data locally so that we dont lose the data when we come out of the page
import { useState, useEffect } from "react";

export function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)
        
        if (typeof defaultValue === "function") {
            return defaultValue()
        } else {
            return defaultValue
        }
    })

    //use effect to handle the change
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]) //setting the storage as key,value
    
    return [value, setValue]
}